//using reducer only for counter
// const reducer = (state, action)=>{
//     if(action === 'increment'){
//         return state + 1
//     }
//     else{
//         return state - 1
//     }
// }

import { act } from "react"

// export default reducer


//using reducer for both color and counter by setting initial state as object
// const usagereducer = (state, action)=>{
//     switch(action){
//         case 'increment':
//             return {
//                 ...state, value: state.value + 1 
//             }
//         case 'decrement':
//             return {
//                 ...state, value: state.value - 1 
//             }
//         case 'green':
//             return {
//                 ...state, color: "green"
//             }
//         case "red":
//             return {
//                 ...state, color: "red"
//             }
//     }
// }

// export default usagereducer


//for using type in action
const usagereducer = (state, action)=>{
    switch(action.type){
        case 'change-value':
            return {
                ...state, value: state.value + action.payload
            }
        case 'change-value':
            return {
                ...state, value: state.value - action.payload
            }
        case 'change-color':
            return {
                ...state, color: action.payload
            }
        case "change-color":
            return {
                ...state, color: action.payload
            }
    }
}

export default usagereducer