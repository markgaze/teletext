import * as React from 'react';
import './results.css';
import ScoreModel from '../score/score.model';
import Score from '../score/score';

export default class Results extends React.Component<{}, ResultsState> {
  constructor(props: {}) {
    super(props);
    this.state = { games: [] };
  }
  componentWillMount() {
    this.getGames();
  }

  render() {
    var games = this.state.games.map(score => 
      <Score key={score.homeTeam} scoreData={score} />
    );

    return (
        <div className="results">
          <p className="green">PREMIER LEAGUE RESULTS</p>
            {games}
        </div>
    );
  }

  getGames() {
    fetch('https://api.football-data.org/v1/competitions/445/fixtures/?matchday=29', {
      headers: {
        'X-Auth-Token': '6ef3af956d7f4c6e9db971d4fe244334'
      }
    })
      .then(res => res.json())
      .then(games => this.setState({ 
        games: games.fixtures.map((g: GameData) => {
          return {
              homeTeam: g.homeTeamName.replace(' FC', ''),
              homeTeamScore: g.result.goalsHomeTeam,
              homeScorers: [],
              awayTeam: g.awayTeamName.replace(' FC', ''),
              awayTeamScore: g.result.goalsAwayTeam,
              awayScorers: [],
              kickoffTime: this.convertDateToKickoffTime(new Date(g.date))
          };
        })
        .sort((a: ScoreModel, b: ScoreModel) => a.homeTeam > b.homeTeam)
      }));
  }

  convertDateToKickoffTime(gameDate: Date): string {
    var now = new Date();
    const dayOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    if (now > gameDate) {
      return '';
    } else if (now.getDay() !== gameDate.getDay()) {
      return dayOfWeek[gameDate.getDay()];
    } else {
      return `${gameDate.getHours()}:${this.addLeadingZero(gameDate.getMinutes())}`;
    }
  }

  addLeadingZero(num: number) {
    return `${(num < 10 ? '0' : '')}${num}`; 
  }
}

interface ResultsState {
  games: ScoreModel[];
}

interface GameData {
  homeTeamName: string;
  awayTeamName: string;
  result: ResultData;
  date: string;
}

interface ResultData {
  goalsHomeTeam: number;
  goalsAwayTeam: number;
}
