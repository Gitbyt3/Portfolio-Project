import { useState } from 'react'
import './tailwind.css'
import Station from "./Components/Station"
import Intersection from "./Components/Intersection"

function App() {

  return (
    <svg viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet" className="w-screen h-screen">
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
