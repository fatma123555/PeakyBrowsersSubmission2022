import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavBar } from "./navBar";
import { About } from "./About/About";
import { HowTo } from "./HowToGuide/HowTo";
import { FAQ } from "./FAQ/FAQ";
import { CreateProfile } from "./CreateProfile/CreateProfile";
import { CreateProfileHelper } from "./CreateProfile/CreateProfileHelper";
import LoginFormHelper from "./CreateProfile/loginFormHelper";
import LoginForm from "./CreateProfile/loginForm";
import { NeedHelp } from "./NeedHelp/needHelpDashboard";
import { CanHelp } from "./CanHelp/canHelpDashboard";
import Graphic from "./Landing Page Graphic.svg";
import telegram from "./telegram.png";

function App() {
  const LandingPage = () => {
    return (
      <div className="landingPage">
        <h2 className="slogan">Heal The World With People</h2>
        <h3 className="smallslogan">
          Make a change by supporting a Ukrainian displaced person today, it's
          just one click away!
        </h3>
        <a href="https://telegram.org/" target="_blank">
          <button className="banner">
            <img className="telegram" src={telegram} alt="telegram" />
            <p className="bannerText">Join on Telegram</p>
            <p className="bannerText">Приєднатися в Telegram</p>
            <p className="chatbot">
              <strong>@accliMATE.Bot</strong>
            </p>
          </button>
        </a>
        <div className="content">
          <div className="left">
            <h2>I need help!</h2>
            <h3>мені потрібна допомога!</h3>
            <Link to="/createprofile">
              <button className="btn HelpeeButton">Sign up as Helpee</button>
            </Link>
          </div>
          <img className="icon" src={Graphic} alt="icon" />
          <div className="right">
            <h2>I can help!</h2>
            <h3>я можу допомогти!</h3>
            <Link to="/createprofilehelper">
              <button className="btn HelperButton">Sign up as Helper</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<LandingPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/howto" element={<HowTo />} />
          <Route exact path="/faqs" element={<FAQ />} />
          <Route exact path="/createprofile" element={<CreateProfile />} />
          <Route
            exact
            path="/createprofilehelper"
            element={<CreateProfileHelper />}
          />
          <Route exact path="/loginformhelper" element={<LoginFormHelper />} />
          <Route exact path="/loginform" element={<LoginForm />} />
          <Route exact path="/canhelp" element={<CanHelp />} />

          {/* Need Help page doesnt have a click button function yet, you need to type in the url to see it */}
          <Route exact path="/needhelp" element={<NeedHelp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
