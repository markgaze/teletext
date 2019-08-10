import * as React from 'react';
import './results.css';
import ScoreModel from '../score/score.model';
import Score from '../score/score';
import FootballAPI from '../../services/football/football-data';

export default class Results extends React.Component<{}, ResultsState> {
  constructor(props: {}) {
    super(props);
    this.state = { games: [], page: 1 };
  }

  componentWillMount() {
    new FootballAPI().getThisWeeksGames(2016).then(games =>
      this.setState({
        page: 1,
        games
      })
    );
    setInterval(this.changePage.bind(this), 10000);
  }

  render() {
    var games = this.getGames(this.state.games).map(score => 
      <Score key={score.homeTeam} scoreData={score} />
    );

    return (
        <div className="results">
          <p className="green">CHAMPIONSHIP RESULTS</p>
            {games}
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

  private getGames(games: ScoreModel[]): ScoreModel[] {
    const half = games.length / 2;
    return games.slice(half * (this.state.page - 1), half * this.state.page);
  }
}

interface ResultsState {
  games: ScoreModel[];
  page: number;
}
