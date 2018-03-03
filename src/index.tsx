import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page from './components/page/page';
import registerServiceWorker from './registerServiceWorker';
import './assets/teletext.css';
import './index.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route path="/" component={Page} />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
