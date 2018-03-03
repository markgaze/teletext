import * as React from 'react';
import './table.css';

export default class Table extends React.Component<{}, TableState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: this.getDate(),
      rows: this.getRows()
    };
  }

  render() {
    var rows = this.state.rows.map(r => (
      <div key="r.position" className="table-row">
        <p className="right-align">{r.position}</p>
        <p>{r.teamName}</p>
        <p>{r.played}</p>
        <p>{r.won}</p>
        <p>{r.drawn}</p>
        <p>{r.lost}</p>
        <p>{r.for}</p>
        <p>{r.against}</p>
        <p className="right-align">{r.points}</p>
      </div>
    ));

    return (
      <div>
        <div className="title">
          <p className="green">ENGLISH PREMIER LEAGUE</p>
          <p>1/2</p>
        </div>
        <div className="table-header">
          <p>{this.state.date}</p>
          <p>P</p>
          <p>W</p>
          <p>D</p>
          <p>L</p>
          <p>F</p>
          <p>A</p>
          <p>Pts</p>
        </div>
        {rows}
      </div>
    );
  }

  getDate() {
    return 'Aug 13';
  }

  getRows() {
    return [
      {
        position: 1,
        teamName: 'Man Utd',
        played: 1,
        won: 1,
        drawn: 0,
        lost: 0,
        for: 2,
        against: 0,
        points: 3
      },
      {
        position: 2,
        teamName: 'Arsenal',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 3,
        teamName: 'Aston Villa',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 4,
        teamName: 'Birmingham',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 5,
        teamName: 'Blackburn',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 6,
        teamName: 'Bolton',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 7,
        teamName: 'Charlton',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 8,
        teamName: 'Chelsea',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 9,
        teamName: 'Fulham',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
      {
        position: 10,
        teamName: 'Liverpool',
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        for: 0,
        against: 0,
        points: 0
      },
    ];
  }
}

interface TableState {
  date: string;
  rows: TableRow[];
}

interface TableRow {
  position: number;
  teamName: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  for: number;
  against: number;
  points: number;
}