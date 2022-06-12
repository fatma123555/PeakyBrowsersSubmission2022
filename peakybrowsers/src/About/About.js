import "./About.css";
import React from "react";
import aeroplane from "./aeroplane.png";
import man from "./man.png";
import woman from './woman.png';

export const About = () => {
  return (
    <div className="About">
      <h2> About Us </h2>
      <h3>
        We created AccliMATE as a way to connect Ukrainian refugees and
        displaced individuals in the UK with people who can help them.
      </h3>
      <div className="gridContainer">
        <div className="para1">
          <p>
            After Russia invaded Ukraine, we were heartened to see the
            outpouring of people who wanted to help in any way they could. We
            saw a lot of great movements towards helping Ukrainians access the
            fundamental things that they would need to settle in the UK:
            housing, new belongings, programs to help them find work. But it got
            us thinking: what about those fundamental things? The things we take
            for granted: opening a bank account, registering with a GP, getting
            new forms of ID, filing for national insurance and all of the things
            that give you the right to work in the UK.
          </p>
        </div>
        <div className="man">
          <img src={man} alt="man" />
        </div>
        <div className="para2">
          <p>
            We hope that AccliMATE will help Ukrainian refugees not only settle
            in the UK but to feel part of the community and to know they have
            people around them to support them in these terrible times.{" "}
          </p>
        </div>
        <div className ="woman">
          <img src={woman} alt="woman" />
        </div>
        {/* <div className="plane">
          <img src={aeroplane} alt="aeroplane" />
        </div> */}
      </div>
    </div>
  );
};
