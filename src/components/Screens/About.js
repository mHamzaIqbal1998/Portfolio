import React from 'react';
import '../../App.css';
const About = () => {
  const textStyle = {
    fontFamily: 'monospace',
    color: 'black',
    fontSize: 24,
    wordSpacing: 5,
    lineHeight: 1.6,
    textAlign: 'center',
  };
  return (
    <>
      <h1
        style={{
          color: 'black',
          textAlign: 'center',
          fontFamily: 'Cascada Code',
        }}
      >
        About Me
      </h1>
      <p style={textStyle}>
        My name is M Hamza Iqbal. I'm a Programming geek. <br />
        I'm currently doing my Software Engineering from PUCIT.
        <br />
        I'm from Lahore Pakistan.
        <br />
        My hobbies are Gaming, Coding and self-learning.
      </p>
      <img
        id='profile_pic'
        alt='hamza'
        src={process.env.PUBLIC_URL + 'images/Hamza.jpeg'}
      />
    </>
  );
};

export default About;
