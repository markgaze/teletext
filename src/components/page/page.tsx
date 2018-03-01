import * as React from 'react';
import './page.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import Score from '../score/score';

export default class Page extends React.Component {
  render() {
    return (
        <div className="grid">
        <Header />
        <Banner />
        <div className="main">
          <p className="green">PREMIER LEAGUE RESULTS</p>
          <Score homeTeam={'Sunderland'} homeTeamScore={4} homeScorers={['Wickham 16, 86', 'Borini 45', 'Giaccherini 76']} awayTeam={'Cardiff City'} awayTeamScore={0} awayScorers={[]} />
          <Score homeTeam={'Liverpool'} homeTeamScore={0} homeScorers={[]} awayTeam={'Chelsea'} awayTeamScore={2}  awayScorers={['Ba 45', 'Willian 90']} />
          <Score homeTeam={'Crystal Palace'} homeTeamScore={0} homeScorers={[]} awayTeam={'Manchester City'} awayTeamScore={2} awayScorers={['Dzeko 4', 'Toure 43']} />
          {/* <div className="score">
            <p className="cyan">LIVERPOOL</p>
            <p className="white scoreline">0-2</p>
            <p className="cyan">CHELSEA</p>
            <p className="white" />
            <div className="awayScorers">
              <p className="white">Ba 45</p>
              <p className="white">Willian 90</p>
            </div>
          </div>
          <div className="score">
            <p className="cyan">CRYSTAL PALACE</p>
            <p className="white scoreline">0-2</p>
            <p className="cyan">MANCHESTER CITY</p>
            <p className="white" />
            <div className="awayScorers">
              <p className="white">Dzeko 4</p>
              <p className="white">Toure 43</p>
            </div>
          </div> */}
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
}
