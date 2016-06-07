import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'paused'
    }
  }

  componentDidUpdate = (_, prevState) => {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'paused':
          this.unhookTimer();
          break;
      }
    }
  }

  handleStatusChange = (newStatus) => {
    if (newStatus == 'stopped') {
      this.setState({ count: 0 });
      newStatus = 'paused';
    }
    this.setState({ countdownStatus: newStatus });
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
    let { count, countdownStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={countdownStatus}
                  onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}
