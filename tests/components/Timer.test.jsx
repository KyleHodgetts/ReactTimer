import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe ('<Timer />', () => {
  it ('should exist', () => {
    expect(Timer).toExist();
  });
});
