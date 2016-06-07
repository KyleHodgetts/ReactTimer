import React from 'react';

export default class Controls extends React.Component {
  render = () => {
    let { countDownStatus } = this.props;
    let renderStartStopButton = () => {
      if (countDownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      }
      else if (countDownStatus === 'paused') {
        return <button className="button primary">Start</button>
      }
    }

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow expanded">Clear</button>
      </div>

    );
  }
}

Controls.propTypes = {
  countDownStatus: React.PropTypes.string.isRequired
}
