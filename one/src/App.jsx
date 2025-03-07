import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/one'
import JokeGame from './components/Two'
import Counter from './components/Three'

function App() {

  return (
    <>
      <Navbar/>
      <br/><br/>
      <hr/>
      <JokeGame/>
      <br/><br/>
      <hr/>
      <Counter/>
    </>
  )
}

export default App
