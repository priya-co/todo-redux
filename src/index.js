import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { act } from 'react-dom/test-utils';

const intialState = {
  todoLists: []
}

const rootReducer = (state = intialState, action) => {
  console.log(rootReducer,action);
  switch(action.type) {  
    case 'ADD-ITEM':  
      return Object.assign({}, state, {todoLists: [...state.todoLists, action.todoList]}) 

    case 'CHECK-INPUT': 
      const todoCopy = [...state.todoLists];
      todoCopy[action.index].isChecked = action.isChecked;
      return Object.assign({}, state, {todoLists: [...todoCopy] });

    case 'REMOVE-ITEM':
      const todo = [...state.todoLists];
      todo.splice(action.index,1);
      return Object.assign({}, state,{todoLists: [...todo] } );


    default:
      return state;
  }  
}

const store = createStore(rootReducer, composeWithDevTools()); 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
