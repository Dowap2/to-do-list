import React from "react";

export function ToDoList(props){
    return <div className="date_box">
        <input 
            value={props.value}
            type="checkbox"
        />
        <div className="todo"></div>
    </div>
}