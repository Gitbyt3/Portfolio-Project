import React from 'react'

const StationTracker = ({ stationsClicked, totalStations }) => {
    return (
      <div className="fixed bottom-8 right-8 bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 font-mono text-lg shadow-xl pointer-events-none">
        Stations Found: <span className="text-yellow-400">{stationsClicked}</span> / {totalStations}
      </div>
    )
}

export default StationTracker