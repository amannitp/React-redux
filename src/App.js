import logo from './logo.svg';
import './App.css';
import React_Redux_Tutorial from './Components/React_Redux_Tutorial';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc,Dec } from './state/reducer';

function App() {
  const curState=useSelector((state)=> state.number)
  const dispatch=useDispatch()
  return (
    <div>
   <div className='main'>
    <React_Redux_Tutorial/>
   </div>
   <div className='content'>
    <h1>{curState}</h1>
    <button onClick={()=>dispatch(Inc(10))}>INC</button>
    <button onClick={()=>dispatch(Dec(5))}>Dec</button>
    </div>
   </div>
  );
}

export default App;
