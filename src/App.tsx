import './App.css'
import Navigation from './Components/Navigation/Navigation'
import './output.css'
import './media.css'
import About from './Sections/About/About'
import Contact from './Sections/Contact/Contact'
import Intro from './Sections/Intro/Intro'
import Projects from './Sections/Projects/Projects'
import Skills from './Sections/Skills/Skills'
import WIWO from './Sections/WIWO/WIWO'

function App() {

  return (
    <>
      <Navigation/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <WIWO/>
      <Contact/>
    </>
  )
}

export default App
