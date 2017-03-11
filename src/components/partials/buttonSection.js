import React, { Component } from 'react';
import ActionButton from './actionButton'

export default class ButtonSection extends Component {

  handleActionClick(action, obj) {
    if (obj === 'Available Actions') {
      var currentActions = this.props.state.activeActions
      var otherActions = this.props.state.inactiveActions
    } else {
      var currentActions = this.props.state.inactiveActions
      var otherActions = this.props.state.activeActions
    }
    if (this.props.state.images.length > 1) {
      for ( var key in currentActions ) {
        if (key === action) {
          currentActions[key] = false
          otherActions[key] = true
        }
      }
      this.props.updateActions(obj, currentActions, otherActions);

    } else {
      this.props.updateErrors();
    }
  }

  renderActions() {
    if (this.props.obj === 'Available Actions') {
      var actionsObj = this.props.state.activeActions
    } else {
      var actionsObj = this.props.state.inactiveActions
    }
    const actions = []
    var i = 0
    for ( const action in actionsObj ) {
      var opacity = 1
      if (actionsObj[action] === false) {
        opacity = .0
      }
      actions.push(
        <ActionButton
          opacity={opacity}
          key={i}
          action={action}
          actions={this.props.obj}
          handleActionClick={this.handleActionClick.bind(this)}/>
      )
      i+=1
    }
    return actions
  }

  render() {
    const activeActions = this.renderActions();

    return (
      <div className="section">
        <h3> { this.props.obj } </h3>
        <div className='buttonsContainer'>
          { activeActions }
        </div>
      </div>
    )
  }
}
