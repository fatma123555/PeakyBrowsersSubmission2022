import { Link } from "react-router-dom";
import React from "react";
import "./form.css";
import { BiLogIn } from "react-icons/bi";

class LoginFormHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // this.props.history.push('peakybrowsers/src/NeedHelp/needHelpDashboard.js')
    event.preventDefault();

    // this.context.history.push('/needhelp')
    //window.location.href = 'http://localhost:3000/needhelp'
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("email", JSON.stringify(this.state.value));
    localStorage.setItem("password", JSON.stringify(this.state.lastName));
  }

  isFormValid = () => {
    return this.state;
  };

  render() {
    return (
      <div className="profileForm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h1>Login</h1>
            <div className="input-container">
              <label>
                <input
                  className="input-box"
                  type="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Email*"
                  required
                />
              </label>
            </div>
            <div className="input-container">
              <label>
                <input
                  className="input-box"
                  placeholder="Password*"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
              </label>
            </div>

            {this.state.value && this.state.password && (
              <button type="submit" disabled={!this.isFormValid}>
                {" "}
                <Link to="/canhelp">
                  <BiLogIn className="submit-button" onclick="handle" />
                </Link>
              </button>
            )}
            {(!this.state.value || !this.state.password) && (
              <button type="submit" disabled>
                <BiLogIn onclick="handle" className="submit-button-disabled" />
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginFormHelper;
