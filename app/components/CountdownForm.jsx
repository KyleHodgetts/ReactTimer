import React from 'react';

export default class CountdownForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault();
    let seconds = this.refs.seconds.value;
    if (seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';

      // Sets state of parent component to argument
      this.props.onSetCountdown(parseInt(seconds, 10)); //Parse seconds in base 10
    }

  }

  render = () => {
    return (
      <div>
        <form className="countdown-form" onSubmit={this.onSubmit} ref="form">
          <input type="text" placeholder="Enter time in seconds" ref="seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {
  onSetCountdown: React.PropTypes.func.isRequired
}
