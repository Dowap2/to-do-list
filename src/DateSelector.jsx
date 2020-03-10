import React from "react";

export function DateSelector(props){
    return <div className="date_box">
        <input 
            value={props.value}
            onChange={e=> props.onChange(e.target.value)}
            type="date"
            min="2020-01-01"
            max="2020-12-31"
        />
    </div>
}