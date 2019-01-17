import React from 'react'
import {reduxSetup} from 'redux-easy';
import App from './components/App'
import './reducers'
import { SHOW_ALL } from './constants/TodoFilters'
import 'todomvc-app-css/index.css'

const initialState = {
  todos: [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ],
  visibilityFilter: SHOW_ALL
}

reduxSetup({component: <App />, initialState});
