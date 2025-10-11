import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Footer from './Components/Footer.jsx'
import Intro from './Components/Intro.jsx'

export default function App(){
  return(
    <>
    <Header/>
     <Intro/>
    <Main/>
    <Footer/>
   
    
    </>
  )
}