import { useState } from 'react'
import './tailwind.css'
import Station from "./Components/Station"
import Intersection from "./Components/Intersection"

function App() {

  return (
    <svg viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet" className="w-screen h-screen">
      <path d=" M -20 600 H 90 A 15 15 0 0 0 100 590 V 480 A 15 15 0 0 1 110 470 H 350 A 15 15 0 0 0 360 460 V 430 A 15 15 0 0 1 370 420 H 500" fill="none" className="stroke-black stroke-5"/>
      <Station x="-20" y="600"/>

      <path d=" M -50 100
                L -50 125
                M
                "
      className="stroke-black stroke-5"/>
      <Station x="1100" y="500"/>
      <Station x="750" y="200"/>
      <Station x="600" y="700"/>
      <Station x="-50" y="100"/>
      <Intersection x="500" y="400"/>
    </svg>
  )
}

export default App
