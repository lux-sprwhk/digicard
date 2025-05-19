import profileImg from '../assets/profile.jpg'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BasicBio } from './ProfileBio';

const Profile = ({ theme }) => {
  return (
    <section className="relative text-center py-8 px-5 web2:bg-web2-primary overflow-hidden">
      {/* Clouds BG at bottom */}
      <div className="absolute left-0 right-0 bottom-0 w-full h-24 clouds-bg pointer-events-none z-0" aria-hidden="true"></div>

      <div className={`relative mx-auto z-10 ${theme !== 'web2' && 'mb-5 w-36 h-36'}`}>
        {theme !== 'web2' && (
        <div className="w-36 h-36 rounded-full
        overflow-hidden border-3 border-github-blue
        dark:border-dracula-purple matrix:border-matrix-glow
        web2:bg-web2-primary
        web2:border-web2-border">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        )}
      </div>
      {theme !== 'web2' && (
      <h1 className="font-heading font-semibold text-4xl mb-1
      text-github-text dark:text-dracula-foreground matrix:text-matrix-highlight matrix:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]
      web2:text-white">
        Luh Sprwhk
      </h1>
      )}
      {theme !== 'web2' && (
      <p className="text-xl text-github-blue
      dark:text-dracula-purple
      matrix:text-matrix-highlight
      web2:text-white
      font-light mb-2">Vapourware Dealer</p>
      )}
      {theme !== 'web2' && (
      <p className="text-sm text-github-secondaryText
      dark:text-dracula-pink
      matrix:text-matrix-glow
      web2:text-web2-secondary
      mb-4 opacity-80 flex justify-center items-center gap-1">
        <FaMapMarkerAlt /> Austin, TX
      </p>
      )}
      <BasicBio theme={theme} />
    </section>
  )
}

export default Profile