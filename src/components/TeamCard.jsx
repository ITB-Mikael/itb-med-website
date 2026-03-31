import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

function BioModal({ name, title, photo, bio, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Bio for ${name}`}
    >
      <div
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto animate-[fadeUp_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-navy-400 hover:text-navy-700 transition-colors z-10 cursor-pointer"
          aria-label="Close bio"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 md:p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={photo}
              alt={`${name}, ${title} at ITB-MED`}
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-navy-50"
            />
            <h3 className="font-serif text-2xl text-navy-900">{name}</h3>
            <p className="text-accent-600 font-medium mt-1">{title}</p>
          </div>
          <div className="text-navy-700 leading-relaxed space-y-4 text-base">
            {bio.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function TeamCard({ name, title, photo, bio }) {
  const [showBio, setShowBio] = useState(false)

  return (
    <>
      <button
        onClick={() => bio && setShowBio(true)}
        className={`group text-left w-full ${bio ? 'cursor-pointer' : 'cursor-default'}`}
        aria-label={bio ? `View bio for ${name}` : name}
      >
        <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-navy-100 mb-4">
          <img
            src={photo}
            alt={`${name}, ${title} at ITB-MED`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {bio && (
            <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-all duration-300 flex items-end justify-center pb-4">
              <span className="text-white text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy-950/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                View Bio
              </span>
            </div>
          )}
        </div>
        <h3 className="font-serif text-lg text-navy-900">{name}</h3>
        <p className="text-sm text-navy-500 mt-1 leading-relaxed">{title}</p>
      </button>

      {showBio && (
        <BioModal
          name={name}
          title={title}
          photo={photo}
          bio={bio}
          onClose={() => setShowBio(false)}
        />
      )}
    </>
  )
}
