import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return intialState;
        default:
            return state
    }
};

function Counter() {
    const [count, dispatch] = useReducer(reducer, intialState);
    return (
        <div className="counter">
            <h1>Counter Using <span>useReducer</span></h1>
            <h2>Count: <span>{count}</span></h2>
            <button
                onClick={() => {
                    dispatch("increment");
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                Decrement
            </button>
            <div>
                <button
                    onClick={() => {
                        dispatch("reset");
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
