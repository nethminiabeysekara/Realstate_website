import React from 'react'
import Navbar from './components/Home/NavbarComponent';
import Hero from './components/Home/Hero';
import Featured from './components/featured/Featured';
import Properties from './components/Property/Properties';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <Featured />
     
      <Properties />
      <Footer />
    </div>
    </>
  )
}

export default App