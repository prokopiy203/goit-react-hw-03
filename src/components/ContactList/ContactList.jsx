import Contact from "../Contact/Contact";

function ContactList({ contactList, onChange }) {
  return (
    <ul>
      {contactList.map((contact) => (
        <Contact key={contact.id} value={contact} onChange={onChange} />
      ))}
    </ul>
  );
}

export default ContactList;
