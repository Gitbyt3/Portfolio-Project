import { useState } from 'react'
import './tailwind.css'
import Station from "./Components/Station"
import Intersection from "./Components/Intersection"

function App() {

  return (
    <svg viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet" className="w-screen h-screen">
      <path d="M -20 600 L 90 600 M 90 600 Q 100 590 110 580 
      
      
      
      
      
      
      
      
      // L 200 500 M 200 500 L 400 500 M 400 500 L 400 400 M 400 400 L 500 400" className="stroke-black stroke-4"/>
      <Station x="-20" y="600"/>
      <Station x="1100" y="500"/>
      <Station x="750" y="200"/>
      <Station x="600" y="700"/>
      <Station x="-50" y="100"/>
      <Intersection x="500" y="400"/>
    </svg>
  )
}

export default App
