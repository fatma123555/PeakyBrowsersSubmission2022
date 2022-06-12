import "./HowTo.css";
import React from "react";
import man from "./man.png";
import woman from './woman.png';

export const HowTo = () => {
  return (
    <div className="About">
      <h2> How to Use </h2>
      <h3>
        Follow this step by step guide on how to use this site!
      </h3>
      <div className="gridContainer">
        <div className="para1">
          <h3>Looking for help?</h3>
          <p>
            <ol>
              <li>Create an account or log into your account</li>
              <li>Click new task on your dashboard, fill out your details and submit</li>
              <li>See all your active tasks on your dashboard and which have been completed!</li>
            </ol>
          </p>
        </div>
        <div className="man">
          <img src={man} alt="man" />
        </div>
        <div className="para2">
        <h3>You can help?</h3>
          <p>
            <ol>
              <li>Create an account or log into your account</li>
              <li>See your active tasks to the left of your dashboard</li>
              <li>Scroll through new available tasks on the right to hekp someine else in need!</li>
            </ol>
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
