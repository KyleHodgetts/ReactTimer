import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
  }

  componentDidUpdate = (_, prevState) => {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
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

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange = (newStatus) => {
    this.setState({ countdownStatus: newStatus });
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if (newCount == 0) {
        this.setState({ countdownStatus: 'stopped' });
      }
    }, 1000);
  }

  unhookTimer = () => {
    this.timer && clearInterval(this.timer);
    this.timer = false;
  }

  render = () => {
    let { count, countdownStatus } = this.state;
    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      }
      else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
      }
    };
    return (
      <div>
        <h1 className="page-title">Countdown</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}
