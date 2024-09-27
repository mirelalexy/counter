import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);
    const decrementCount = () => setCount(((count === 0) ? 0 : count - 1));

    const resetCount = () => setCount(0);

    const incrementCount = () => setCount(count + 1);
    return(
        <div className="main-container">
            <h1>{count}</h1>
            <div className="button-view">
                <button className="decBtn btn" onClick={decrementCount}>Decrement</button>
                <button className="resetBtn btn" onClick={resetCount}>Reset</button>
                <button className="incBtn btn" onClick={incrementCount}>Increment</button>
            </div>
        </div>
    );
}

export default Counter