import React from 'react';
import '../../App.css';
const Experties = () => {
  return (
    <div>
      <h2
        style={{
          color: 'black',
          textAlign: 'left',
          fontFamily: 'monospace',
          marginBottom: 0,
        }}
      >
        SKILLS
      </h2>
      <div id='skills'>
        <ul>
          <li>Python</li>
          <li>C++</li>
          <li>JAVA</li>
          <li>JavaScript</li>
          <li>MERN Stack</li>
        </ul>

        <ul>
          <li>Sklearn</li>
          <li>Numpy</li>
          <li>Pandas</li>
          <li>BeautifulSoup</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Experties;
