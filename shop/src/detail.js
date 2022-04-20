
import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import { useHistory, useParams } from 'react-router-dom'

import {재고context} from './App.js'
import { connect } from 'react-redux';

import App from './App';


function Detail(props){

    let 재고 = useContext(재고context)

    let [alert,alert변경] = useState(true)
    let history = useHistory();

    useEffect(()=>{
        let 타이머 = setTimeout(() => {
            alert변경(false)
        }, 2000);

        return ()=>{clearTimeout(타이머)}
    },[ ])
    
    let { id } = useParams();

    useEffect(()=>{
        let arr = localStorage.getItem('watched')
        if(arr == null){
            arr = []
        }else{
            arr = JSON.parse(arr)
        }
        
        arr.push(id)
        arr = new Set(arr) //set자료형은 중복을 허용하지 않는다.
        arr = [...arr]

        localStorage.setItem('watched',JSON.stringify(arr))
    })
    
/*     if(JSON.parse(localStorage.getItem('watched') == null)){
        localStorage.setItem('watched',JSON.stringify([id]))
    }else {
        let recentItem = JSON.parse(localStorage.getItem('watched'))
        if(recentItem.indexOf(id) < 0){
            recentItem.push(id)
            localStorage.setItem('watched',JSON.stringify(recentItem) )
        }
    
    } */

    return (
        
        <div className="container">
            <div>Detail</div>

            {
                alert == true 
                ? <div className='my-alert'>재고없음</div>
                : null
            }
            
            <div className="row">
            <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(Number(id)+1)+".jpg"} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                {재고}

                <button className="btn btn-danger" onClick={()=>{
                    props.dispatch({type :'항목추가', payload : {id:props.shoes[id].id, name: props.shoes[id].title, quantity :1}})
                    history.push('/cart')
                }}>주문하기</button> 

                <button className="btn btn-danger" onClick={()=>{
                    history.goBack();

                    history.push('/others')

                }}>돌아가기</button> 

            </div>
            </div>
        </div>
    )
}

class LifecycleHook extends React.Component {
    componentDidMount(){
      //LifecycleHook 컴포넌트가 시작하고 실행할 코드
    }
    componentWillUnmount(){
      //LifecycleHook 컴포넌트가 사라지기 전(다른페이지로 랜더링)에 실행할 코드
    }
  }

function 함수명(state){ //redux store데이터를  props화 해주는 함수
    return{
        
        state : state.reducer,
        alertState : state.reducer2
    }
}

export default connect(함수명)(Detail)