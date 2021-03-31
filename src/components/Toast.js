import { useState } from "react";
import React from "react";

function ShowToast(){
    return(
        <div style={{backgroundColor:"red", margin:"2em"}}>
            This is a toast message
        </div>
    )
}

const Toast = () => {
    const [toast, setToast] = useState(false);

    return(
        <div className="border">
            <h2>Toast</h2>
            <button onClick={() => setToast(value => !value)}>{toast?"Hide Toast":"Show Toast"}</button>
            {toast && <ShowToast />}
        </div>
    );
}

export {Toast};