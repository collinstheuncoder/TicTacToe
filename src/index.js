import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './scss/index.scss';
import App from './App';

ReactDOM.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root')
);