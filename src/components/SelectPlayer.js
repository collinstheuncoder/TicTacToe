import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SelectPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);  
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Select Player" onTouchTap={this.handleOpen} />
        <Dialog
          title="Select Player"
          style={{width: 350}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <RaisedButton className="player" label="X"/>
          <RaisedButton className="player" label="O"/>
        </Dialog>
      </div>
    );
  }
}

export default SelectPlayer;