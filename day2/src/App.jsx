import { useState } from 'react'

import './App.css'

//hooks-special type of function
//useState is a hook which use to change the state or value of the variable

function App() {

const [username, setusername] = useState("dinesh sirsiya")
const changeusername=() => {
  console.log("chal gya")
  setusername("rakesh sirsiya")
}
const [count, setCount] = useState(50);
const increment = () => {
  setCount(count + 1);
}
const decrement = () => {
  setCount(count - 1);
}
const reset = () => {
  setCount(50);
}
  return (
    <>
      
      <div>User name is = {username} </div>
      <button onClick={changeusername} type='button'> Change Username</button>

      <div>the value is = {count}</div>
      <button className='bg-red-500' onClick={increment} type='button'> Increment</button>
      <button className='bg-green-500' onClick={decrement} type='button'> Decrement</button>
      <button className='bg-blue-500' onClick={reset} type='button'> Reset</button>
    </>
  )
}

export default App
