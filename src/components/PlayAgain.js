import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const PlayAgain = () => {
	const style = {
      display: 'table',
      margin: '3em auto',
   };

	return (
		<RaisedButton label="Play Again" style={ style } />
	);
};

export default PlayAgain;