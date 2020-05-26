import React from 'react';

export function TodoDate(props){
    return(
        <div>
            <link rel="stylesheet" type="text/css" href="${ctx }/css/fullcalendar.css" />
            <link rel="stylesheet" type="text/css" href="${ctx }/css/fullcalendar.min.css" />
            <script type="text/javascript" src="<c:url value='/js/fullcalendar.min.js'/>"></script>
            <div id="calendar"></div>
            <input type="date" value={props.value} min="2020-01-01" max="2020-12-31" onChange={e => props.onChange(e.target.value)}></input>
        </div>
    )
}