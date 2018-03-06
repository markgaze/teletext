import * as React from 'react';
import './error.css';
import { Link } from 'react-router-dom';
import DoubleTextGenerator from '../../helpers/double-text';

export default class Error404 extends React.Component {
  render() {
    return (
        <div className="error">
          {DoubleTextGenerator.CreateText('404 Page not found')}
          <p className="link">Go back to page <Link to="/" className="yellow">100</Link></p>
        </div>
    );
  }
}