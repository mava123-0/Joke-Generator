import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import {Route,Routes} from "react-router-dom";

function App(){
    return(
        <div>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;