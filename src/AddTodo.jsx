import React from 'react';

export function AddTodo(props){
    return(
        <div>
            <input type="text" placeholder="할 일을 입력하시오" value={props.value} onChange={e=> props.onChange(e.target.value)}/>
            <button onClick={props.onClick}>추가하기</button>
        </div>
    )
}