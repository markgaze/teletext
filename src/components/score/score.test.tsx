import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Score from './score';

describe('Score', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Score scoreData={getScoreData()} />, div);
  });
});

function getScoreData() {
  return {
      homeTeam: 'Sunderland',
      homeTeamScore: 4,
      homeScorers: ['Wickham 16, 86', 'Borini 45', 'Giaccherini 76'],
      awayTeam: 'Cardiff City',
      awayTeamScore: 0,
      awayScorers: []
  };
}