import React, { Component } from 'react'
import { dispatchSet, watch } from 'redux-easy';
import classnames from 'classnames'

class Link extends Component {
  setFilter() {
    dispatchSet('visibilityFilter', this.props.filter)
  }

  isActive() {
    return this.props.visibilityFilter === this.props.filter 
  }
  
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        className={classnames({ selected: this.isActive() })}
        style={{ cursor: 'pointer' }}
        onClick={() => this.setFilter()}
      >
        {this.props.children}
      </a>
    )   
  }
}

export default watch(Link, {
  visibilityFilter: ''
})
