import { useState, useEffect } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import profileImg from '../assets/profile.jpg'

const Profile = () => {
  const [typedText, setTypedText] = useState('')
  const bio = "Writer & coder making games, satire, and AI mischief."
  
  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < bio.length) {
        setTypedText(prevText => prevText + bio.charAt(i))
        i++
        setTimeout(typeWriter, 50)
      }
    }
    
    // Start typing animation after a short delay
    const timerId = setTimeout(typeWriter, 1000)
    
    return () => clearTimeout(timerId)
  }, [])

  return (
    <section className="text-center py-8 px-5">
      <div className="relative mx-auto mb-5 w-36 h-36">
        <div className="w-36 h-36 rounded-full overflow-hidden border-3 border-primary">
          {/* Placeholder for profile image */}
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <h1 className="font-heading font-semibold text-4xl mb-1 text-primary">Luh Sprwhk</h1>
      <p className="text-xl text-secondary font-light mb-2">Vapourware Dealer</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 opacity-80 flex justify-center items-center gap-1">
        <FaMapMarkerAlt /> Austin, TX
      </p>
      <p className="max-w-md mx-auto text-base">{typedText}</p>
    </section>
  )
}

export default Profile