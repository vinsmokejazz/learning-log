import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App(){
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
            <Route path="/" element={<Landing/>}/>
        </Routes>
        </BrowserRouter>
    </div>
}

function Landing() {
    return <div>
        Welcome to ALLEN
    </div>
}

function Class11Program(){
    return <div>
        Class 11
    </div>
}

function Class12Program(){
    return <div>
        Class 12
    </div>
}



export default App