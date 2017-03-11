import React, { Component } from 'react';

export default class ResetButton extends Component {
  render() {
    return (
      <button id='reset' onClick={this.props.resetActions}>
        RESET
      </button>
    );
  }
}
