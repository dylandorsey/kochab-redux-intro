import React, { Component } from 'react';
import { connect } from 'react-redux';

const clearInput = '';

class InputWhatever extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newInput: '',
    }
  }

  handleElementChange = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'SUBMIT_FORM', payload: this.state.newInput });
    this.setState({
      newInput: clearInput,
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>Input whatever</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleElementChange('newInput')} value={this.state.newInput} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

// connect allows us to dispatch actions
export default connect()(InputWhatever);
