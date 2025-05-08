import os
import sys
from PIL import Image
import glob

def convert_to_webp(input_path, output_path, target_size_kb=200):
    """
    Convert an image to WebP format targeting a specific file size using only compression.
    
    Args:
        input_path: Path to the input image
        output_path: Path to save the WebP image
        target_size_kb: Target file size in KB (default: 200KB)
    """
    try:
        # Open the image
        image = Image.open(input_path)
        
        # Convert to RGB if the image has an alpha channel (RGBA)
        if image.mode == 'RGBA':
            # Create a white background
            background = Image.new('RGB', image.size, (255, 255, 255))
            # Paste the image with alpha on the background
            background.paste(image, mask=image.split()[3])
            image = background
        
        # For all other modes that aren't RGB, convert to RGB
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Target size in bytes
        target_size = target_size_kb * 1024
        
        # First try with quality 90 (high quality)
        quality = 90
        image.save(output_path, 'WEBP', quality=quality)
        current_size = os.path.getsize(output_path)
        
        # Binary search approach to find the right quality
        max_quality = 100
        min_quality = 4  # Set minimum quality to 4
        max_attempts = 8  # Fewer attempts since we have a higher minimum quality
        attempts = 0
        
        while abs(current_size - target_size) > target_size * 0.1 and attempts < max_attempts and quality > min_quality:
            attempts += 1
            
            if current_size > target_size:
                # File too big, reduce quality
                max_quality = quality
                quality = max(min_quality, (min_quality + quality) // 2)
            else:
                # File too small, increase quality
                min_quality = quality
                quality = (max_quality + quality) // 2
            
            # Save with new quality setting
            image.save(output_path, 'WEBP', quality=quality)
            current_size = os.path.getsize(output_path)
            
            print(f"Attempt {attempts}: Quality {quality}, Size: {current_size/1024:.2f}KB (Target: {target_size_kb}KB)")
        
        # If we're still above target size, try the advanced compression methods
        if current_size > target_size * 1.1:
            # Try only methods 5 and 6 (better compression)
            for method in range(5, 7):
                image.save(output_path, 'WEBP', quality=quality, method=method)
                method_size = os.path.getsize(output_path)
                print(f"Advanced compression: Quality {quality} with method={method}, Size: {method_size/1024:.2f}KB")
                
                # Update current size if we found a better compression
                if method_size < current_size:
                    current_size = method_size
        
        # Final stats
        original_size = os.path.getsize(input_path)
        reduction = (1 - current_size / original_size) * 100
        print(f"Converted: {input_path} → {output_path}")
        print(f"Final size: {current_size/1024:.2f}KB (Target: {target_size_kb}KB)")
        print(f"Size reduction: {reduction:.2f}% (from {original_size/1024:.2f}KB)")
        
        if current_size > target_size * 1.2:
            print(f"Note: Could not reach target size using compression alone. Best achievable: {current_size/1024:.2f}KB")
            
    except Exception as e:
        print(f"Error converting {input_path}: {str(e)}")

def main():
    # Get the current directory
    current_dir = os.getcwd()
    
    # Define the image extensions to look for
    image_extensions = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif']
    
    # Find all images in the current directory using a case-insensitive approach
    image_files = []
    for file in os.listdir(current_dir):
        # Get the file extension and convert to lowercase for comparison
        _, ext = os.path.splitext(file)
        ext = ext.lower()
        
        # Only include files with image extensions
        if ext in image_extensions:
            image_files.append(os.path.join(current_dir, file))
    
    # Remove any duplicates
    image_files = list(set(image_files))
    
    if not image_files:
        print("No image files found in the current directory.")
        return
    
    print(f"Found {len(image_files)} image files. Starting conversion...")
    print(f"Target size: ~200KB per image (using compression only, minimum quality: 4)")
    
    # Process each image
    for image_path in image_files:
        # Get the filename without extension
        filename = os.path.basename(image_path)
        name, _ = os.path.splitext(filename)
        
        # Create output filename with "-new" suffix
        output_filename = f"{name}-new.webp"
        output_path = os.path.join(current_dir, output_filename)
        
        print(f"\nProcessing: {filename}")
        # Convert the image to WebP
        convert_to_webp(image_path, output_path)
    
    print("\nConversion complete!")

if __name__ == "__main__":
    main()