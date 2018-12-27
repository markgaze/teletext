import * as React from 'react';
import './table.css';
import TableModel, { TeamModel } from './table.model';
import FootballAPI from '../../services/football/football-data';

export default class Table extends React.Component<{}, TableState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: 'test',
      rows: []
    };
  }

  componentWillMount() {
    new FootballAPI().getStandings(2021).then(standings =>
      this.setState({
        date: this.getDate(standings),
        rows: this.getRows(standings)
      })
    );
  }

  render() {
    var rows = this.state.rows.map(r => (
      <div key={r.position} className="table-row">
        <p className="right-align">{r.position}</p>
        <p>{r.teamName.substring(0, 18)}</p>
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

  getDate(standings: TableModel) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[standings.lastUpdated.getMonth()]} ${standings.lastUpdated.getDate()}`;
  }

  getRows(standings: TableModel) {
    return standings.teams.splice(0, 10);
  }
}

interface TableState {
  date: string;
  rows: TeamModel[];
}
