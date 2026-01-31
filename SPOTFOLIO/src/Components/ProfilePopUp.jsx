import React from 'react'

const ProfilePopUp = ({ intersectionData, onClose }) => {
    if (!intersectionData) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md font-[Verdana]" onClick={onClose}>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 relative w-fit max-w-[80%] max-h-[75%] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-3 right-3 z-10 text-zinc-500 hover:text-white">
                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* play around with these */}
                <div className="flex flex-col items-center gap-8 mb-8 border-b border-white/10 pb-8">
                    <div>
                        <img src={intersectionData.image} alt={intersectionData.name} className="w-40 h-40 rounded-full border-4" />
                    </div>

                    <div className="text-center flex-1">
                        <h2 className="text-4xl font-bold text-white">{intersectionData.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopUp