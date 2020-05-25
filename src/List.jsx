import React from 'react';

export function List(props){
    let list = props.value;
    let arr = [];
    if(list != undefined){
        let len = list.length;
        for(let i = 0; i<len; i++){
            arr.push(<div>
                {list[i]}
                <input type="checkbox"/>
            </div>)
        }
    }
    return(
        <div>
            <button onClick={e=>console.log(list[0])}></button>
            {arr}
        </div>
    )
}