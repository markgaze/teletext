import * as React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
        <div className="container">
            <Link to="/303">
              <div className="option">
                <div className="dbl">
                  <span className="white blackbg">&#xe056;&#xe069;&#xe065;&#xe077;&#xe020;&#xe046;&#xe06f;&#xe06f;&#xe074;&#xe062;&#xe061;&#xe06c;&#xe06c;&#xe020;&#xe053;&#xe063;&#xe06f;&#xe072;&#xe065;&#xe073;</span>
                  <span className="white blackbg">&#xe156;&#xe169;&#xe165;&#xe177;&#xe120;&#xe146;&#xe16f;&#xe16f;&#xe174;&#xe162;&#xe161;&#xe16c;&#xe16c;&#xe120;&#xe153;&#xe163;&#xe16f;&#xe172;&#xe165;&#xe173;</span>
                </div>
                <div className="dbl">
                  <span className="cyan blackbg">&#xe033;&#xe030;&#xe033;</span>
                  <span className="cyan blackbg">&#xe133;&#xe130;&#xe133;</span>
                </div>
              </div>
            </Link>
            <Link to="/324">
              <div className="option">
                <div className="dbl">
                  <span className="white blackbg">&#xe056;&#xe069;&#xe065;&#xe077;&#xe020;&#xe046;&#xe06f;&#xe06f;&#xe074;&#xe062;&#xe061;&#xe06c;&#xe06c;&#xe020;&#xe054;&#xe061;&#xe062;&#xe06c;&#xe065;&#xe073;</span>
                  <span className="white blackbg">&#xe156;&#xe169;&#xe165;&#xe177;&#xe120;&#xe146;&#xe16f;&#xe16f;&#xe174;&#xe162;&#xe161;&#xe16c;&#xe16c;&#xe120;&#xe154;&#xe161;&#xe162;&#xe16c;&#xe165;&#xe173;</span>
                </div>
                <div className="dbl">
                  <span className="cyan blackbg">&#xe033;&#xe032;&#xe034;</span>
                  <span className="cyan blackbg">&#xe133;&#xe132;&#xe134;</span>
                </div>
              </div>
            </Link>
        </div>
    );
  }
}