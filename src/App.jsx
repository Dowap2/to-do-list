import React, { useState, useEffect } from 'react';
import './App.css';
import { DateSelector } from './DateSelector';
import { ToDoList } from './ToDoList'
import { AddToDo } from './AddToDo'
import { Modal } from './Modal'
import { Close } from './Close'

function App() {
  let today = new Date();   
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let fulldate = year + '-' + month + '-' + date;
  const [todate , setDate] = useState(fulldate);
  let [todo , setTodo] = useState(0);
  let [list , setList] = useState([]);
  let addList = <div>
    <textarea name="" id="" cols="30" rows="1"></textarea>
    <button></button>
  </div>
  useEffect(() => {
    if(todo != 0){
      setList(list = list.concat(addList))
    }
  }, [todo])
  return(
    <html className="App">
      <header className="header">
        <div className="logo_box"></div>
      </header>
      <DateSelector value={todate} onChange={setDate}/>
      <div className="todo_title_box">
        <p className="todo_title">{todate}의 할일</p>
      </div>
      <div className="todo_box">
        <div>
          {list}
        </div>
      </div>
      <AddToDo value={todo} onClick={setTodo}/>
      <button onClick = {e => console.log(todo)}></button>
    </html>
  );
}

export default App;
