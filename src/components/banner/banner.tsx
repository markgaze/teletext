import * as React from 'react';
import './banner.css';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="headerBar">
        <span>&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;&#xe22a;&#xe203;&#xe213;&#xe22b;</span>
        <span>&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe204;&#xe22b;&#xe22a;&#xe200;&#xe207;&#xe22b;</span>
        <span>&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;&#xe202;&#xe203;&#xe203;&#xe203;</span>
        <span className="white bluebg">&#xe020;&#xe020;&#xe046;&#xe04f;&#xe04f;&#xe054;&#xe042;&#xe041;&#xe04c;&#xe04c;</span>
        <span className="white bluebg">&#xe120;&#xe120;&#xe146;&#xe14f;&#xe14f;&#xe154;&#xe142;&#xe141;&#xe14c;&#xe14c;</span>
      </div>
    );
  }
}