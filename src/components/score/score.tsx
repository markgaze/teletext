import * as React from 'react';
import './score.css';
import ScoreModel from './score.model';

export default class Score extends React.Component<ScoreProps, ScoreState> {
  constructor(props: ScoreProps) {
    super(props);
    this.state = props;
  }

  render() {
    var homeScorers = this.state.scoreData.homeScorers.map(text => 
      <p className="white" key={text}>{text}</p>
    );
    var awayScorers = this.state.scoreData.awayScorers.map(text => 
      <p className="white" key={text}>{text}</p>
    );
    var centerText = this.gameHasStarted() ? '-' : 'v';
    return (
      <div className="score">
        <p className="cyan">{this.state.scoreData.homeTeam.toUpperCase()}</p>
        <p className="white scoreline">{this.state.scoreData.homeTeamScore}{centerText}{this.state.scoreData.awayTeamScore}</p>
        <p className="cyan">{this.state.scoreData.awayTeam.toUpperCase()}</p>
        <p>{this.state.scoreData.kickoffTime}</p>
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

  private gameHasStarted() {
    return this.state.scoreData.kickoffTime === '' && (this.state.scoreData.homeTeamScore !== null && this.state.scoreData.awayTeamScore !== null);
  }
}

interface ScoreProps {
  scoreData: ScoreModel;
}

interface ScoreState {
  scoreData: ScoreModel;
}