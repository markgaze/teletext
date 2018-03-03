import * as React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <Link to="303" className="red">Scores</Link>
          <Link to="324" className="green">Table</Link>
          <Link to="#" className="yellow">Top Sport</Link>
          <Link to="#" className="cyan">Sport</Link>
        </div>
    );
  }
}
