import React, { Component } from 'react'
import { dispatch } from 'redux-easy';

import TodoTextInput from '../components/TodoTextInput'

export default class Header extends Component {
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
