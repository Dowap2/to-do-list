import React from 'react';

export function List(props){
    let list = props.value;
    return(
        <div>
            <button onClick={e=>console.log(props.value)}></button>
            {list}
        </div>
    )
}