import React, { useState } from 'react';
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
  let day = today.getDay();
  let fulldate = year + '-' + month + '-' + date;
  const [todate , setDate] = useState(fulldate);
  const [list , setList] = useState(0);
  const [add , setAdd] = useState("none");
  const [close , setClose ] = useState("block")

  console.log(fulldate);
  return (
    <html className="App">
      <Modal 
        display={close,add}
      />
      <Close 
        value={close}
        onChange={setClose}
        display={add}

      />
      <header className="header">
        <div className="logo_box">
          <img src="./logo.png" alt="logo" className="logo"/>
        </div>
      </header>
      <div className="box_left">
        <DateSelector value={todate} onChange={setDate}/>
        <div className="todo_title_box">
          <p className="todo_title">{todate}의 할일</p>
        </div>
        <div className="todo_box">
          <ToDoList value={list} onChange={setList}/>
        </div>
        <AddToDo value={add} onChange={setAdd}/>
      </div>
      <div className="box_right">
        <div className="todo_title_box_right">
          <p className="todo_title">오늘 해야 할 일</p>
        </div>
        <div className="todo_box_right">

        </div>
        <p className="todo_title">오늘 완료한 일</p>
        <div className="todo_box_right">

        </div>
      </div>
    </html>
  );
}

export default App;
