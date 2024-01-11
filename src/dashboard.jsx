import { useState } from "react";

function DashBoard() {
    let [counter,setCounter] = useState(0);
    
    const addValue = ()=>{
        counter = counter+1;
        setCounter(counter);
    }

    return (
        <>
              <h1>Counter</h1>
              <label htmlFor="">{counter}</label><br/>
              <button onClick={addValue} type="button">Count</button>            
        </>

    )
}

export default DashBoard;