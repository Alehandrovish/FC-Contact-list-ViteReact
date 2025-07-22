import { Component } from "react";
import "./ContactItem.css";

class ContactItem extends Component {
  state = {
    className: "content-item",
  };

  onContactdelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };

  onEdit = () => {
    this.props.onEnterEditMode(this.props.contact);
  };

  render() {
    const { id, firstName, lastName } = this.props.contact;
    return (
      <div
        className={
          "content-item" +
          (this.props.isEditMode && id === this.props.idOfItem ? " focus" : "")
        }
        onDoubleClick={this.onEdit}
      >
        <p>
          "{firstName} {lastName}"
        </p>
        <span className="btn-delete" onClick={this.onContactdelete}>
          X
        </span>
      </div>
    );
  }
}

export default ContactItem;
