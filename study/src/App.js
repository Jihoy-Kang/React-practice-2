/* esLint-disable */

import React, {useState} from 'react'
import logo from './logo.svg'; //이미지 바인딩
import './App.css';

function App() {

  let [데이터,데이터변경] = useState(['남자 코트 추천','우동맛집', '파이썬 독학'])
  let [따봉,따봉변경] = useState([0,0,0])
  let posts = '강남고기맛집'
  let [show,show변경] = useState([false,false,false])
  let [입력,입력변경] = useState("")

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

  function 열닫(i){
    let newShow = [...show]
    newShow[i] === true
    ? newShow[i] = false
    : newShow[i] = true
    show변경(newShow)
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
            <div className="list" key={i}>
              <h3>{ 데이터[i] }<span onClick={()=>{좋아요(i)}}>👍</span>
          {따봉[i]}</h3>
              <p>2월 17일 발행</p>
              <button onClick={제목바꾸기}>수정</button>
              <button onClick={()=>{열닫(i)}}>더보기</button>
              <hr/>
              { show[i] == true 
                ? <Modal 데이터={데이터[i]}/>
                : null
              }
            </div>
            
          )
        })
      }
      
      <div className="publish">
        <input onChange={(e)=>{입력변경(e.target.value)}} />
        <button onClick={()=>{
          let new데이터 = [...데이터]
          new데이터.unshift(입력)
          데이터변경(new데이터)
        }}>저장</button>
      </div>

    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h2>{props.데이터}</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
