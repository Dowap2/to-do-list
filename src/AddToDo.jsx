import React from "react";

export function AddToDo(props){
    return <div>
        <button
            className="button"
            value={"block"}
            onClick={e=> props.onChange(String(e.target.value))}
        >추가하기</button>
        
    </div>
}