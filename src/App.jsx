//import React from 'react'
import './App.css'

//components
import Footer from './components/Footer'
import GlowingSearchBox from './components/project-list/GlowingSearchBox'
import NavBar from './components/NavBar'
import SocialMediaIcons from './components/project-list/SocialMediaIcons'
import DropDownMenu from './components/project-list/DropDownMenu'
import SimpleCalculator from './components/project-list/SimpleCalculator'
import LoginFrom from './components/project-list/LoginFrom'
import RegistrationForm from './components/project-list/RegistrationForm'

//pages

function App() {
  return <>
    <NavBar/>
    <GlowingSearchBox/>
    <SocialMediaIcons/>
    <DropDownMenu/>
    <SimpleCalculator/>
    <LoginFrom/>
    <RegistrationForm/>
    <Footer />
  </>
}
 
export default App
