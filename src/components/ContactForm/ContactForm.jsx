import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ' -]+$/, "Invalid name format")
    .required("Name is required"),

  number: Yup.string()
    .trim()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone format (XXX-XX-XX)")
    .required("Number is required"),
});

const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name:
          <Field className={styles.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number:
          <Field className={styles.input} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
