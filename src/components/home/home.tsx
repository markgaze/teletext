import * as React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import DoubleTextGenerator from '../../helpers/double-text';
import OptionCreator from '../../helpers/options';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="main-headline">
          <p className="yellow">News</p>
          <Link to="/104">
            <div className="option">
              {DoubleTextGenerator.CreateText('MAIN NEWS HEADLINE GOES HERE')}
              {DoubleTextGenerator.CreateText('104', 'yellow')}
            </div>
          </Link>
          <hr className="blue"/>
        </div>
        <div className="first-column">
          {this.getOption('A-Z HEADLINES', '199')}
          {this.getOption('BBC INFO', '695')}
          {this.getOption('CHILDREN', '500')}
          {this.getOption('COOKERY', '580')}
          {this.getOption('COMMUNITY', '650')}
          <div className="spacer" />
          {this.getOption('EDUCATION', '630')}
          {this.getOption('ENTERTAINMENT', '540')}
          {this.getOption('FILMS', '570')}
          {this.getOption('FINANCE', '200')}
          {this.getOption('HORSERACING', '660')}
          {this.getOption('LOTTERY', '555')}
          {this.getOption('MUSIC', '560')}
        </div>
        <div className="second-column">
          {this.getOption('NEWS HEADLINES', '101')}
          {this.getOption('NEWS FOR REGION', '160')}
          {this.getOption('NEWSROUND', '510')}
          {this.getOption('RADIO', '640')}
          {this.getOption('READ HEAR', '641')}
          <div className="spacer" />
          {this.getOption('SPORT', '300')}
          {this.getOption('SUBTITLING', '888')}
          {this.getOption('TRAVEL', '430')}
          {this.getOption('TV FEATURES', '590')}
          {this.getOption('TV LINKS', '615')}
          {this.getOption('TV LISTINGS', '600')}
          {this.getOption('WEATHER', '400')}
        </div>
        <div className="page-footer bluebg">
          <p className="yellow">Some interesting text goes here</p>
        </div>
      </div>
    );
  }

  getOption(text: string, pageNum: string) {
    return OptionCreator.GetOption(text, pageNum);
  }
}