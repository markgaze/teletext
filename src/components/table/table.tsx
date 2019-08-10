import * as React from 'react';
import './table.css';
import TableModel, { TeamModel } from './table.model';
import FootballAPI from '../../services/football/football-data';

export default class Table extends React.Component<{}, TableState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: 1,
      standings: {
        lastUpdated: new Date(),
        teams: []
      }
    };
  }

  componentWillMount() {
    new FootballAPI().getStandings(2016).then(standings =>
      this.setState({
        page: 1,
        standings: standings
      })
    );
    setInterval(this.changePage.bind(this), 10000);
  }

  render() {
    let rowsData = this.getRows(this.state.standings);
    var rows = rowsData.map(r => (
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
          <p className="green">SKYBET CHAMPIONSHIP</p>
          <p>{this.state.page}/2</p>
        </div>
        <div className="table-header">
          <p>{this.getDate()}</p>
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

  private changePage(): void {
    let _page = 1;
    if (this.state.page === 1) {
      _page = 2;
    }
    this.setState({ page: _page });
  }

  private getDate(): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[this.state.standings.lastUpdated.getMonth()]} ${this.state.standings.lastUpdated.getDate()}`;
  }

  private getRows(standings: TableModel): TeamModel[] {
    const half = standings.teams.length / 2;
    return standings.teams.slice(half * (this.state.page - 1), half * this.state.page);
  }
}

interface TableState {
  page: number;
  standings: TableModel;
}
