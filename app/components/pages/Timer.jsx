import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }

  componentDidUpdate = (_, prevState) => {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          this.unhookTimer();
          break;
      }
    }
  }

  componentWillUnmount = () => {
    this.unhookTimer();
  }

  handleStatusChange = (newStatus) => {
    this.setState({ timerStatus: newStatus });
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({ count: newCount });
    }, 1000);
  }

  unhookTimer = () => {
    this.timer && clearInterval(this.timer);
    this.timer = false;
  }

  render = () => {
    let { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus}
                  onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}
