import React, { useState } from 'react';

export function Modal(props) {
    return (
        <React.Fragment>
            <div style={{display: props.display}}>
                <div className="Modal">
                    <div className="content">
                        <textarea 
                            name="textbox" 
                            className="todo_text" 
                            cols="30" 
                            rows="10"
                            placeholder="할 일을 입력하시오"
                            value={props.value}
                            onChange={e=> props.onChange(e.target.value)}
                        />
                    </div>
                </div>
            </div>      
    </React.Fragment>
  )
}
export default Modal;