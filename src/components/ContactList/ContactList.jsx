import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";

class ContactList extends Component {
  render() {
    return (
      <>
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              firstName={contact.firstName}
              lastName={contact.lastName}
              email={contact.email}
              phone={contact.phone}
            />
          );
        })}
        <button>New</button>
      </>
    );
  }
}

export default ContactList;
