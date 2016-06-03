import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentWillUnmount = () => {
    this.stopTimer();
  }

  componentDidUpdate = (_, prevState) => {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.stopTimer();
          break;
      }
    }
  }

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  stopTimer = () => {
    this.timer && clearInterval(this.timer);
    this.timer = false;
    this.setState({
      countdownStatus: 'stopped'
    });
  }

  render = () => {
    let { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
}
