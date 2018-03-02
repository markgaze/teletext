import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Score from './score';

describe("Score", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Score homeTeam={'Home Team'} homeTeamScore={4} homeScorers={['Scorer 1 86', 'Scorer 2 45', 'Scorer 3 76']} awayTeam={'Away Team'} awayTeamScore={0} awayScorers={[]} />, div);
  });
});