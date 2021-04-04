import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Typical from 'react-typical';

const typoStyle = {
  fontSize: 40,
  color: '#fde311',
  fontFamily: 'Cascadia Code',
};
const Console = () => {
  const [loading, setLoading] = useState(true);
  const [loadingName, setLoadingName] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setTimeout(() => {
      setLoadingName(false);
    }, 2000);
  }, [loading]);
  return (
    <div className='intro-wrapper'>
      <div className='nav-wrapper'>
        <Link to='/'>
          <div className='dots-wrapper'>
            <div id='dot-1' className='browser-dot'></div>
            <div id='dot-2' className='browser-dot'></div>
            <div id='dot-3' className='browser-dot'></div>
          </div>
        </Link>
      </div>

      <div className='left-column'>
        <Typography style={typoStyle}>
          <Typical loop={1} steps={[' > Hello', 1000]} wrapper='a' />
        </Typography>
        {!loading ? (
          <Typography style={typoStyle}>
            <Typical loop={1} steps={[' > World', 1000]} wrapper='a' />
          </Typography>
        ) : (
          <></>
        )}
        {!loadingName ? (
          <Typography style={typoStyle}>
            <Typical loop={1} steps={[' > Hi, from Hamza', 1000]} wrapper='a' />
          </Typography>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Console;
