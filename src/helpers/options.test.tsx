import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OptionCreator from './options';
import { Link } from 'react-router-dom';

describe('Option Creator', () => {
  it('creates options correctly', () => {
    expect(OptionCreator.GetOption('test', '100'))
      .toEqual(<Link className="white" to="100"><div className="option"><p className="yellow">test</p><p>100</p></div></Link>);
  });
});