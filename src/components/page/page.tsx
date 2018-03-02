import * as React from 'react';
import './page.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import ScoreModel from '../score/score.model';
import Score from '../score/score';

export default class Page extends React.Component {
  render() {
    var games = this.getGames().map(score => 
      <Score key={score.homeTeam} scoreData={score} />
    );

    return (
        <div className="grid">
        <Header />
        <Banner />
        <div className="main">
          <p className="green">PREMIER LEAGUE RESULTS</p>
            {games}
          </div>
        <div className="footer">
          <a href="#" className="red">Next Page</a>
          <a href="#" className="green">Football</a>
          <a href="#" className="yellow">Top Sport</a>
          <a href="#" className="cyan">Sport</a>
        </div>
      </div>
    );
  }

  getGames(): ScoreModel[] {
      return [{
              homeTeam: 'Sunderland',
              homeTeamScore: 4,
              homeScorers: ['Wickham 16, 86', 'Borini 45', 'Giaccherini 76'],
              awayTeam: 'Cardiff City',
              awayTeamScore: 0,
              awayScorers: []
          },
          {
              homeTeam: 'Liverpool',
              homeTeamScore: 0,
              homeScorers: [],
              awayTeam: 'Chelsea',
              awayTeamScore: 2,
              awayScorers: ['Ba 45', 'Willian 90']
          },
          {
              homeTeam: 'Crystal Palace',
              homeTeamScore: 0,
              homeScorers: [],
              awayTeam: 'Manchester City',
              awayTeamScore: 2,
              awayScorers: ['Dzeko 4', 'Toure 43']
          }
      ];
  }
}
