import { useState } from 'react'
import './App.css'
import CounterApp from './CounterApp'

function App() {

  return (
    <>
      <div className='d-flex bg-dark justify-content-center align-items-center' style={{height:"100vh"}}>
         <CounterApp/>
      </div>
    </>
  )
}

export default App
