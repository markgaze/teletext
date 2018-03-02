import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page from './page';

describe('Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page />, div);
  });
});
