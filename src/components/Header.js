import React from 'react';

const Header = props => {
	return (
		<div className="text-center">
			<h2>{props.title}</h2>
		</div>
	)
}

export default Header;