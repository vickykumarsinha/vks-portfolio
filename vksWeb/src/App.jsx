import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import EC from './components/EC'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        < NavBar />
        < MainPage />
        < Skills />
        < Projects />
        < EC />
        < Contact />
        < Footer />
      </div>
    </BrowserRouter>
  )
}

export default App


