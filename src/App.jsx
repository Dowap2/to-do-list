import React, { useState, useEffect } from 'react';
import { TodoDate } from './TodoDate'
import { AddTodo } from './AddTodo'
import { List } from './List'

let obj = {};

function App() {
  let [today, setToday] = useState("2020-01-01")
  let [todo, setTodo] = useState("할 일을 입력하시오")
  let [list,setList] = useState()
  let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  let day = today.replace(reg, "");
  
  useEffect(() => {
    if(Object.values(obj) != null){
      setList(list = Object.values(obj))
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
  }

  return(<div>
    <div>투두 리스트</div>
    <button onClick={e=> console.log(obj)}>obj</button>
    <button onClick={e=> console.log(obj[day])}>obj[day]</button>
    <button onClick={e=> console.log(list)}></button>
    <div>
      <TodoDate value={today} onChange={setToday}/>
      <div>
        <div>{today} 할 일 목록</div>
        <List value={list} />
      </div>
    </div>

    <div>
      <AddTodo value={todo} onChange={setTodo} onClick={e => PushTodo()}/>
    </div>

  </div>);
}

export default App;
