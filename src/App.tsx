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
import Certifications from './Sections/Certifications/Certifications'
import { VertBox } from './Components/Box'

function App() {

  return (
    <div id='all-content'>
        <Navigation/>
        <Intro/>

        <VertBox tag='sections' id='gradient-strip'>

        </VertBox>

        <About/>
        <Certifications/>
        <Skills/>
        <Projects/>
        <WIWO/>
        <Contact/>   
    </div>
  )
}

export default App
