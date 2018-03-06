import * as React from 'react';
import './banner.css';
import DoubleTextGenerator from '../../helpers/double-text';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <div className="logo">
          <span>&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;</span>
          <span>&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe207;&#xe22b;</span>
          <span>&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;</span>
        </div>
        {DoubleTextGenerator.CreateText(' FOOTBALL', 'white', 'blue')}
      </div>
    );
  }
}