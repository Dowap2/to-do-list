import React, { useState, useEffect } from 'react';
import { DatePicker } from "./DateRangeSelector";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { AddTodo } from './AddTodo'
import { List } from './List'
import moment from "moment";
import './App.css'
import logo from './logo.png'

let obj = {};

function App() {
  let [todo, setTodo] = useState("")
  let [list,setList] = useState()
  let [date , setDate] = useState(moment().format('YYYYMMDD'))
  let [todayYM , setTodayYM] = useState()
  let [todayD , setTodayD] = useState()
  
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
    <div className="todo_textbox">
      <div className="logo_box">
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <div className="date_text">
        {todayYM}<br/>{todayD}
      </div>
      <div>
        <AddTodo value={todo} onChange={setTodo} onClick={e => PushTodo()}/>
      </div>
      <div>
        <List value={list}/>
      </div>
    </div>
    <div className="todo_calendarbox">
      <DatePicker onChange={setDate} onChangeYM={setTodayYM} onChangeD={setTodayD}/>
    </div>
  </div>);
}

export default App;
