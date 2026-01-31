import { useState, useEffect, useRef } from 'react'
import './tailwind.css'
import Station from "./Components/Station"
import Intersection from "./Components/Intersection"
import Line from "./Components/Line"
import ProjectPopUp from './Components/ProjectPopUp'
import ProfilePopUp from './Components/ProfilePopUp'
import StationTracker from './Components/StationTracker'
import RevealMap from './Components/RevealMap'
import { stations } from './Data/StationsData'
import { intersection } from './Data/IntersectionData'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clickedStations, setClickedStations] = useState(new Set())
  const [selectedStation, setSelectedStation] = useState(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const svgRef = useRef(null)
  const allFound = clickedStations.size == stations.length + 1
  const handleStationClick = (station) => {
    setClickedStations((prev) => new Set(prev).add(station.id))
    setSelectedStation(station)
    console.log(station.id)
  }
  const renderPopUp = () => {
    if (!selectedStation) return null
    else if (selectedStation == intersection) {return <ProfilePopUp intersectionData={selectedStation} onClose={() => setSelectedStation(null)} />}
    else {return <ProjectPopUp station={selectedStation} onClose={() => setSelectedStation(null)} />}
  }

  useEffect(() => {
    const updateMousePosition = (e) => {
      const svg = svgRef.current
      const point = svg.createSVGPoint()
      point.x = e.clientX
      point.y = e.clientY
      const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse())
      setMousePosition({ x: svgPoint.x, y: svgPoint.y })}
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

  return (
    <div>
      <svg ref={svgRef} viewBox="-250 0 1500 900" preserveAspectRatio="xMidYMid meet" className="w-screen h-screen">
        <defs>
          <mask id="flashlight-mask">
            <rect x="-500" y="-100" width="2000" height="1200" fill="white" />
            <circle cx={mousePosition.x} cy={mousePosition.y} r="150" fill="black" style={{ filter: 'blur(40px)' }} />
            {[...clickedStations].map(id => {
              const station = id == intersection.id ? intersection : stations.find(s => s.id == id)
              if (!station) return null
              return (
                <circle key={`light-${id}`} cx={station.x} cy={station.y} r="120" fill="black" style={{ filter: 'blur(30px)' }} />
              )
            })}
          </mask>
        </defs>
        <g>
          {stations.map(s => (
            <g key={s.id}>
              <Line route={s.route} colour={s.colour} />
              <Station x={s.x} y={s.y} colour={s.colour} onClick={() => handleStationClick(s)} />
            </g>  ))}
          <Intersection x={intersection.x} y={intersection.y} onClick={() => handleStationClick(intersection)} />
        </g>
        <rect x="-500" y="-100" width="2000" height="1200" fill="rgba(0,0,0,1)" mask="url(#flashlight-mask)" className="transition-opacity duration-1000 pointer-events-none" style={{ opacity: isRevealed ? 0 : 1 }} />
      </svg>

      {renderPopUp()}

      <StationTracker stationsClicked={clickedStations.size} totalStations={stations.length + 1} />
      <RevealMap allFound={allFound} isRevealed={isRevealed} setIsRevealed={setIsRevealed} />
    </div>
  )
}

export default App
