
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Admin_panel from "./Components/Admin_panel";
import Loginform from "./Components/Loginform";
import Signupform from "./Components/Signupform";

function App() {

  return (
          
      <Router>
        <Navbar/>
      <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/login" element={<Loginform/>} />
      <Route path="/signup" element={<Signupform/>} />
      <Route path="/admin/*" element={<Admin_panel/>} />
    </Routes>
    </Router>
    
  )
}

export default App
