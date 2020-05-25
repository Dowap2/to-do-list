import React from 'react';

export function TodoDate(props){
    return(
        <div>
            <input type="date" value={props.value} min="2020-01-01" max="2020-12-31" onChange={e => props.onChange(e.target.value)}></input>
        </div>
    )
}