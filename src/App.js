import React from 'react';
import Header from './components/Header';
import AppGrid from './components/AppGrid';
import './scss/style.scss';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header title="Tic-Tac-Toe" />
				<AppGrid />
			</div>
		);
	}	
}

export default App;