import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SelectPlayer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false,
      disabled: true,
      sideX: 'X',
      sideO: '0',
      player: null,
      computer: null,
      selectedSide: null
    }; 

    this.baseState = this.state;

    this.onOpen       = this.onOpen.bind(this);  
    this.onClose      = this.onClose.bind(this);
    this.onSelectSide = this.onSelectSide.bind(this);
    this.onSubmitSide = this.onSubmitSide.bind(this);
  }

  // Open Select Side Modal
  onOpen() {
    this.setState({ open: true });
  }

  // Close Select Side Modal
  onClose() {
    this.setState(this.baseState);
  }

  // Select Player Side 
  onSelectSide(e) {
    this.setState({
      player: e.target.value,
      disabled: false
    });
  }

  // Submit (Selected) Player & Computer Sides
  onSubmitSide() {
    const { sideX, sideO, selectedSide } = this.state;

    if(selectedSide === sideX)
      this.setState({ 
        player: sideX, 
        computer: sideO, 
        open: false,
        disabled: false
      });
    else
      this.setState({ 
        player: sideO, 
        computer: sideX, 
        open: false,
        disabled: false
      });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={ true }
        onClick={ this.onClose }
      />,
      <FlatButton
        label="Submit"
        primary={ true }
        disabled={ this.state.disabled }
        onClick={ this.onSubmitSide }
      />,
    ];

    const buttonStyle = {
      display: 'table',
      margin: '0 auto 3em',
    };

    const modalStyle = {
      width: '500px',
    };

    const { open, sideX, sideO,  } = this.state;

    return (
      <div>
        <RaisedButton label="Select Player" onTouchTap={ this.onOpen } style={ buttonStyle }/>
        <Dialog
          title="Select Player"
          style={ modalStyle }
          actions={ actions }
          modal={false}
          open={ open }
          onRequestClose={ this.onClose }
        >
          <RaisedButton 
            className="player" 
            label="X" 
            value={ sideX } 
            onClick={ this.onSelectSide } 
          />
          <RaisedButton 
            className="player" 
            label="O" 
            value={ sideO } 
            onClick={ this.onSelectSide } 
          />
        </Dialog>
      </div>
    );
  }
}

export default SelectPlayer;