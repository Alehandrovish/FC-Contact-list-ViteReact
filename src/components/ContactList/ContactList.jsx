import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

class ContactList extends Component {
  onAddMode = () => {
    this.props.onAddMode(!this.props.isEditMode, "");
  };

  render() {
    return (
      <section className="contacts-block">
        <section className="contacts-list">
          {this.props.contacts.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={this.props.onDelete}
                onEnterEditMode={this.props.onEditMode}
                isEditMode={this.props.isEditMode}
                idOfItem={this.props.idOfItem}
                onAddMode={this.onAddMode}
              />
            );
          })}
        </section>
        <button onClick={this.onAddMode}>New</button>
      </section>
    );
  }
}

export default ContactList;
