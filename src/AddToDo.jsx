import React, { useState } from "react";

export function AddToDo(props){
    return <div>
        <button
            className="button"
            value = {props.value}
            onClick={e => props.onClick(Number(e.target.value)+1)}
        >추가하기</button>
    </div>
}