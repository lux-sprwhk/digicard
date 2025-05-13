import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.jpg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import TypewriterBio from './TypewriterBio';

const Profile = ({ theme }) => {
  return (
    <section className="text-center py-8 px-5">
      <div className="relative mx-auto mb-5 w-36 h-36">
        <div className="w-36 h-36 rounded-full overflow-hidden border-3 border-github-blue dark:border-dracula-purple matrix:border-matrix-glow">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <h1 className="font-heading font-semibold text-4xl mb-1 text-github-text dark:text-dracula-foreground matrix:text-matrix-highlight matrix:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]">Luh Sprwhk</h1>
      <p className="text-xl text-github-blue dark:text-dracula-purple matrix:text-matrix-highlight font-light mb-2">Vapourware Dealer</p>
      <p className="text-sm text-github-secondaryText dark:text-dracula-pink matrix:text-matrix-glow mb-4 opacity-80 flex justify-center items-center gap-1">
        <FaMapMarkerAlt /> Austin, TX
      </p>
      <TypewriterBio theme={theme} />
    </section>
  )
}

export default Profile