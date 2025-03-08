import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/one'
import JokeGame from './components/Two'
import Counter from './components/Three'
import TaskList from './components/four'
import Creatingcrud from './components/five'

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
      <br/><br/>
      <hr/>
      <TaskList/>
      <br/><br/>
      <hr/>
      <Creatingcrud/>
    </>
  )
}

export default App
