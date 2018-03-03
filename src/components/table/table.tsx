import * as React from 'react';
import './table.css';

export default class Table extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <p className="green">ENGLISH PREMIER LEAGUE</p>
          <p>1/2</p>
        </div>
        <div className="table-header">
          <p>Aug 13</p>
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
          <p>F</p>
          <p>A</p>
          <p>Pts</p>
        </div>
        <div className="table-row">
          <p className="right-align">1</p>
          <p>Man Utd</p>
          <p>1</p>
          <p>1</p>
          <p>0</p>
          <p>0</p>
          <p>2</p>
          <p>0</p>
          <p className="right-align">3</p>
        </div>
        <div className="table-row">
          <p className="right-align">2</p>
          <p>Arsenal</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p className="right-align">0</p>
        </div>
        <div className="table-row">
          <p className="right-align">3</p>
          <p>Aston Villa</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
          <p className="right-align">0</p>
        </div>
      </div>
    );
  }
}