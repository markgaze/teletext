import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Page from './components/page/page';
import registerServiceWorker from './registerServiceWorker';
import './assets/teletext.css';
import './index.css';

ReactDOM.render(
  <Page />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
