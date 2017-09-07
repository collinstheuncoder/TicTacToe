import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SelectPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      side1: 'X',
      side2: '0',
      player: null,
      computer: null,
      selectedSide: null
    }; 

    this.onOpen = this.onOpen.bind(this);  
    this.onClose = this.onClose.bind(this);
    this.onSelectSide = this.onSelectSide.bind(this);
  }

  onOpen() {
    this.setState({ open: true });
  }

  onClose() {
    this.setState({ open: false });
  }

  onSideChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSelectSide() {
    const { side1, side2, selectedSide } = this.state;

    if(selectedSide === side1)
      this.setState({ player: side1, computer: side2 });
    else
      this.setState({ player: side2, computer: side1 });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.onClose}
      />
    ];

    const buttonStyle = {
      display: 'table',
      margin: '0 auto 3em',
    };

    const modalStyle = {
      width: '500px',
    };

    const { open, side1, side2,  } = this.state;

    return (
      <div>
        <RaisedButton label="Select Player" onTouchTap={ this.onOpen } style={ buttonStyle }/>
        <Dialog
          title="Select Player"
          style={ modalStyle }
          actions={ actions }
          modal={false}
          open={ this.state.open }
          onRequestClose={ this.onClose }
        >
          <RaisedButton className="player" label="X" name="side1" value={ this.state.side1 } onChange={ this.onSideChange } onClick={ this.onSelectSide }/>
          <RaisedButton className="player" label="O" name="side2" value={ this.state.side2 } onChange={ this.onSideChange } onClick={ this.onSelectSide }/>
        </Dialog>
      </div>
    );
  }
}

export default SelectPlayer;