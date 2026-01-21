import React from 'react'

const RevealMap = ({ allFound, isRevealed, setIsRevealed }) => {
    if (!allFound) return null

    return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <button onClick={() => setIsRevealed(!isRevealed)}
                className={`
                px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
                ${isRevealed
                    ? 'bg-slate-800 text-white border border-white/20'
                    : 'bg-yellow-500 text-black'
                }
        `}>
        {isRevealed ? "HIDE MAP" : "REVEAL MAP"}
        </button> 
    </div>
    )
}

export default RevealMap