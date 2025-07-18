import { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="email" />
          <input type="tel" />
        </div>
        <div>
          <button>Save</button>
          <button>Delete</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
