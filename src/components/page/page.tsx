import * as React from 'react';
import './page.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import Results from '../results/results';
import Footer from '../footer/footer';

export default class Page extends React.Component {
  render() {
    return (
        <div className="grid">
        <Header />
        <Banner />
        <div className="main">
          <Results />
        </div>
        <Footer />
      </div>
    );
  }
}
