/* esLint-disable */

import React, {useState} from 'react'
import logo from './logo.svg'; //이미지 바인딩
import './App.css';

function App() {

  let [데이터,데이터변경] = useState(['남자 코트 추천','우동맛집', '파이썬 독학'])
  let [따봉,따봉변경] = useState([0,0,0])
  let posts = '강남고기맛집'
  let [show,show변경] = useState(false)

  function 제목바꾸기(){
    let new데이터 = [...데이터] //딥카피-값공유없이 독립적인 같은값생성 reference type참조
    new데이터[0] = '여자코트추천'
    데이터변경(new데이터)
  }

  function 정렬(){
    let new데이터 = [...데이터]
    new데이터 = new데이터.sort((a,b)=>b-a)
    데이터변경(new데이터)
  }

  function 좋아요(i){
    let new따봉 = [...따봉]
    new따봉[i] += 1
    따봉변경(new따봉)
  }

  return (
    <div className="App">
      <div className='black'>
        React 테스트
      </div>
      <button onClick={정렬}>정렬</button>
      
      
      {
        데이터.map((a,i)=>{
          return(
            <div className="list">
              <h3 onClick={()=>{show변경(!show)}}>{ 데이터[i] }<span onClick={()=>{좋아요(i)}}>👍</span>
          {따봉[i]}</h3>
              <p>2월 17일 발행</p>
              <button onClick={제목바꾸기}>수정</button>
              <hr/>
             {/*  { show == true 
                ? <Modal />
                : null
              } */}
            </div>
            
          )
        })
      }

      

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
