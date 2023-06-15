import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import  About  from "./components/About";
import NotesState from "./context/notes/NotesState";
import  Alert  from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Footer  from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(false)

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1000)
  }

  return (
    <>
      <NotesState>
        <Router>
          <NavBar showAlert={showAlert}/>
          {alert&&<Alert alert={alert}/>}
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
        
      </NotesState>
      <footer>
        <Footer/>
      </footer>
      

    </>
  );
}

export default App;
