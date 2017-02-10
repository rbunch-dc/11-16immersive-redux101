import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import the provider from react-redux so that they can talk!
import { Provider } from 'react-redux';
// Import the store from redux.
import { createStore } from 'redux';

// Import the main reducer so we can give it to the store
import reducers from './reducers/index.js'

const theStore = createStore(reducers);

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
	document.getElementById('root')
);
