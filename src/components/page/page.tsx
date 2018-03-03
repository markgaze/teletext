import * as React from 'react';
import './page.css';
import Header from '../header/header';
import Banner from '../banner/banner';
import Results from '../results/results';
import Footer from '../footer/footer';
import { Route, Switch, Redirect, RouteProps } from 'react-router';
import Table from '../table/table';
import Error404 from '../error/error';
import Home from '../home/home';

export default class Page extends React.Component<RouteProps, {}> {
  render() {
    var pageNum = '100';
    if (this.props.location) {
      pageNum = this.props.location!.pathname.replace('/', '');
    }
    return (
        <div className="grid">
        <Header pageNumber={pageNum}/>
        <Banner />
        <div className="main">
          <Switch>
            <Route exact={true} path="/" render={() => (<Redirect to="/100" />)} />
            <Route path="/100" component={Home} />
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
