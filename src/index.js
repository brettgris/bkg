import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import App from './app/App';

import WebFont from 'webfontloader';

WebFont.load({
  typekit: {
    id: 'lnr3uvz'
  }
});

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
