import {ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import Gallery from "./pages/Gallery"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Event from "./pages/Events"

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
        <Route path="/About" element={<About/>} />
        <Route path="/Events" element={<Event/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
