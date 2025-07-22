import { Component } from "react";
import { nanoid } from "nanoid/non-secure";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import "./reset.css";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    personData: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    isEditMode: false,
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
      const contacts = [
        ...state.contacts.filter((contact) => contact.id !== id),
      ];
      this.saveToLocalStorage(contacts);
      return {
        contacts,
      };
    });
  };

  handleEditMode = (contact) => {
    this.setState(() => {
      const personData = { ...contact };
      const isEditMode = true;
      return {
        personData,
        isEditMode,
      };
    });
  };

  onSaveChanges = (contact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((cont) => {
        return cont.id === contact.id ? { ...cont, ...contact } : { ...cont };
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
      isEditMode: false,
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
              isEditMode={this.state.isEditMode}
              idOfItem={this.state.personData.id}
              onAddMode={this.handleAddMode}
            />
            <ContactForm
              onAdd={this.addContact}
              personData={this.state.personData}
              isEditMode={this.state.isEditMode}
              onSaveChanges={this.onSaveChanges}
              onDelete={this.deleteContact}
            />
          </section>
        </article>
      </>
    );
  }
}

export default App;
