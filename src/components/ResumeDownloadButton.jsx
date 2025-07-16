import clsx from 'clsx';
import DynamicIcon from './DynamicIcon';

const ResumeDownloadButton = ({ theme, small = false, className = '' }) => {
  // Use smaller padding/text if small is true
  const baseClasses = small ? 'px-3 py-2 text-sm' : 'px-6 py-3';

  return (
    <>
      {/* Resume Download Button */}
      {theme !== 'web2' && (
        <div className={clsx('mb-4 flex justify-end', className)}>
          <a
            href="https://docs.google.com/document/d/1YV0Iw6g-_qz1tz5XAcCdkxflUKjrp-7UYz0B6d8lS7Y/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-300',
              baseClasses,
              'bg-github-blue text-white hover:bg-github-blue/90 hover:shadow-lg hover:-translate-y-1',
              'dark:bg-dracula-purple dark:hover:bg-dracula-purple/90',
              'matrix:bg-matrix-terminal matrix:text-matrix-highlight matrix:border matrix:border-matrix-glow matrix:hover:drop-shadow-[0_0_8px_theme(colors.matrix.glow)] matrix:hover:bg-matrix-glow matrix:hover:text-matrix-terminal',
              'csszen:bg-csszen-green-dark csszen:text-csszen-cream csszen:hover:bg-csszen-green-dark/90'
            )}
          >
            <DynamicIcon iconName="FaDownload" className="text-xs" />
            View Resume
          </a>
        </div>
      )}

      {/* Resume Download Button for Web2 Theme */}
      {theme === 'web2' && (
        <div className={clsx('mb-4 relative z-10', className)}>
          <a
            href="/resume.pdf"
            download="LuhSprwhk_Resume.pdf"
            className={clsx(
              'inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-300',
              baseClasses,
              'bg-gradient-to-r from-web2-primary to-web2-secondary text-white border border-web2-border',
              'hover:from-web2-secondary hover:to-web2-primary hover:shadow-lg hover:-translate-y-1',
              'drop-shadow-web2-border'
            )}
          >
            <DynamicIcon iconName="FaDownload" className="text-xs" />
            Download Resume
          </a>
        </div>
      )}
    </>
  );
};

export default ResumeDownloadButton;
