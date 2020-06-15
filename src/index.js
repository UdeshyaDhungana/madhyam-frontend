import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import AppWrapper from './containers/AppWrapper';
import { BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducers'

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<AppWrapper />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
