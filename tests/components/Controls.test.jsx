import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Controls from 'Controls';

describe ('<Controls />', () => {
  it ('should exist', () => {
    expect(Controls).toExist();
  });

  describe ('render', () => {
    it ('should render pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      let pauseButton = TestUtils.scryRenderedDOMComponentsWithTag(controls, 'button')[0];
      expect(pauseButton.innerHTML).toBe('Pause');
    });

    it ('should render start when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      let startButton = TestUtils.scryRenderedDOMComponentsWithTag(controls, 'button')[0];
      expect(startButton.innerHTML).toBe('Start');
    });
  });
});
