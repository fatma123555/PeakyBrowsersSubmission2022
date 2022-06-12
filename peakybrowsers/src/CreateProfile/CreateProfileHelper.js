import './CreateProfile.css';
import React from 'react';
import NameFormHelper from './formHelper.js'

export const CreateProfileHelper = (props) => {
    return (
      <div className="Profile">
        <div className="form-box">
          <NameFormHelper></NameFormHelper>
        </div>
      </div>
    );
  };