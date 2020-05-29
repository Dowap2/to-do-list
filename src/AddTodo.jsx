import React from 'react';


export function AddTodo(props){
    function keyEvent(e) {
        let keyCode = e.keyCode;
        if(keyCode == 13){
            console.log(keyCode);
            props.onClick()
        }
    }

    return(
        <div>
            <input 
                type="text" 
                placeholder="할 일을 입력하시오" 
                value={props.value} 
                onChange={e=> props.onChange(e.target.value)} 
                onKeyDown={e => keyEvent(e)}
                className="todo_input"
            />
        </div>
    )
}