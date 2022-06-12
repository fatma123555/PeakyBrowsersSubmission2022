import "./navBar.css";
import Logo from "./acclimatelogo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link, Route } from "react-router-dom";

const NavLink = ({ page }) => {
  // const title = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <Link className="navTitle" to={`/${page}`}>
      {page}
    </Link>
  );
};

export const NavBar = () => {
  return (
    <div className="header">
      <Link to="/Home">
        <img src={Logo} alt="logo" className="logo" />
        <h2 className="brandname">
          <small>accli</small>
          <strong>MATE</strong>
        </h2>
      </Link>
      <div className="pageLinks">
        <NavLink page="Home" />
        <NavLink page="About" />
        <NavLink page="HowTo" />
        <NavLink page="FAQs" />
      </div>
      <button className="signin">Sign In | Contact Us</button>
      <div className="dropDown">
        <FaUserCircle className="userProfileButton" />
        <div className="dropDownContent">
          <button>
            <i className="fa fa-envelope"></i>
          </button>
          <button>
            <i className="fa fa-bell"></i>
          </button>
          <button>
            <i className="fa fa-cog"></i>
          </button>
        </div>
      </div>
      {/* <NavLink page='contact' /> */}
    </div>
  );
};
