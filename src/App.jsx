import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import NotesState from "./context/notes/NotesState";
import  Alert  from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

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
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<SignUp/>} />
            </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
