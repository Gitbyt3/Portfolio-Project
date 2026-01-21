import React from 'react'

const ProjectPopUp = ({ station, onClose }) => {
  if (!station) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300" 
      onClick={onClose}
    >
      <div 
        className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl max-h-fit h-full max-w-fit w-full p-8 relative animate-in zoom-in duration-300 overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-10 bg-zinc-900/50 rounded-full p-1"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`w-16 h-1 mb-6 rounded-full ${station.colour}`} />

        {station.image && (
          <div className="mb-6 rounded-lg overflow-hidden border border-white/5 shadow-inner bg-zinc-800">
            <img 
              src={station.image} 
              alt={station.title} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-3xl font-bold text-white italic tracking-tight">
            {station.title || `Station ${station.id}`}
          </h2>

          {station.githubLink && (
            <a 
              href={station.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-zinc-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              title="View Source Code"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
        
        <div className="space-y-4 text-zinc-400 leading-relaxed font-mono text-sm">
          <div className="text-xl">
            <span className="text-xl font-extrabold text-white mb-2 tracking-tight">Objective: </span>
            {station.objective}
          </div>
          <p className="whitespace-pre-line">
            {station.description || "Project details and technical specifications will appear here."}
          </p>
        </div>

        <button className="mt-8 w-full py-3 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors uppercase tracking-widest text-xs" onClick={onClose}>
          Continue Exploration
        </button>
      </div>
    </div>
  )
}

export default ProjectPopUp