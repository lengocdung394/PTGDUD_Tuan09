import React, { useState } from 'react';
// import Bai02 from "../baitap/TodoList";      // TodoList component
// import Bai03 from "../baitap/Toggle_Theme";
import Bai01 from "../component/Bai01/Bai01.jsx"  // ToggleTheme component

function App() {
  const [selected, setSelected] = useState('counter'); // Mặc định hiển thị Counter

  // style cho nút khi được chọn
  const activeStyle = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  };

  // style chung cho tất cả nút
  const baseStyle = {
    width: "120px",
    height: "50px",
    margin: "0 10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" , border:"2px solid black" ,width:"500px", margin :"auto", borderRadius:"5px"}}>
        <button
          style={{ ...baseStyle, ...(selected === 'counter' ? activeStyle : {}) }}
          onClick={() => setSelected('counter')}
        >
          Counter App
        </button>

        <button
          style={{ ...baseStyle, ...(selected === 'todo' ? activeStyle : {}) }}
          onClick={() => setSelected('todo')}
        >
          TodoList
        </button>

        <button
          style={{ ...baseStyle, ...(selected === 'theme' ? activeStyle : {}) }}
          onClick={() => setSelected('theme')}
        >
          ToggleTheme
        </button>
      </div>

      {/* Hiển thị component tương ứng */}
      {selected === 'counter' && <Bai01 />}
      {selected === 'todo' && <Bai01 />}
      {selected === 'theme' && <Bai01 />}
    </>
  );
}

export default App;
