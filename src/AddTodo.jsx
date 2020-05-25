import React from 'react';

export function AddTodo(props){
    return(
        <div>
            <input type="text" value={props.value} onChange={e=> props.onChange(e.target.value)}/>
            <button onClick={props.onClick}>추가하기</button>
        </div>
    )
}