import { useState } from "react";

const Counter = ()=>{

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const handleInc = ()=>{
        setCount(count + Number(value))
    }

    const handleDec = ()=>{
        if(count < 1){
            setCount(0)
        }
        else{
            setCount(count - Number(value))
        }
    }

    const handleReset = ()=>{
        setCount(0)
    }

    return(
        <>
        <h1>Question:</h1>
        <p>
            Create a functional component that includes a counter value initialized to 0.
Add buttons to increment and decrement the counter.
Use useEffect to log the counter value to the console every time it changes.
Add a reset button to set the counter back to 0.
        </p>
        <hr/>

        <h2>Answer</h2>
        <h2>{count}</h2>
        <input type="number" placeholder="Enter Number" name="value" value={value} onChange={(e)=>setValue(e.target.value)} />
        <br/><br/>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default Counter;