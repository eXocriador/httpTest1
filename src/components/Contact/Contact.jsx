import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.contactName}>{name}:</span>
      <span className={styles.contactNumber}>{number}</span>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
