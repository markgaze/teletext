import * as React from 'react';
import './page.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import Results from '../results/results';
import Footer from '../footer/footer';
import { Route, Switch } from 'react-router';
import Table from '../table/table';
import Error404 from '../error/error';

export default class Page extends React.Component {
  render() {
    return (
        <div className="grid">
        <Header />
        <Banner />
        <div className="main">
          <Switch>
            <Route path="/303" component={Results} />
            <Route path="/324" component={Table} />
            <Route component={Error404} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
