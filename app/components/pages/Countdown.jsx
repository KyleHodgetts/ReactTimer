import React from 'react';
import Clock from 'Clock';

export default class Countdown extends React.Component {
  render = () => {
    return (
      <div>
        <Clock totalSeconds={129} />
      </div>
    );
  }
}
