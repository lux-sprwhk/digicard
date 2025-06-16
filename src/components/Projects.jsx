import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import sbBukowskisImg from '../assets/sb-bukowskis.jpg';
import hypehallImg from '../assets/hypehall-thumb.jpg';
import ClassicProjectsList from './ClassicProjectsList';

const ProjectCard = ({
  img,
  alt,
  title,
  description,
  link,
  refCb,
  createRipple,
}) => (
  <div
    className={clsx(
      'rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      'bg-white dark:bg-dracula-currentLine',
      'web2:bg-web2-cardBg',
      'matrix:bg-matrix-terminal matrix:border-matrix-glow matrix:shadow-lg matrix:hover:shadow-matrix-glow'
    )}
    ref={refCb}
  >
    <div className="h-40 overflow-hidden">
      <img
        src={img}
        alt={alt}
        className={clsx(
          'w-full h-full transition-transform duration-500 hover:scale-110',
          img === hypehallImg ? 'object-fill' : 'object-cover'
        )}
      />
    </div>
    <h3
      className={clsx(
        'px-4 pt-4 pb-2 font-heading text-github-blue',
        'dark:text-dracula-purple',
        'web2:text-web2-secondary web2:font-web2Heading web2:text-web2-text',
        'font-bold',
        'matrix:text-matrix-highlight matrix:hover:text-matrix-glow matrix:hover:drop-shadow-[0_0_5px_theme(colors.matrix.glow)]'
      )}
    >
      {title}
    </h3>
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

const projects = [
  {
    img: sbBukowskisImg,
    alt: 'Seagull Bukowskis',
    title: 'SQUAWK!: The Scavenger Diaries',
    description:
      'Nihilistic animals philosophize in Austin dumpsters - dark satire webcomic',
    link: 'https://gjc.beehiiv.com/subscribe',
  },
  {
    img: hypehallImg,
    alt: 'HypeHall',
    title: 'HypeHall',
    description:
      'AI-powered app for discovering local bands through curated video feeds',
    link: 'https://hypehall.beehiiv.com/subscribe',
  },
];

const Projects = ({ theme }) => {
  const projectRefs = useRef([]);

  // Create ripple effect on project links
  const createRipple = event => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.querySelector('.ripple');
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  // Set up animations for project cards (currently inactive but mechanism preserved)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animation class addition disabled, but mechanism kept for future use
            // entry.target.classList.add('animate-bounce-once')
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      projectRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  if (theme === 'web2' || theme === 'csszen') {
    return <ClassicProjectsList projects={projects} />;
  }

  // Modern card layout for other themes
  return (
    <section
      className={clsx(
        'p-5',
        theme !== 'web2' && 'border-t',
        'border-github-lightGray',
        'dark:border-dracula-currentLine',
        'matrix:border-matrix-glow',
        'matrix:shadow-lg'
      )}
    >
      <h2 className={clsx('section-heading')}>Projects</h2>
      <div className={clsx('grid gap-6', 'grid-cols-1 md:grid-cols-2')}>
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            {...project}
            refCb={el => (projectRefs.current[idx] = el)}
            createRipple={createRipple}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
