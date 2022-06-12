import { Link } from "react-router-dom";
import React from "react";
import "./form.css";
import { BiLogIn } from "react-icons/bi";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", firstName: "", lastName: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // this.props.history.push('peakybrowsers/src/NeedHelp/needHelpDashboard.js')
    event.preventDefault();

    // this.context.history.push('/needhelp')
    //window.location.href = 'http://localhost:3000/needhelp'
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("name", JSON.stringify(this.state.value));
    localStorage.setItem("lastName", JSON.stringify(this.state.lastName));
    localStorage.setItem("email", JSON.stringify(this.state.email));
  }

  isFormValid = () => {
    return this.state;
  };

  render() {
    return (
      <div className="profileForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h1>Sign Up | Зареєструватися</h1>
            <div className="input-container">
              <label>
                <input
                  className="input-box"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="First Name | ім'я *"
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <input
                  className="input-box"
                  placeholder="Surname | прізвище *"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <input
                  className="input-box"
                  placeholder="Email | електронна пошта *"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
              </label>
            </div>
            <div className="input-container">
              {this.state.email && this.state.lastName && this.state.value && (
                <Link to="/needhelp">
                  <button type="submit" disabled={!this.isFormValid}>
                    <BiLogIn className="submit-button" onclick="handle" />
                  </button>
                </Link>
              )}
              {(!this.state.email ||
                !this.state.lastName ||
                !this.state.value) && (
                <button type="submit" disabled>
                  <BiLogIn
                    className="submit-button-disabled"
                    onclick="handle"
                  />
                </button>
              )}
              <p>
                Have an account already?{" "}
                <Link to="/loginform"> Click here to login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NameForm;
