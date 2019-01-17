import React from 'react'
import { watch } from 'redux-easy';

import TodoItem from '../components/TodoItem'
import { getVisibleTodos } from '../selectors'

const VisibleTodoList = ({ visibilityFilter, todos }) => {
  const filteredTodos = getVisibleTodos(visibilityFilter, todos)

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo =>
        <TodoItem key={todo.id} todo={todo}  />
      )}
    </ul>
  )
}

export default watch(VisibleTodoList, {
  todos: '',
  visibilityFilter: ''
})
