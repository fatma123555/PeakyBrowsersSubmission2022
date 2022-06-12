import './CreateProfile.css';
import React from 'react';
import LoginFormHelper from './loginFormHelper'

export const CreateProfile = (props) => {
    return (
      <div className="Profile">
        <div className="form-box">
          <LoginFormHelper></LoginFormHelper>
        </div>
      </div>
    );
  };