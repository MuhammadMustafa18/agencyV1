import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Description from './components/description/Description'
import ProjectsSection from './components/projects/Projects'
import Services from './components/services/Services'
import Footer from './components/Footer/Footer'
import ServicesOverview from './components/services/ServicesOverview'
import Appointment from './components/appointment/Appointment'
import AppBox from "./components/appointment/AppBox";
import Services2 from './components/services/Services2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black font-primary">
      <Navbar />
      <div></div>
      <Hero />
      <Services2 />
      <ServicesOverview />

      <Description />
      <Services />
      <ProjectsSection />
      {/* <Appointment /> */}
      <AppBox />
      <Footer />
    </div>
  );
}

export default App
