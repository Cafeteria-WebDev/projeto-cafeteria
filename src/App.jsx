import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"

const App = () => {
  return (
    <Router>

      <div className="min-h-screen flex flex-col bg-background">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>

        <Footer />

      </div>

    </Router>
  )
}

export default App