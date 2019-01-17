import React, { Component } from 'react'
import { dispatch, watch } from 'redux-easy';

import TodoTextInput from '../components/TodoTextInput'

class Header extends Component {
  addTodo = (text) => {
    dispatch('addTodo', text)
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={(text) => {
            if (text.length !== 0) {
              this.addTodo(text)
            }
          }}
          placeholder="What needs to be done?"
        />
      </header>
    )
  }
}

export default watch(Header, {})
