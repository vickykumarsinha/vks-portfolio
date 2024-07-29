import './App.css'
import Contact from './components/JSX/Contact'
import Footer from './components/JSX/Footer'
import MainPage from './components/JSX/MainPage'
import NavBar from './components/JSX/NavBar'
import Projects from './components/JSX/Projects'
import Skills from './components/JSX/Skills'
import EC from './components/JSX/EC'
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


