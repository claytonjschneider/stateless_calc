import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './tco_form.js';
import registerServiceWorker from './registerServiceWorker';

// base & routing
// import { Router, browserHistory } from 'react-router';
// import routes from './routes.js';
// require('./stylesheets/tco.css');

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
  // <Router history={browserHistory} routes={routes} />
);
registerServiceWorker();
