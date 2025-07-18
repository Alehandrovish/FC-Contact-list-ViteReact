import { Component } from "react";

class ContactItem extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.firstName} {this.props.lastName}
        </p>
        <span>X</span>
      </div>
    );
  }
}

export default ContactItem;
