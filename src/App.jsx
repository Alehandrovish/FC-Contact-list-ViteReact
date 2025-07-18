import { Component } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import "./reset.css";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      {
        id: 0,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 1,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 2,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 3,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 4,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 5,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 6,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 7,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 8,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 9,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 6,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 7,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 8,
        firstName: "Alex",
        lastName: "Rumin",
        email: "gmail.com",
        phone: "+380991460903",
      },
      {
        id: 9,
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
        <article className="content-wrapper">
          <h1>Contact list</h1>
          <section className="content-block">
            <ContactList contacts={this.state.contacts} />
            <ContactForm formData={this.state.personData} />
          </section>
        </article>
      </>
    );
  }
}

export default App;
