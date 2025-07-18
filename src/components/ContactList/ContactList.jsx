import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

class ContactList extends Component {
  render() {
    return (
      <section className="contacts-block">
        <section className="contacts-list">
          {this.props.contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                firstName={contact.firstName}
                lastName={contact.lastName}
                email={contact.email}
                phone={contact.phone}
              />
            );
          })}
        </section>
        <button>New</button>
      </section>
    );
  }
}

export default ContactList;
