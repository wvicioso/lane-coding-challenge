import React, { Component } from 'react';
import logo from '../../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Lane Coding Challenge 1</h2>
      </div>
    );
  }
}
