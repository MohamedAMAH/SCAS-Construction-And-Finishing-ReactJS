import styles from './Contact.module.css';
import ContactC from '../../components/Contact/ContactC';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <ContactC />
    </div>
  );
};

export default Contact;