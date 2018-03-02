import * as React from 'react';
import './page.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import Results from '../results/results';

export default class Page extends React.Component {
  render() {
    return (
        <div className="grid">
        <Header />
        <Banner />
        <div className="main">
          <Results />
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
