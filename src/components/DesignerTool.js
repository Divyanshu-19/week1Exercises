import { useState } from "react";
import React from "react";

const DesignerTool = () => {
    const [count, setCount] = useState(16);

    return(
        <div className="border">
            <h2>Designer Tool</h2>
            <button disabled={!count} onClick={() => setCount(count-8)}>-</button>
            {count} px
            <button onClick={() => setCount(count+8)}>+</button>
            <div style={{fontSize: `${count}px`}}>Sample text</div>
        </div>
    );
}

export {DesignerTool};