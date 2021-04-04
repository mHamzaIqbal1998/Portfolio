import React from 'react';
import '../../App.css';
import MailIcon from '@material-ui/icons/Mail';
import { Typography } from '@material-ui/core';
const Contact = () => {
  return (
    <div class='main-container'>
      <h3 style={{ textAlign: 'center', fontFamily: 'monospace' }}>
        Get In Touch
      </h3>
      <ul>
        <li>
          <MailIcon />
          <Typography>mhamzaiqbal1998@gmail.com</Typography>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
