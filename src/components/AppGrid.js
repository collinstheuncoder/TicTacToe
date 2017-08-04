import React from 'react';
import SelectPlayer from './SelectPlayer';
import PlayAgain from './PlayAgain';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const sides = ['X', 'O'];
const player1 = '',
		player2 = '';

class AppGrid extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			selectedPlayer: null,
		};
		
		this.selectSide = this.selectSide.bind(this);
		this.gameplay = this.gameplay.bind(this);
	}

	selectSide () {
		
	}

	gameplay() {
		
	}

	render() {
		return (
			<div className="container">
				<SelectPlayer />
				<div className="grid">
					<div><span>X</span></div>
					<div><span>X</span></div>
					<div><span>O</span></div>
					<div><span>X</span></div>
					<div><span>O</span></div>
					<div><span>X</span></div>
					<div><span>X</span></div>
					<div><span>O</span></div>
					<div><span>O</span></div>
				</div>
				<PlayAgain />
			</div>
		);
	}
}

export default AppGrid;