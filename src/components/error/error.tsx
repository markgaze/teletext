import * as React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

export default class Error404 extends React.Component {
  render() {
    return (
        <div className="error">
          <div className="errorText">
            <span className="yellow blackbg">&#xe034;&#xe030;&#xe034;&#xe03a;&#xe020;&#xe050;&#xe041;&#xe047;&#xe045;&#xe020;&#xe04e;&#xe04f;&#xe054;&#xe020;&#xe046;&#xe04f;&#xe055;&#xe04e;&#xe044;</span>
            <span className="yellow blackbg">&#xe134;&#xe130;&#xe134;&#xe13a;&#xe120;&#xe150;&#xe141;&#xe147;&#xe145;&#xe120;&#xe14e;&#xe14f;&#xe154;&#xe120;&#xe146;&#xe14f;&#xe155;&#xe14e;&#xe144;</span>
          </div>
          <p className="link">Go back to page <Link to="/" className="yellow">100</Link></p>
        </div>
    );
  }
}