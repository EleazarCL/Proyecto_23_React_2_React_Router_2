import {Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import { Pokemones } from "./pages/Pokemones";
import Detalles from "./pages/Detalles";
import Home from "./components/Home";

function App() {

  return (
    <>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemones" element={<Pokemones/>} />
        <Route path="/pokemones/:name" element={<Detalles/>} />
    </Routes>
    </>
  )
}

export default App
