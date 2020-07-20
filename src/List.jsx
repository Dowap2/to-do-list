import React from 'react';

export function List(props){
    let list = props.value;
    let arr = [];
    if(list !== undefined){
        let len = list.length;
        for(let i = 0; i<len; i++){
            arr.push(
            <div className="todo_list">
                <input type="checkbox" className="todo_checkbox"/>
                <label className="todo">{list[i]}</label>
            </div>
            )
        }
    }
    return(
        <div className="todo_listbox">
            {arr}
        </div>
    )
}