import { Component } from 'react';


class ContactForm extends Component {
    state = {
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

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addContact(this.state.name, this.state.number)
        this.setState({ name: "", number: "" })
    }
    render() {

        return (
            <>
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
                            title="Phone nuymber must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={this.state.number}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="submit" >Add contact</button>
                </form>
            </>

        )
    }


}

export default ContactForm;