
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import Projects from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  
    
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
         

        </Routes>
      </BrowserRouter>
    );
      
   
  
}

export default App
