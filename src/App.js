import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  onChange = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  }

  //   onSubmitBtn = (this.state.name) => {
  //   evt.preventDefault();
  //   this.setState(prevState => ({
  //     contacts: this.state.contacts.push(this.state.name)
  //   }));

  // }

  onSubmitBtn = (evt) => {
    evt.preventDefault();
    this.addContact(this.state.name)
    this.setState({ name: "" })

  }

  addContact = (text) => {
    console.log(text);
    this.setState(prevState => ({
      contacts: [text, ...prevState.contacts]
    }));
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmitBtn}>
          <label>name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onChange}
            />
          </label>
          <button type="submit" >Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(contact =>
              <li key={uuidv4()}>{contact}</li>
            )}

          </ul>
        </div>
      </>


    )
  }

}

export default App;
