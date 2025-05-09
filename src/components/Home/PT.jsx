import React, { useState, useRef, useEffect } from 'react';
import styles from './PT.module.css';

const PT = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Understanding your vision, requirements, and project scope.'
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Developing detailed plans, material specifications, and project schedules.'
    },
    {
      number: '03',
      title: 'Project Proposal',
      description: 'Presenting comprehensive designs, materials, timeline, and cost breakdown.'
    },
    {
      number: '04',
      title: 'Construction',
      description: 'Executing the project with precision and constant communication.'
    },
    {
      number: '05',
      title: 'Quality Inspection',
      description: 'Performing rigorous quality checks throughout the project.'
    },
    {
      number: '06',
      title: 'Project Handover',
      description: 'Delivering your completed project with all documentation.'
    }
  ];
  
  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  
  useEffect(() => {
    // Automatically cycle through steps every 5 seconds
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % processSteps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <section className={styles.processTimeline}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <p className={styles.sectionSubtitle}>
              We follow a structured approach to ensure every project is delivered
              with the highest standards of quality and client satisfaction.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className={styles.timelineContainer} ref={timelineRef}>
              <div className={styles.timelineLine}>
                <div 
                  className={styles.timelineProgress} 
                  style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                ></div>
              </div>
              
              <div className={styles.stepsContainer}>
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`${styles.step} ${activeStep === index ? styles.active : ''} ${activeStep > index ? styles.completed : ''}`}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className={styles.stepNumber}>
                      <span>{step.number}</span>
                    </div>
                    <div className={styles.stepInfo}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDescription}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <div className={styles.stepDetail}>
              <div className={styles.stepDetailInner}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepDetailNumber}>{processSteps[activeStep].number}</span>
                  <h3 className={styles.stepDetailTitle}>{processSteps[activeStep].title}</h3>
                </div>
                <p className={styles.stepDetailDescription}>{processSteps[activeStep].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PT;