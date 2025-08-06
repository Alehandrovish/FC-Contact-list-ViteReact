import { Component } from "react";
import { nanoid } from "nanoid/non-secure";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import "./reset.css";
import "./App.css";

class App extends Component {
  CLEAR_PERSON_DATA = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  state = {
    contacts: [],
    personData: {
      ...this.CLEAR_PERSON_DATA,
    },
  };

  addContact = (contact) => {
    contact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.saveToLocalStorage(contacts);
      return {
        contacts,
      };
    });
  };

  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveToLocalStorage(contacts);
      return {
        contacts,
        personData: { ...this.CLEAR_PERSON_DATA },
      };
    });
  };

  handleEditMode = (contact) => {
    this.setState(() => {
      const personData = contact;
      return {
        personData,
      };
    });
  };

  onSaveChanges = (contact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((cont) => {
        return cont.id === contact.id ? { ...cont, ...contact } : cont;
      });
      this.saveToLocalStorage(contacts);
      return {
        contacts,
      };
    });
  };

  handleAddMode = () => {
    this.setState({
      personData: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("Contacts")) || [];
    this.setState({ contacts });
  }
  saveToLocalStorage = (contacts) => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  };
  render() {
    return (
      <>
        <article className="content-wrapper">
          <h1>Contact list</h1>
          <section className="content-block">
            <ContactList
              contacts={this.state.contacts}
              onDelete={this.deleteContact}
              onEditMode={this.handleEditMode}
              idOfItem={this.state.personData.id}
              onAddMode={this.handleAddMode}
            />
            <ContactForm
              onAdd={this.addContact}
              personData={this.state.personData}
              onSaveChanges={this.onSaveChanges}
              onDelete={this.deleteContact}
              idOfItem={this.state.personData.id}
            />
          </section>
        </article>
      </>
    );
  }
}

export default App;
