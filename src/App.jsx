import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NotesState from "./context/notes/NotesState";
import  Alert  from "./components/Alert";

function App() {
  return (
    <>
      <NotesState>
        <Router>
          <NavBar />
          <Alert message="To Do"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
