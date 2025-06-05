import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (contact, actions) => {
    addContact({ ...contact, id: nanoid() });
    actions.resetForm();
  };

  const validateYupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "min length 2 chars")
      .max(50, "max length 50 chars ")
      .required("This field is required"),
    number: Yup.string()
      .matches(new RegExp("^\\d+$"), "Please enter correct phone number ")
      .required("Phone number is required"),
  });

  return (
    <Formik
      validationSchema={validateYupSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={css.box}>
        <label htmlFor={nameId}>Name</label>

        <Field id={nameId} type="text" name="name" />
        <ErrorMessage name="name" component="p" className={css.errorMessage} />

        <label htmlFor={numberId}>Phone</label>

        <Field id={numberId} type="phone" name="number" />
        <ErrorMessage
          name="number"
          component="p"
          className={css.errorMessage}
        />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
