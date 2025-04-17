import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice.js';

function Bai01() {
  const count = useSelector((state) => state.counter.value); // Adjust this path if your state shape is different
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '70px' }}>
      {/* Bai01 */}
      <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor:"lightblue" , width:"500px", margin :"auto", borderRadius:"5px", padding:"20px"}}>

        <h1 style={{ fontWeight: 'bold' }}>Counter</h1>
        <h2 style={{fontSize:"30px"}}>Count: {count}</h2>
        <button style={{ width: "200px", fontSize: "30px", backgroundColor: "green", color: "white", marginRight:"20px", borderRadius:"5px" }} onClick={() => dispatch(increment())}>Increment</button>
        <button style={{ width: "200px", fontSize: "30px", backgroundColor: "red", color: "white", borderRadius:"5px" }} onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

    </div>
  );
}

export default Bai01;