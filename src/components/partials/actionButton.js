import React, { Component } from 'react';

export default class ActionButton extends Component {

  render() {
    return (
      <button
        className='button'
        style={{ opacity: this.props.opacity }}
        onClick={() => this.props.handleActionClick(this.props.action, this.props.actions)}>
        { this.props.action }
      </button>
    );
  }
}
