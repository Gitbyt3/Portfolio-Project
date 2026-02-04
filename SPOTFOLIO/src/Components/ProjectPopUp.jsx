import React from 'react'

const ProjectPopUp = ({ station, onClose }) => {
  if (!station) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md font-[Verdana]" onClick={onClose}>
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 relative w-fit max-w-[80%] max-h-[75%] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 text-zinc-500 hover:text-white transition">
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6 flex justify-center">
          <img src={station.image} alt={station.title} className="w-2xl max-h-[400px] object-contain" />
        </div>
        
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl font-bold text-white">{station.title}</h2>
          <a href={station.githubLink} target="_blank" className="text-zinc-500 hover:text-white transition-transform hover:scale-110 mr-4" title="GitHub Link">
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="text-zinc-400">
          <div className="text-xl">
            <span className="font-bold text-white">Objective: </span>
            {station.objective}
          </div>
          <p className="whitespace-pre-line">{station.description}</p>
        </div>

        <button className="mt-8 w-full block mx-auto py-4 bg-white text-black rounded-lg font-bold transition hover:bg-zinc-300 hover:scale-101 text-xs" onClick={onClose}>
          CONTINUE EXPLORATION
        </button>
      </div>
    </div>
  )
}

export default ProjectPopUp