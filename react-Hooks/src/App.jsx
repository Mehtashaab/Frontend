import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(15)

// use Hooks to change the state 

  // const addValue = ()=>{
  //   count = count + 1
  //   setCount(count)
  // }
  // const removeValue = ()=>{
  //   count = count - 1
  //   setCount(count)
  // }


//apply validation to stop the addvalue to 20 and stop the remove value to 0

  const addValue = ()=>{
    if(count < 20){
      setCount(count+1)
    }
  }
  const removeValue = ()=>{
    if(count > 0){
      setCount(count-1)
    }
  }

// let count = 15
// const addValue = ()=>{
//   count = count + 1 
//   console.log(count)
// }
// const removeValue = ()=>{
//   count = count - 1
//   console.log(count)
// }
  return (
    <>
     <h1>Hello World!</h1>
      <h2>Count : {count}</h2>
     <button onClick={addValue}>addValue :{count}</button>&nbsp; &nbsp;
     <button onClick={removeValue}>removeValue :{count}</button>
    </>
  )
}

export default App
