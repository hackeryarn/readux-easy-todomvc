import { addReducer } from 'redux-easy';

addReducer('addTodo', (state, text) => {
  const { todos } = state;

  return {
    ...state,
    todos: [
      ...todos,
      {
        id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: text
      }
    ]
  }
})

addReducer('completeAllTodos', (state) => {
  const { todos } = state;
  const areAllMarked = todos.every(todo => todo.completed)

  return {
    ...state,
    todos: todos.map(todo => ({
      ...todo,
      completed: !areAllMarked
  }))
}})
