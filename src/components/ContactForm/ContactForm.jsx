import { Component } from "react";
import "./Contactform.css";

class ContactForm extends Component {
  render() {
    return (
      <form>
        <div className="input-block">
          <div className="form-item">
            <input type="text" placeholder="First name" />
            <span className="btn-clear">X</span>
          </div>
          <div className="form-item">
            <input type="text" placeholder="First name" />
            <span className="btn-clear">X</span>
          </div>
          <div className="form-item">
            <input type="text" placeholder="Last name" />
            <span className="btn-clear">X</span>
          </div>
          <div className="form-item">
            <input type="email" placeholder="Email" />
            <span className="btn-clear">X</span>
          </div>
          <div className="form-item">
            <input type="tel" placeholder="Phone" />
            <span className="btn-clear">X</span>
          </div>
        </div>
        <div className="form-buttons">
          <button>Save</button>
          <button>Delete</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
