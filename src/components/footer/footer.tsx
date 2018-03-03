import * as React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <a href="#" className="red">Next Page</a>
          <a href="#" className="green">Football</a>
          <a href="#" className="yellow">Top Sport</a>
          <a href="#" className="cyan">Sport</a>
        </div>
    );
  }
}
