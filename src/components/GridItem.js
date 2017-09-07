import React from 'react';
import PropTypes from 'prop-types';
import TouchRipple from 'material-ui/internal/TouchRipple';

const GridItem = props => 
	<TouchRipple>
		<div onClick={ props.populateGrid }>
			<span>{ props.label }</span>
		</div>
	</TouchRipple>
;

GridItem.propTypes = {
	label: PropTypes.string,
	populateGrid: PropTypes.func.isRequired
};

GridItem.defaultProps = {
	label: '-'
};

export default GridItem;
