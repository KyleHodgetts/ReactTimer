import React from 'react';
import Nav from 'Nav';

export default (props) => {
  return (
    <div>
      <Nav />
      <p>Main.jsx rendered</p>
      { props.children }
    </div>
  );
}
