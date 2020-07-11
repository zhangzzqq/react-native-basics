import React, {useReducer} from 'react'

const reducer = function (state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        default:
            return {count: state.count}
    }
}

function Example() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;
    return (
        <div>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch({type: "decrement"})}>-</button>
        </div>
    );
}

export default Example;
