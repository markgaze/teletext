import * as React from 'react';
import './results.css';
import ScoreModel from '../score/score.model';
import Score from '../score/score';
import FootballAPI from '../../services/football/football-data';

export default class Results extends React.Component<{}, ResultsState> {
  constructor(props: {}) {
    super(props);
    this.state = { games: [] };
  }
  componentWillMount() {
    new FootballAPI().getThisWeeksGames(2016).then(scores => this.setState({ games: scores }));
  }

  render() {
    var games = this.state.games.map(score => 
      <Score key={score.homeTeam} scoreData={score} />
    );

    return (
        <div className="results">
          <p className="green">CHAMPIONSHIP RESULTS</p>
            {games}
        </div>
    );
  }
}

interface ResultsState {
  games: ScoreModel[];
}
