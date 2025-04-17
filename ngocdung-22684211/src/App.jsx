import React, { useState } from 'react';
import Bai02 from "../component/Bai02_Todo.jsx";      // TodoList component
import Bai03 from "../component/Bai03_Toggle_Theme.jsx";
import Bai01 from "../component/Bai01/Bai01.jsx"  // ToggleTheme component
import Bai04 from "../component/Bai04/Shoppingcart.jsx"; // Car component
import Bai05 from "../component/Bai05/Auth.jsx"; // Car component

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
    <div style={{ textAlign: "center", marginTop: "20px" , width: "100%"}}>
      <div style={{ textAlign: "center", marginTop: "20px", border: "2px solid black", width: "900px", margin: "auto", borderRadius: "5px" }}>
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

        <button
          style={{ ...baseStyle, ...(selected === 'car' ? activeStyle : {}) }}
          onClick={() => setSelected('car')}
        >
          Car
        </button>

        <button
          style={{ ...baseStyle, ...(selected === 'auth' ? activeStyle : {}) }}
          onClick={() => setSelected('auth')}
        >
          auth
        </button>
      </div>

      {/* Hiển thị component tương ứng */}
      {selected === 'counter' && <Bai01/>}
      {selected === 'todo' && <Bai02/>}
      {selected === 'theme' && <Bai03/>}
      {selected === 'car' && <Bai04/>}
      {selected === 'auth' && <Bai05/>}
    </div>
  );
}

export default App;
