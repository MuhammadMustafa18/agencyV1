import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Description from './components/description/Description'
import ProjectsSection from './components/projects/Projects'
import Services from './components/services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black font-primary">
      <Navbar />
      <div>
        
      </div>
      <Hero />
      <Description/>
      <ProjectsSection/>
      <Services/>
    </div>
  );
}

export default App
