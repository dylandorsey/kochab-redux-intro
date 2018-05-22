import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputWhatever from '../src/components/InputWhatever/InputWhatever';
import WhateverList from '../src/components/WhateverList/WhateverList';

class App extends Component {
  buttonOneClicked = () => {
    // dispatch takes in an 'action'
    // in this case, 'action' is an object with a 'type' key of 'BUTTON_ONE'
    const action = { type: 'BUTTON_ONE' };
    this.props.dispatch(action);
  }

  buttonAddDownClicked = () => {
    const action = { type: 'MINUS' };
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <h3>Stepper</h3>
        <button onClick={this.buttonOneClicked}>Button One: ADD UP</button>
        <button onClick={this.buttonAddDownClicked}>Button One: ADD DOWN</button>
        <h3>Oreos</h3>
        <button onClick={() => this.props.dispatch({ type: 'BUTTON_TWO' })}>Manifest Oreo</button>
        <br></br>
        <button onClick={() => this.props.dispatch({type: 'EAT_OREOS'})}>Eat all Oreos</button>
        <InputWhatever />
        <WhateverList />
      </div>
    );
  }
}

// connect allows us to dispatch actions
export default connect()(App);
