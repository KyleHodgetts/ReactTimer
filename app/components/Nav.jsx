import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text white">React Timer</li>
          <li>
            <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>
              Timer
            </IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
              Countdown
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            <b>Made by <a target="_blank" href="https://github.com/KyleHodgetts"> Kyle Hodgetts</a></b>
          </li>
        </ul>
      </div>
    </div>
  );
}
