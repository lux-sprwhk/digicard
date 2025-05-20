import clsx from 'clsx';

const ClassicProjectsList = ({ projects }) => (
  <section
    className={clsx(
      'p-6',
      'bg-web2-background',
      'border-t border-web2-border',
      'rounded-xl'
    )}
  >
    <h2 className={clsx(
      'web2:text-web2-primaryDark csszen:text-csszen-text',
      'text-2xl',
      'mb-6',
    )}>
      Featured Projects
    </h2>
    <div className={clsx('flex flex-col gap-8')}>
      {projects.map((project) => (
        <div
          key={project.title}
          className={clsx(
            'flex flex-row items-start gap-6',
            'pb-6 mb-4',
            'border-b border-web2-border',
            'last:border-b-0 last:mb-0 last:pb-0',
            'bg-white/70',
            'rounded-lg'
          )}
        >
          <img
            src={project.img}
            alt={project.alt}
            className={clsx(
              'w-32 h-32 object-cover rounded shadow-sm',
              'border border-web2-border',
              'mt-2 mb-2 ml-2'
            )}
            style={{ float: 'left' }}
          />
          <div className="flex-1">
            <h3 className={clsx(
              'text-xl',
              'web2:text-web2-primary csszen:text-csszen-text',
              'mb-1'
            )}>
              <a
                href={project.link}
                className={clsx('', 'underline', 'hover:text-web2-primary', 'transition-colors')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <p className={clsx('text-web2-text', 'mb-2')}>{project.description}</p>
            {/* Optionally add meta info here */}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClassicProjectsList;
