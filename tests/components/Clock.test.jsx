import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import Clock from 'Clock';

describe ('Clock', () => {
  it ('should exist', () => {
    expect(Clock).toExist();
  });

  describe ('formatSeconds', () => {
    it ('should correctly format seconds into appropriate minutes and remaining seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock />);
      let seconds = 615; // 10 minutes and 15 seconds
      let expected = '10:15';
      let actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });

  describe ('formatSeconds', () => {
    it ('should correctly format seconds when min/sec are less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock />);
      let seconds = 61; // 10 minutes and 15 seconds
      let expected = '01:01';
      let actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
