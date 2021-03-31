import { useState } from "react";
import React from "react";

const DisableSubmit = () => {
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    return(
        <div className="border">
            <h2>Disable Submit</h2>
            <label>Password</label>
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <br /><br />
            <label>Retype Password</label>
            <input type="password" value={repassword} onChange={event => setRepassword(event.target.value)}/><br />
            {repassword!==""?(password!==repassword?"Password do not match":""):""}
            <br />
            <button disabled={password!==repassword}>Submit</button>
        </div>
    );
}

export {DisableSubmit};
