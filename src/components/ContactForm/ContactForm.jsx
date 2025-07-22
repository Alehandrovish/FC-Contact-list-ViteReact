import { Component } from "react";
import "./Contactform.css";

class ContactForm extends Component {
  state = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  onInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  clearInput = (event) => {
    const formItem = event.target.closest(".form-item");
    const input = formItem.querySelector("input");
    this.setState({
      [input.id]: "",
    });
  };

  clearAllInputs = () => {
    [...document.getElementsByTagName("input")].forEach((input) => {
      this.setState({
        [input.id]: "",
      });
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.clearAllInputs();
  };

  onSaveChanges = (event) => {
    event.preventDefault();
    this.props.onSaveChanges(this.state);
  };

  onDeleteContact = () => {
    this.props.onDelete(this.state.id);
    this.clearAllInputs();
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.isEditMode &&
      this.props.personData !== prevProps.personData
    ) {
      const { id, firstName, lastName, email, phone } = this.props.personData;
      this.setState({
        id,
        firstName,
        lastName,
        email,
        phone,
      });
    } else if (prevProps.isEditMode !== this.props.isEditMode) {
      this.clearAllInputs();
    }
  }
  saveToLocalStorage = () => {};

  render() {
    return (
      <form
        onSubmit={
          this.props.isEditMode ? this.onSaveChanges : this.onFormSubmit
        }
      >
        <div className="input-block">
          <div className="form-item">
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.onInputChange}
            />
            <span className="btn-clear" onClick={this.clearInput}>
              X
            </span>
          </div>
          <div className="form-item">
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.onInputChange}
            />
            <span className="btn-clear" onClick={this.clearInput}>
              X
            </span>
          </div>
          <div className="form-item">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onInputChange}
            />
            <span className="btn-clear" onClick={this.clearInput}>
              X
            </span>
          </div>
          <div className="form-item">
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.onInputChange}
            />
            <span className="btn-clear" onClick={this.clearInput}>
              X
            </span>
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit">Save</button>
          <button
            type="button"
            className={this.props.isEditMode ? "" : "hide"}
            onClick={this.onDeleteContact}
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
