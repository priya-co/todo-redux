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
  todoLists: [{
    label: 'Buy milk',
    isChecked: false,
    index: 0
  }, {
    label: 'Buy a1 milk',
    isChecked: true,
    index: 0
  }, {
    label: 'Buy a2 milk',
    isChecked: false,
    index: 0
  }]
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
