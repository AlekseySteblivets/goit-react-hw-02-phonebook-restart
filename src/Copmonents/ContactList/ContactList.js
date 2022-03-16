import { v4 as uuidv4 } from 'uuid';

function ContactList({ getVisibleContact }) {
    return (
        <>
            <ul>
                {getVisibleContact.map(contact =>
                    <li key={uuidv4()}>{contact.name}: {contact.number}</li>
                )
                }
            </ul>
        </>
    )
}

export default ContactList;