import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import {useState} from "react";
//import Unit from "./Components/Unit";
//import {Fragment,useEffect} from "react";
import About from "./Components/About";
import Home from "./Components/Home";

const App=()=>{
return(
<BrowserRouter>
<Routes>
   <Route path = "/" element={<Home />} />
   <Route path = "/about" element={<About />} />
</Routes>
</BrowserRouter>
)
}


export default App;