import { Component } from "react";
import "./ContactItem.css";

class ContactItem extends Component {
  render() {
    return (
      <div className="content-item">
        <p>
          {this.props.firstName} {this.props.lastName}
        </p>
        <span className="btn-delete">X</span>
      </div>
    );
  }
}

export default ContactItem;
