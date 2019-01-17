import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import { watch, dispatchFilter, dispatchMap } from 'redux-easy';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
  }

  state = {
    editing: false
  }

  deleteTodo = (id) => {
    dispatchFilter('todos', todo =>
      todo.id !== id
    )
  }

  editTodo = (id, text) => {
    dispatchMap('todos', todo =>
      todo.id === id ?
        { ...todo, text: text } :
        todo
    )
  }

  completeTodo = (id) => {
    dispatchMap('todos', todo => 
      todo.id === id ?
        { ...todo, completed: !todo.completed } :
        todo
    )
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.deleteTodo(id)
    } else {
      this.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => this.completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => this.deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

export default watch(TodoItem, {})
