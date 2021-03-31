import { useState } from "react";
import React from "react";

function isAlphaNumeric(text){
    text = text.toLowerCase();
    let flagchar = false;
    let flagnum = false;
    for(let i=0; i<text.length;i++){
        if(text.charCodeAt(i) >=97 && text.charCodeAt(i) <=122){
            flagchar = true;
        }
        if(text.charCodeAt(i) >=48 && text.charCodeAt(i) <=57){
            flagnum = true;
        }
    }
    return {flagchar, flagnum};
}

const Alphanumberic = () => {
    const [password, setPassword] = useState("");
    const {flagchar, flagnum} = isAlphaNumeric(password)
    return(
        <div className="border">
            <h2>Alphanumberic Password</h2>
            <label>Password</label>
            <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <br />
            {password!==""?(flagchar?"":"No Alphabet"):""}
            <br />
            {password!==""?(flagnum?"":"No number"):""}
        </div>
    );
}

export {Alphanumberic};