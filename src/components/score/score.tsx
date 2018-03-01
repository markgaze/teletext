import * as React from 'react';
import './score.css';

export default class Score extends React.Component<ScoreProps, ScoreState> {
  constructor(props: ScoreProps) {
    super(props);
    this.state = props;
  }

  render() {
    var homeScorers = this.state.homeScorers.map(text => 
      <p className="white" key={text}>{text}</p>
    );
    var awayScorers = this.state.awayScorers.map(text => 
      <p className="white" key={text}>{text}</p>
    );
    return (
      <div className="score">
        <p className="cyan">{this.state.homeTeam.toUpperCase()}</p>
        <p className="white scoreline">{this.state.homeTeamScore}-{this.state.awayTeamScore}</p>
        <p className="cyan">{this.state.awayTeam.toUpperCase()}</p>
        <p className="white" />
        <div className="homeScorers">
          {homeScorers}
        </div>
        <div className="awayScorers">
          {awayScorers}
        </div>
      </div>
    );
  }
}

interface ScoreProps {
  homeTeam: string;
  homeTeamScore: number;
  homeScorers: string[];
  awayTeam: string;
  awayTeamScore: number;
  awayScorers: string[];
}

interface ScoreState {
  homeTeam: string;
  homeTeamScore: number;
  homeScorers: string[];
  awayTeam: string;
  awayTeamScore: number;
  awayScorers: string[];
}