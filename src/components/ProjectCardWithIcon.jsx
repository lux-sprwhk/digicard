import clsx from 'clsx';
import DynamicIcon from './DynamicIcon';

const ProjectCardWithIcon = ({
  img,
  alt,
  title,
  description,
  link,
  icon,
  refCb,
  createRipple,
}) => (
  <div
    className={clsx(
      'rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      'bg-white dark:bg-dracula-currentLine',
      'web2:bg-web2-cardBg',
      'matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:hover:shadow-matrix-glow',
      'flex flex-col min-h-[22rem]'
    )}
    ref={refCb}
  >
    <div className="h-40 overflow-hidden">
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="flex items-center gap-2 px-4 pt-4 pb-2">
      {icon && (
        <DynamicIcon
          iconName={icon}
          className={clsx(
            'text-github-blue',
            'dark:text-dracula-purple',
            'web2:text-web2-secondary',
            'matrix:text-matrix-highlight'
          )}
          size={20}
        />
      )}
      <h3
        className={clsx(
          'font-heading text-github-blue',
          'dark:text-dracula-purple',
          'web2:text-web2-secondary web2:font-web2Heading web2:text-web2-text',
          'font-bold',
          'matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]'
        )}
      >
        {title}
      </h3>
    </div>
    <p
      className={clsx(
        'px-4 pb-4 text-sm text-github-text',
        'dark:text-dracula-foreground',
        'web2:text-web2-text',
        'matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]'
      )}
    >
      {description}
    </p>
    <div className="flex-1" />
    <a
      href={link}
      className={clsx(
        'block text-center py-2 bg-github-blue text-white no-underline transition-colors hover:bg-github-lightBlue',
        'dark:bg-dracula-purple dark:hover:bg-dracula-pink',
        'web2:bg-web2-primary web2:text-white web2:hover:bg-web2-secondary web2:hover:bg-web2-success web2:border-web2-border web2:shadow-web2-border web2:drop-shadow-web2-border',
        'matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)] matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg',
        'relative overflow-hidden'
      )}
      onClick={createRipple}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </div>
);

export default ProjectCardWithIcon;
