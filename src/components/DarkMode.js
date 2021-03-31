import React, { useState } from "react";

export default function DarkMode(){
    const [darkMode, setDarkMode] = useState(false);
    return(
        <div className={`border ${darkMode?"":"darkMode"}`}>
            <h2>Dark Mode</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        impedit? Dolore laboriosam perspiciatis dignissimos tempora aspernatur
        ea placeat voluptas provident, debitis quae minus rem libero explicabo
        saepe impedit neque enim similique? Blanditiis sit ad sint dignissimos
        omnis, aperiam laboriosam assumenda beatae minima sed ab, nobis tenetur
        voluptates, alias consequuntur inventore perferendis vel eligendi saepe?
        Sunt, impedit at </p>
        <button onClick={() => setDarkMode(val => !val)}>{darkMode?"Back To Normal":"Dark Mode"}</button>
        </div>
    )
}