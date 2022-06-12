import './CreateProfile.css';
import React from 'react';
import NameForm from './form.js'

export const CreateProfile = (props) => {
    return (
      <div className="Profile">
        <div className="form-box">
          <NameForm></NameForm>
        </div>
      </div>
    );
  };