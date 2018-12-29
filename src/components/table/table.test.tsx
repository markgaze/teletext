import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Table from './table';

describe('Score', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
  });
});