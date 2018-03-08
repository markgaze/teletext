import * as React from 'react';
import { Link } from 'react-router-dom';

export default class OptionCreator {
  static GetOption(text: string, pageNum: string) {
    return (
      <Link className="white" to={pageNum}>
        <div className="option">
          <p className="yellow">{text}</p>
          <p>{pageNum}</p>
        </div>
      </Link>
    );
  }
}