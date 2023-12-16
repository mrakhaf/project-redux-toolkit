import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menus from "./pages/Menus"
import Home from "./pages/Home"
import { Counter } from "./pages/Counter"

function App() {
 
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
