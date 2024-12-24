import {ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import Gallery from "./pages/Gallery"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <ToastContainer/>
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
