import React from 'react';
import SelectPlayer from './SelectPlayer';
import PlayAgain from './PlayAgain';
import TouchRipple from 'material-ui/internal/TouchRipple';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class AppGrid extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
		
		this.onGameplay = this.onGameplay.bind(this);
	}

	onGameplay() {
		
	}

	render() {
		return (
			<div className="gamepage">
				<SelectPlayer />
				<div className="grid">
					<TouchRipple><div><span>X</span></div></TouchRipple>
					<TouchRipple><div><span></span></div></TouchRipple>
					<TouchRipple><div><span>O</span></div></TouchRipple>
					<TouchRipple><div><span></span></div></TouchRipple>
					<TouchRipple><div><span>O</span></div></TouchRipple>
					<TouchRipple><div><span>X</span></div></TouchRipple>
					<TouchRipple><div><span></span></div></TouchRipple>
					<TouchRipple><div><span></span></div></TouchRipple>
					<TouchRipple><div><span>O</span></div></TouchRipple>
				</div>
				<PlayAgain />
			</div>
		);
	}
}

export default AppGrid;