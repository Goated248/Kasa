import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import PageNotFound from './Pages/404/404'
import Logement from './Pages/Logement/Logement'
import Info from './Pages/Info/Info'

function App() {

  return (
  <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/rental/:id" element={<Logement />} />
        <Route path="/about" element={<Info />} />
        <Route path="/404" element={<PageNotFound />}/>
        <Route path="*" element={<PageNotFound />}/>
    </Routes>
    <Footer />
  </Router>
  )
    
  
}

export default App
