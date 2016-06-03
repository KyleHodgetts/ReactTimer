import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text white">React Timer</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">
              Timer
            </IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">
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
