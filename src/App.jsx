import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RentalsList from './component/RentalsList/RentalsList'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import About from './component/About/About'
import PageNotFound from './component/PageNotFound/PageNotFound'
import RentalPage from './component/RentalPage/RentalPage'

function App() {

  return (
  <Router>
    <Header />
    <Routes>
        <Route path="/" element={<RentalsList />} /> 
        <Route path="/rental/:id" element={<RentalPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />}/>
    </Routes>
    <Footer />
  </Router>
  )
    
  
}

export default App
