import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe ('<Timer />', () => {
  it ('should exist', () => {
    expect(Timer).toExist();
  });

  it ('should start off paused with a count of 0', () => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer.state.count).toBe(0);
    expect(timer.state.countdownStatus).toBe('paused');
  });

  it ('should count upwards when started', () => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer.state.count).toBe(0);
    timer.handleStatusChange('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it ('should stop counting when paused', () => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    expect(timer.state.count).toBe(0);
    timer.handleStatusChange('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      timer.handleStatusChange('pause');
      done();
    }, 1001);
    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it ('when in the started state should reset count to 0 and to paused when cancel is pressed', () => {
    let timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');
    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
    timer.handleStatusChange('stopped');
    expect(timer.state.count).toBe(0);
    expect(timer.state.countdownStatus).toBe('paused');
  });
});
