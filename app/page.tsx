import React from 'react'
import Header from './components/Header'
import Homeface from './components/Homeface'
import Socials from './components/Socials'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
    <Socials/>
    <Header/>
    <Homeface/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
  </>
      )
}
