
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
