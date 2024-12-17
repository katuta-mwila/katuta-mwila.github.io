import './App.css'
import Navigation from './Components/Navigation/Navigation'
import './output.css'
import About from './Sections/About/About'
import Intro from './Sections/Intro/Intro'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'

function App() {

  return (
    <>
      <Navigation/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
