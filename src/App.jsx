import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import DefaultLayouts from "./layouts/DefaultLayouts"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayouts />} >
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
