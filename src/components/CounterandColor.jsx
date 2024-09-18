//using useState
// import React, { useState } from 'react'

// function CounterandColor() {

//   const [value, setValue] = useState(0)
//   const [color, setColor] = useState("")

//   return (
//     <div style={{backgroundColor: color}} className='counterandcolor'>
//         <div><h2>Count: {value}</h2></div>
//         <div>
//             <button onClick={()=>{setValue(value + 1)}}>Increment</button>
//             <button onClick={()=>{setValue(value - 1)}}>Decrement</button>
//         </div>
//         <button onClick={()=>{setColor("green")}}>Green</button>
//         <button onClick={()=>{setColor("red")}}>Red</button>
//     </div>
//   )
// }

// export default CounterandColor



//using useReduce
// import React, { useReducer } from 'react'
// import usagereducer from './reducer'


// const intialState = {value: 0}
// function CounterandColor() {
    
//     const [state, dispatch] = useReducer(usagereducer, intialState)

//   return (
//     <div style={{backgroundColor: state.color}} className='counterandcolor'>
//         <div><h2>Count: {state.value}</h2></div>
//         <div>
//             <button onClick={()=>{dispatch('increment')}}>Increment</button>
//             <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
//         </div>
//         <button onClick={()=>{dispatch("green")}}>Green</button>
//         <button onClick={()=>{dispatch("red")}}>Red</button>
//     </div>
//   )
// }

// export default CounterandColor


//implementing type in action for good practie
import React, { useReducer } from 'react'
import usagereducer from './reducer'


const intialState = {value: 0}
function CounterandColor() {
    
    const [state, dispatch] = useReducer(usagereducer, intialState)

  return (
    <div style={{backgroundColor: state.color}} className='counterandcolor'>
        <div><h2>Count: <span>{state.value}</span></h2></div>
        <div>
            <button onClick={()=>{dispatch({
                type: "change-value",
                payload: 1
            })}}>Increment</button>
            <button onClick={()=>{dispatch({
                type: "change-value",
                payload: -1
            })}}>Decrement</button>
        </div>
        <button onClick={()=>{dispatch({
                type: "change-color",
                payload: "green"
            })}}>Green</button>
        <button onClick={()=>{dispatch({
                type: "change-color",
                payload: "red"
            })}}>Red</button>
    </div>
  )
}

export default CounterandColor