import React, { Component } from 'react';

export default class Errors extends Component {

  render() {
    return (
        <div style={{height: 12}}>
          <h5 style={{color: 'red', fontSize: 12, textAlign: 'left'}}>{ this.props.error }</h5>
        </div>
    );
  }
}
