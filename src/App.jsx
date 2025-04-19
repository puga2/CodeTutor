
import './App.css'
import About from './components/About'
import CompanyLogo from './components/CompanyLogo'
import CustomerSection from './components/CustomerSection'
import DesignSection from './components/DesignSection'
import FeaturesSection from './components/FeaturesSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <Navbar/>
        <Hero />
        <CompanyLogo/>
        <FeaturesSection/>
        <DesignSection/>
        <CustomerSection/>
        <About/>
    </>
  )
}

export default App
