import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/about/dev' element={<About />}/>
        <Route path='/contact/dev' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
