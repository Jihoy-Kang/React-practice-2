import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'

import{ Provider } from 'react-redux';
import{ combineReducers, createStore } from 'redux';

let alertState = true

let 기본state =  [
    {
    id : 0,
    name : '테스트1',
    quantity : 4,
    },
    {
      id : 1,
      name : '테스트2',
      quantity : 2,
    },
    {
      id : 2,
      name : '테스트3',
      quantity : 6,
    }
  ]



function reducer(state = 기본state, 액션){ 
  if(액션.type === '항목추가'){
    let found = state.findIndex((a)=>{ return a.id === 액션.payload.id})

    if(found >= 0 ){
      let copy =[...state]; // 딥카피
      copy[found].quantity++;
      return copy
    }else{
      let copy = [...state]
      copy.push(액션.payload)
      return copy
    }
    
  }else if(액션.type === '수량증가'){
    let copy =[...state]; // 딥카피
    copy[액션.payload].quantity++;
    return copy
  }else if(액션.type === '수량감소'){
    let copy =[...state]; // 딥카피
    copy[액션.payload].quantity--;
    return copy
  }else{
    return state
  }
  
} 

function reducer2(state = alertState, 액션){
  if(액션.type === '닫기'){
    return false
  }else{
    return true
  }
}

let store = createStore(combineReducers({reducer,reducer2}))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
