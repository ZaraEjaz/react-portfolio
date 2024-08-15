
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import Intro from './Components/Introduction/Intro';
import Section1 from './Components/Section1/Section1';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
    <div className='container'>
      <CustomNavbar/>
    </div>
    <div className='container'>
      <Section1/>
    </div>
    <div className= 'container Introduction'>
      <Intro/>
    </div>
    <div className='Skills container'>
      <Skills/>
    </div>
    <div className='container'>
      <Projects/>
    </div>
    <Footer/>
    </>
  )
}

export default App