import React, { useState } from 'react';

export function Close(props) {
    return (
        <React.Fragment>
            <button 
                style={{display: props.display}}
                className="close_button"
                value={"none"}
                onClick={e=> props.onChange(String(e.target.value))}
            >닫기</button>   
        </React.Fragment>
  )
}