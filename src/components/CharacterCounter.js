import { useState } from "react";
import React from "react";

const CharaterCounter = () => {
    const [textvalue, setTextValue] = useState("");
    const maxValue = 120;

    return(
        <div className="border">
            <h2>Character Counter</h2>
            <input value={textvalue} onChange={event => setTextValue(event.target.value)}/>
            <div>{maxValue - textvalue.length} character left</div>
        </div>
    );
}

export {CharaterCounter};