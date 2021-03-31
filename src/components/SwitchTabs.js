import { useState } from "react";
import React from "react";


function Home(){
    return(
        <div>
            <h2>Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        impedit? Dolore laboriosam perspiciatis dignissimos tempora aspernatur
        ea placeat voluptas provident, debitis quae minus rem libero explicabo
        saepe impedit neque enim similique? Blanditiis sit ad sint dignissimos
        omnis, aperiam laboriosam assumenda beatae minima sed ab, nobis tenetur
        voluptates, alias consequuntur inventore perferendis vel eligendi saepe?
        Sunt, impedit at dignissimos eligendi debitis eveniet dolorem,
        exercitationem quam reprehenderit fugiat ipsam deserunt odio quidem
        officiis. Quaerat odio nostrum perferendis aliquid iste libero dolor
        repudiandae necessitatibus reprehenderit fugit dolorem vitae, beatae
        explicabo, asperiores quo omnis amet, officia facilis. Ducimus ad et
        quisquam possimus beatae ea, nobis maiores quos, non totam hic, quam
        vero sunt voluptates aliquam iste maxime impedit consequuntur rem
        sapiente. Sapiente, porro esse.</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        impedit? Dolore laboriosam perspiciatis dignissimos tempora aspernatur
        ea placeat voluptas provident, debitis quae minus rem libero explicabo
        saepe impedit neque enim similique? Blanditiis sit ad sint dignissimos
        omnis, aperiam laboriosam assumenda beatae minima sed ab, nobis tenetur
        voluptates, alias consequuntur inventore perferendis vel eligendi saepe?
        Sunt, impedit at dignissimos eligendi debitis eveniet dolorem,
        exercitationem quam reprehenderit fugiat ipsam deserunt odio quidem
        officiis. Quaerat odio nostrum perferendis aliquid iste libero dolor
        repudiandae necessitatibus reprehenderit fugit dolorem vitae, beatae
        explicabo, asperiores quo omnis amet, officia facilis. Ducimus ad et
        quisquam possimus beatae ea, nobis maimpedit consequuntur rem
        sapiente. Sapiente, porro esse.</p>
        </div>
    )
}

function Profile(){
    return(
        <div>
            <h2>Profile</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        impedit? Dolore laboriosam perspiciatis dignissimos tempora aspernatur
        ea placeat voluptas provident, debitis quae minus rem libero explicabo
        saepe impedit neque enim similique? Blanditiis sit ad sint dignissimos
        omnis, aperiam laboriosam assumenda beatae minima sed ab, nobis tenetur
        voluptates, alias consequuntur inventore perferendis vel elig
        sapiente. Sapiente, porro esse.</p>
        </div>
    )
}

const SwitchTabs = () => {
    const [route, setRoute] = useState("");

    return(
        <div className="border">
            <h2>SwitchTabs</h2>
            <button onClick={() => setRoute("home")}>home</button>
            <button onClick={() => setRoute("about")}>about</button>
            <button onClick={() => setRoute("profile")}>profile</button>
            {route==="home" && <Home />}
            {route==="about" && <About />}
            {route==="profile" && <Profile />}
            
        </div>
    );
}

export {SwitchTabs};