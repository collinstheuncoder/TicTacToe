import React from 'react';
import SelectPlayer from './SelectPlayer';
import PlayAgain from './PlayAgain';
import GridItem from './GridItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class AppGrid extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		};

		this.baseState = this.state;
		
		this.onGameplay = this.onGameplay.bind(this);
		this.onResetGame = this.onResetGame.bind(this);
	}

	// Play Game
	onGameplay() {
		console.log('I am Groot');
	}
	
	// Play Again 
	onResetGame() {
		this.setState(this.baseState);
	}

	render() {
		const gridItems = [...Array(0||9)].map((x, i) => i);

		return (
			<div className="gamepage">
				<SelectPlayer />
				<div className="grid">
					{
						gridItems.map((item, index) => 
							<GridItem key={ index } populateGrid={ this.onGameplay }/>)
					}
				</div>
				<PlayAgain />
			</div>
		);
	}
}

export default AppGrid;