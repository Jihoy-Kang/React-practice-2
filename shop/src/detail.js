
import React, {useEffect, useState} from 'react';
import './App.css';
import { useHistory, useParams } from 'react-router-dom'

import App from './App';


function Detail(props){

    
    let [alert,alert변경] = useState(true)
    let history = useHistory();

    useEffect(()=>{
        let 타이머 = setTimeout(() => {
            alert변경(false)
        }, 2000);

        return ()=>{clearTimeout(타이머)}
    },[ ])
    
    let { id } = useParams();
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
                <button className="btn btn-danger">주문하기</button> 

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

export default Detail