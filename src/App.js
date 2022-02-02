import React from "react"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/home/home";
import "../src/supports/styles/global.css"
import "aos/dist/aos.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
