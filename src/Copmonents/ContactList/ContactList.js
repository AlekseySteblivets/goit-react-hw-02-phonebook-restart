import { v4 as uuidv4 } from 'uuid';
import styles from './ContactList.module.css';

function ContactList({ getVisibleContact, onDeleteContact }) {
    return (
        <>
            <ul>
                {getVisibleContact.map(contact =>
                    <li className={styles.contactList} key={uuidv4()}>{contact.name}: {contact.number}
                        <button className={styles.btnDelete} onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                )
                }
            </ul>
        </>
    )
}

export default ContactList;