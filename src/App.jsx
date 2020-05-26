import React, { useState, useEffect } from 'react';
import { TodoDate } from './TodoDate'
import { AddTodo } from './AddTodo'
import { List } from './List'
import './App.css'

let obj = {};

function App() {
  let [today, setToday] = useState("2020-01-01")
  let [todo, setTodo] = useState("")
  let [list,setList] = useState()
  let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  let day = today.replace(reg, "");
  
  useEffect(() => {
    if(Object.values(obj) != null){
      setList(list = obj[day])
    }
  }, [today])

  function PushTodo(){
    if(obj[day] === undefined){
      obj[day] = [];
      obj[day].push(todo)
    }
    else{
      obj[day].push(todo)
    }
    setTodo("")
    setList(list = obj[day])
  }

  return(<div>
    <div className="header">
      <h1>투두 리스트</h1>
    </div>
    <div>
      <div>
        <h3>날짜를 선택해주세요</h3>
        <TodoDate value={today} onChange={setToday}/>
      </div>
      <div>
        <div>{today} 할 일 목록</div>
        <List value={list}/>
      </div>
    </div>

    <div>
      <AddTodo value={todo} onChange={setTodo} onClick={e => PushTodo()}/>
    </div>

  </div>);
}

export default App;
