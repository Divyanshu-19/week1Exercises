import { useState } from "react";
import React from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div className="border">
            <h2>Counter</h2>
            <button disabled={!count} onClick={() => setCount(count-1)}>-</button>
            {count}
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    );
}

export {Counter};