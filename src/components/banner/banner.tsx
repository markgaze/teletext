import * as React from 'react';
import './banner.css';
import DoubleTextGenerator from '../../helpers/double-text';
import { Link } from 'react-router-dom';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <Link className="white" to="/100">
          <div className="logo">
            <span>&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;</span>
            <span>&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe207;&#xe22b;</span>
            <span>&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;</span>
          </div>
        </Link>
        {DoubleTextGenerator.CreateText(' CEEFAX', 'white', 'blue')}
      </div>
    );
  }
}