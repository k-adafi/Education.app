import { Fragment } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HeroSection from './Components/Hero-section/HeroSection'
import Company from './Components/Company-section/Company'
import AboutUs from './Components/About-us/AboutUs'
import Courses from './Components/Courses-section/Courses'
import ChooseUs from './Components/Choose-us/ChooseUs'
import Features from './Components/Feature-section/Features'
import FreeCourse from './Components/Free-course-section/FreeCourse'

function App() {


  return (

    <Fragment>

      <Header/>
      <HeroSection/>
      <Company/>
      <AboutUs/>
      <Courses/>
      <ChooseUs/>
      <Features/>
      <FreeCourse/>

    </Fragment>

  )
}

export default App
