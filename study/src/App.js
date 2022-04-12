import React, {useState} from 'react'
import logo from './logo.svg'; //이미지 바인딩
import './App.css';

function App() {

let [데이터,데이터변경] = useState(['남자 코트 추천','우동맛집'])

  let posts = '강남고기맛집'
  return (
    <div className="App">
      <div className='black'>
        React 테스트
      </div>
      <div className="list">
        <h3>{ 데이터[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
