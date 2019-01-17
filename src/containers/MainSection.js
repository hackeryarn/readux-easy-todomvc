import React, { Component } from 'react'
import { dispatch, dispatchFilter, watch } from 'redux-easy';
import { getCompletedTodoCount } from '../selectors'
import Footer from '../components/Footer'
import VisibleTodoList from './VisibleTodoList'

class MainSection extends Component {
  constructor(props) {
    super(props)

    this.completedCount = getCompletedTodoCount(props.todos)
    this.todosCount = props.todos.length
  }

  completeAllTodos = () => {
    dispatch('completeAllTodos')
  }

  clearCompleted = () => {
    dispatchFilter('todos', todo => 
      todo.completed === false
    )
  }

  render() {
    return (
      <section className="main">
        {
          !!this.todosCount && 
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={this.completedCount === this.todosCount}
              readOnly
            />
            <label onClick={this.completeAllTodos}/>
          </span>
        }
        <VisibleTodoList />
        {
          !!this.todosCount &&
          <Footer
            completedCount={this.completedCount}
            activeCount={this.todosCount - this.completedCount}
            onClearCompleted={this.clearCompleted}
          />
        }
      </section>
    )
  }
}

export default watch(MainSection, {
  todos: ''
})
