import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleInputChange = (evt) => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value
    });
    console.log(evt.currentTarget);
    console.log(evt.currentTarget.name);
    console.log(evt);



  }

  //   handleSubmit  = (this.state.name) => {
  //   evt.preventDefault();
  //   this.setState(prevState => ({
  //     contacts: this.state.contacts.push(this.state.name)
  //   }));

  // }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addContact(this.state.name, this.state.number)
    this.setState({ name: "", number: "" })

  }

  addContact = (name, number) => {
    let nameFromInput = { name: name, number: number }
    this.setState(prevState => ({
      contacts: [nameFromInput, ...prevState.contacts]
    }));
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" >Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact =>
              <li key={uuidv4()}>{contact.name}: {contact.number}</li>
            )
            }
          </ul>
        </div>
      </>


    )
  }

}

export default App;
