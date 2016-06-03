import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from 'CountdownForm';

describe ('<CountdownForm />', () => {
  it ('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it ('should call onSetCountdown when valid seconds are entered', () => {
    let spy = expect.createSpy();
    let countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    countDownForm.refs.seconds.value = '109';
    let form = TestUtils.findRenderedDOMComponentWithClass(countDownForm, 'countdown-form');
    TestUtils.Simulate.submit(form);
    expect(spy).toHaveBeenCalledWith(109);
  });

  it ('should not call onSetCountdown when invalid seconds are entered', () => {
    let spy = expect.createSpy();
    let countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    countDownForm.refs.seconds.value = 'abc';
    let form = TestUtils.findRenderedDOMComponentWithClass(countDownForm, 'countdown-form');
    TestUtils.Simulate.submit(form);
    expect(spy).toNotHaveBeenCalled();
  });
});
