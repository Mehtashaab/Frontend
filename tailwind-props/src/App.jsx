import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  

  return (
    <>
      <h1 className='bg-red-400 text-green p-4 rounded-xl'>Hello World!</h1><br />
          <Card title="Noteworthy technology acquisitions 2021" description='Fiber reimplements the reconciler. It is not principally concerned with
           rendering, though renderers will need to change to support (and take advantage of) the new architecture.'/><br />
          <Card title="Need a help in Claim?"  description='This separation means that React DOM and
           React Native can use their own renderers while sharing the same reconciler, provided by React core.'/><br />
          

    </>
  )
}

export default App
