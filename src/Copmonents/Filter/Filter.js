// import { Component } from 'react';

function Filter({ value, оnChange }) {

    return (
        <>
            <label>
                Find contacts by name
                <input
                    type="text"
                    value={value}
                    onChange={оnChange}
                />
            </label>
        </>
    )
}

export default Filter;

// import './App.css';
// import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// class App extends Component {
//     state = {
//         contacts: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//         name: '',
//         number: ''
//     }

//     handleInputChange = (evt) => {
//         this.setState({
//             [evt.currentTarget.name]: evt.currentTarget.value
//         });
//         console.log(evt.currentTarget);
//         console.log(evt.currentTarget.name);
//         console.log(evt);
//     }

//     handleSubmit = (evt) => {
//         evt.preventDefault();
//         this.addContact(this.state.name, this.state.number)
//         this.setState({ name: "", number: "" })
//     }

//     addContact = (name, number) => {
//         let nameFromInput = { name: name, number: number }
//         this.setState(prevState => ({
//             contacts: [nameFromInput, ...prevState.contacts]
//         }));
//     }

//     getVisibleContact = () => {
//         const { contacts, filter } = this.state;
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact => contact.name.includes(normalizedFilter));
//     }

//     render() {
//         const visibleContacts = this.getVisibleContact();
//         return (
//             <>
//                 <h1>Phonebook</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Name
//                         <input
//                             type="text"
//                             name="name"
//                             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                             required
//                             value={this.state.name}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <label>Number
//                         <input
//                             type="tel"
//                             name="number"
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                             value={this.state.number}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <button type="submit" >Add contact</button>
//                 </form>

//                 <div>
//                     <h2>Contacts</h2>
//                     <div>
//                         <p>Find contacts by name</p>
//                         <input
//                             type="text"
//                             name="filter"
//                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                             required
//                             value={this.state.filter}
//                             onChange={this.handleInputChange}
//                         />
//                     </div>
//                     <ul>
//                         {visibleContacts.map(contact =>
//                             <li key={uuidv4()}>{contact.name}: {contact.number}</li>
//                         )
//                         }


//                     </ul>
//                 </div>
//             </>


//         )
//     }

// }

// export default App;
