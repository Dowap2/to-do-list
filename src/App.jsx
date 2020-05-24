import React from 'react';

function App() {
  let arr = [99999999]
  
  let today = new Date();  
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  return(<div>
    <div>투두 리스트</div>
    <button onClick={e=> console.log()}></button>
    <div>
      <div>{year}-{month}-{date}</div>
      <div>투두리스트 보이는부분</div>
    </div>

    <div>
      <div>투두리스트 추가하는부분</div>
    </div>

  </div>);
}

export default App;
