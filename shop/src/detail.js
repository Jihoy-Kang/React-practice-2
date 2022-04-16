
import React, {useState} from 'react';

import { useHistory, useParams } from 'react-router-dom'
import App from './App';


function Detail(props){

    let history = useHistory();


    let { id } = useParams();
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>상품설명</p>
                <p>120000원</p>
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

export default Detail