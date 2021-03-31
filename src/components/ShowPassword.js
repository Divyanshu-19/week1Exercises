import { useState } from "react";
import React from "react";

const ShowPassword = () => {
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    return(
        <div className="border">
            <h2>Show Password</h2>
            <label>Password</label>
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <br />
            <button onClick={() => setShowPass(preval =>!preval)}>{showPass?"Hide Password":"Show Password"}</button>
            <br />
            {showPass?password:""}

        </div>
    );
}

export {ShowPassword};