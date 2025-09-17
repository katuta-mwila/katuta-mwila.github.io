import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ParticleBackground from './Components/ParticleBackground.tsx'


createRoot(document.getElementById('root')!).render(
    <>
      <ParticleBackground/>
      <App />
    </>
    
)
