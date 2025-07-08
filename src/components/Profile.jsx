import profileImg from '../assets/profile.jpg';
import { FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { BasicBio } from './ProfileBio';
import clsx from 'clsx';

const Profile = ({ theme }) => {
  return (
    <section
      className={clsx(
        'relative text-center py-8 px-5 web2:bg-web2-primary overflow-hidden',
        theme === 'web2' && 'pt-10 pb-44'
      )}
    >
      {/* Clouds BG at bottom */}
      {theme === 'web2' && (
        <div
          className="absolute left-0 right-0 bottom-0 w-full h-24 clouds-bg pointer-events-none z-0"
          aria-hidden="true"
        ></div>
      )}

      <div
        className={clsx(
          'relative mx-auto z-10',
          theme !== 'web2' && 'mb-5 w-36 h-36'
        )}
      >
        {theme !== 'web2' && (
          <div
            className={clsx(
              'w-36 h-36 rounded-full overflow-hidden border-3 border-github-blue',
              'dark:border-dracula-purple',
              'matrix:border-matrix-glow',
              'web2:bg-web2-primary',
              'web2:border-web2-border'
            )}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        )}
      </div>
      {theme !== 'web2' && (
        <h1
          className={clsx(
            'font-heading font-semibold text-4xl mb-1',
            'text-github-text',
            'dark:text-dracula-foreground',
            'matrix:text-matrix-highlight matrix:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]',
            'web2:text-white',
            'csszen:text-csszen-text'
          )}
        >
          Luh Sprwhk
        </h1>
      )}
      {theme !== 'web2' && (
        <p
          className={clsx(
            'text-xl font-light mb-2',
            'text-github-blue',
            'dark:text-dracula-purple',
            'matrix:text-matrix-highlight',
            'web2:text-white',
            'csszen:text-csszen-green-dark'
          )}
        >
          Vapourware Dealer
        </p>
      )}
      {theme !== 'web2' && (
        <p
          className={clsx(
            'text-sm mb-4 opacity-80 flex justify-center items-center gap-1',
            'text-github-secondaryText',
            'dark:text-dracula-pink',
            'matrix:text-matrix-glow',
            'web2:text-web2-secondary'
          )}
        >
          <FaMapMarkerAlt /> Austin, TX
        </p>
      )}

      {/* Resume Download Button */}
      {theme !== 'web2' && (
        <div className="mb-6">
          <a
            href="/resume.pdf"
            download="LuhSprwhk_Resume.pdf"
            className={clsx(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300',
              'bg-github-blue text-white hover:bg-github-blue/90 hover:shadow-lg hover:-translate-y-1',
              'dark:bg-dracula-purple dark:hover:bg-dracula-purple/90',
              'matrix:bg-matrix-terminal matrix:text-matrix-highlight matrix:border matrix:border-matrix-glow matrix:hover:drop-shadow-[0_0_8px_theme(colors.matrix.glow)] matrix:hover:bg-matrix-glow matrix:hover:text-matrix-terminal',
              'csszen:bg-csszen-green-dark csszen:text-csszen-cream csszen:hover:bg-csszen-green-dark/90'
            )}
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </div>
      )}

      {/* Resume Download Button for Web2 Theme */}
      {theme === 'web2' && (
        <div className="mb-6 relative z-10">
          <a
            href="/resume.pdf"
            download="LuhSprwhk_Resume.pdf"
            className={clsx(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300',
              'bg-gradient-to-r from-web2-primary to-web2-secondary text-white border border-web2-border',
              'hover:from-web2-secondary hover:to-web2-primary hover:shadow-lg hover:-translate-y-1',
              'drop-shadow-web2-border'
            )}
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </div>
      )}

      <BasicBio theme={theme} />
    </section>
  );
};

export default Profile;
