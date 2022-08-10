import React from "react";
export default function NavBar(){
    return <nav className="nav">
    <ul>
        <li>
            <a href="./Home"><h3>Home</h3></a>
        </li>
        <li>
            <a href="./About"><h3>About</h3></a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/mava123-0"><h3><i class="fa-brands fa-github"></i></h3></a>
        </li>
    </ul>
    </nav>
}