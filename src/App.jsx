import { Component } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [
      {
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
    ],
    personData: [
      {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    ],
  };

  render() {
    return (
      <>
        <h1>Contact list</h1>
        <ContactList contacts={this.state.contacts} />
        <ContactForm formData={this.state.personData} />
      </>
    );
  }
}

export default App;
