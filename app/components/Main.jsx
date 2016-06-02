import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx rendered</p>
          { props.children }
        </div>
      </div>
    </div>
  );
}
