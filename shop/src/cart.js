import React from 'react';
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart (props){

    let state = useSelector((state)=>state)

    let dispatch = useDispatch();

    return(
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>

                {state.reducer.map((a, i)=>{
                    return(
                        <tr key={i}>
                            <td>{ a.id}</td>
                            <td>{ a.name}</td>
                            <td>{ a.quantity}</td>
                            <td>
                                <button onClick={()=>{dispatch({type : '수량증가', payload: a.id})}}>+</button>
                                <button onClick={()=>{dispatch({type : '수량감소', payload: a.id})}}>-</button>
                            </td>
                        </tr>
                    )
                    })
                }
                
            </Table>

            {
                props.alertState === true
                ?<div className='my-alert'>
                    <p>지금 구매하면 20%할인</p>
                    <button onClick={()=>{props.dispatch({type : '닫기'})}}>닫기</button>
                </div>
                : null
            }
            
        </div>
    )
}
/* 
function 함수명(state){ //redux store데이터를  props화 해주는 함수
    return{
        
        state : state.reducer,
        alertState : state.reducer2
    }
} */

/* export default connect(함수명)(Cart) */

export default Cart