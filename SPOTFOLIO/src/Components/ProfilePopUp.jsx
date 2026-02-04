import React from 'react'

const ProfilePopUp = ({ intersectionData, onClose }) => {
    if (!intersectionData) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md font-[Verdana]" onClick={onClose}>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 relative w-5xl max-h-[75%] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-3 right-3 z-10 text-zinc-500 hover:text-white transition-colors">
                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col gap-3 flex-1 text-center">
                    <div className="flex items-center justify-center">
                        <img src={intersectionData.image} alt={intersectionData.name} className="w-40 h-40 rounded-full border-4" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">{intersectionData.name}</h2>
                        <p className="text-zinc-400 text-lg">{intersectionData.title}</p>
                        <div className="flex items-center justify-center text-sm text-zinc-500 gap-6 mt-1">
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                {intersectionData.email}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                {intersectionData.phone}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <a href={intersectionData.linkedin} target="_blank" className="text-zinc-500 hover:text-white transition-transform hover:scale-110">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href={intersectionData.github} target="_blank" className="text-zinc-500 hover:text-white transition-transform hover:scale-110">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href={intersectionData.kaggle} target="_blank" className="text-zinc-500 hover:text-white transition-transform hover:scale-110">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="5" fill="currentColor" />
                                <path d="M17.25 19.5H14.25L10.5 13.5L7.5 16.5V19.5H4.5V4.5H7.5V12L13.5 4.5H16.5L11.25 11.25L17.25 19.5Z" fill="#18181b"/>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Qualifications</h3>
                    <ul className="grid gap-4">
                        {intersectionData.qualifications.map((qual, i) => (
                            <li key={i} className="group bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                <header>
                                    <h4 className="text-white font-bold text-lg">{qual.name}</h4>
                                    <p className="text-zinc-400 mt-1">{qual.university}</p>
                                </header>
                                <time className="text-xs font-bold text-zinc-300">{qual.period}</time>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Professional Experience</h3>
                    <ul className="grid gap-4">
                        {intersectionData.experiences.map((exp, i) => (
                            <li key={i} className="group bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col">
                                <div className="flex justify-between items-center">
                                    <header>
                                        <h4 className="text-white font-bold text-lg">{exp.title}</h4>
                                        <p className="text-zinc-300 mt-1">{exp.company}</p>
                                    </header>
                                    <time className="text-xs font-bold text-zinc-300">{exp.period}</time>
                                </div>
                                <p className="text-zinc-400 whitespace-pre-line mt-3">{exp.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {intersectionData.technologies.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm font-medium border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopUp