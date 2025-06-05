import css from "./Contact.module.css";

function Contact({ value, onChange }) {
  return (
    <li className={css.box}>
      <span className={css.wrapper}>
        <p>{value.name}</p>
        <a href="tel:{value.number}">{value.number}</a>
      </span>
      <button onClick={() => onChange(value.id)}>Delete</button>
    </li>
  );
}

export default Contact;
