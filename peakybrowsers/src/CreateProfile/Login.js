import './CreateProfile.css';
import React from 'react';
import LoginForm from './loginForm'

export const CreateProfile = (props) => {
    return (
      <div className="Profile">
        <div className="form-box">
          <LoginForm></LoginForm>
        </div>
      </div>
    );
  };