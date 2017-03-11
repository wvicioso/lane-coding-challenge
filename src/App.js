import React, { Component } from 'react';
import './App.css';
import {
  ButtonSection,
  ImageDropZone,
  Header,
  ResetButton,
  Errors
} from './components'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      images: ["https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png"],
      activeActions: { rotate: true, scale: true, opacity: true, translate: true },
      inactiveActions: { rotate: false, scale: false, opacity: false, translate: false },
      rotate: 0,
      scale: '100%',
      opacity: 1,
      translate: 0,
      errors: [],
    }
  }

  getActions(){
    const actions = {};
    (this.state.activeActions.rotate === true) ? actions.rotate = 'rotate(0deg)' : actions.rotate = 'rotate(45deg)';
    (this.state.activeActions.translate === true) ? actions.translate = '-40px' : actions.translate = '0px';
    (this.state.activeActions.scale === true) ? actions.scale = '100%' : actions.scale = '50%';
    (this.state.activeActions.opacity === true) ? actions.opacity = 1 : actions.opacity = .5;
    return actions
  }

  updateActions(obj, actionsObj, inactionsObj){
    if (obj === 'Available Actions') {
      this.setState({
        activeActions: actionsObj,
        inactiveActions: inactionsObj
      })
    } else {
      this.setState({
        activeActions: inactionsObj,
        inactiveActions: actionsObj
      })
    }
  }

  resetActions(){
    this.setState({
      activeActions: { rotate: true, scale: true, opacity: true, translate: true },
      inactiveActions: { rotate: false, scale: false, opacity: false, translate: false },
      rotate: 0,
      scale: '100%',
      opacity: 1,
      translate: 0
    })
  }

  updateErrors(){
    this.setState({
      errors: ['Please add an image first.']
    })
  }

  render() {
    const transform = this.getActions();

    return (
      <div className='App'>
        <Header />
        <Errors error={this.state.errors[0]} />
        <div style={{display: 'flex', backgroundColor: 'white'}} >
          <ImageDropZone
            images={this.state.images}
            transform={transform}
            this={this} />
          <ButtonSection
            obj='Available Actions'
            state={this.state}
            updateActions={this.updateActions.bind(this)}
            updateErrors={this.updateErrors.bind(this)} />
          <ButtonSection
            obj='Applied Actions'
            state={this.state}
            updateActions={this.updateActions.bind(this)}
            updateErrors={this.updateErrors.bind(this)} />
        </div>
        <ResetButton resetActions={this.resetActions.bind(this)} />
      </div>
    );
  }
}
