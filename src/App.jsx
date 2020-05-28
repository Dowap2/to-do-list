import React, { useState, useEffect } from 'react';
import { DatePicker } from "./DateRangeSelector";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { TodoDate } from './TodoDate'
import { AddTodo } from './AddTodo'
import { List } from './List'
import moment from "moment";
import './App.css'

let obj = {};

function App() {
  let [todo, setTodo] = useState("")
  let [list,setList] = useState()
  let [date , setDate] = useState(moment().format('YYYYMMDD'))
  
  useEffect(() => {
    if(Object.values(obj) != null){
      setList(list = obj[date])
    }
  }, [date])

  function PushTodo(){
    if(obj[date] === undefined){
      obj[date] = [];
      obj[date].push(todo)
    }
    else{
      obj[date].push(todo)
    }
    setTodo("")
    setList(list = obj[date])
  }

  return(<div>
    <div className="header">
      <h1>투두 리스트</h1>
    </div>
    <div>
      <div>
        <h3>날짜를 선택해주세요</h3>
        <DatePicker value={date} onChange={setDate}/>
        <button onClick={e=> console.log(date)}></button>
      </div>
      <div>
        <div>{date} 할 일 목록</div>
        <List value={list}/>
      </div>
    </div>

    <div>
      <AddTodo value={todo} onChange={setTodo} onClick={e => PushTodo()}/>
    </div>

  </div>);
}

export default App;
