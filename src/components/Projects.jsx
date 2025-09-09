import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import sbBukowskisImg from '../assets/sb-bukowskis.jpg';
import hypehallImg from '../assets/hypehall-thumb.jpg';
import liveLaughDieImg from '../assets/LiveLaughDie-thumb.png';
import liveLaughDieWideImg from '../assets/LiveLaughDie-thumb-wide.png';
import rubberDuckTarotIMG from '../assets/RDTBanner.png';
import ClassicProjectsList from './ClassicProjectsList';
import { useContentful } from '../hooks/useContentful';
import { getProjects } from '../utils/contentful';
import DynamicIcon from './DynamicIcon';
import SectionHeading from './SectionHeading';

const ProjectCard = ({
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
        className={clsx(
          'w-full h-full transition-transform duration-500 hover:scale-110',
          img === liveLaughDieImg && 'object-contain object-bottom',
          img === hypehallImg && 'object-fill object-center',
          img === sbBukowskisImg && 'object-cover object-center',
          img === rubberDuckTarotIMG && 'object-cover object-center'
        )}
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

// Fallback projects for when Contentful is not available
const fallbackProjects = [
  {
    imgNormal: rubberDuckTarotIMG,
    alt: 'Rubber Duck Tarot',
    title: 'Rubber Duck Tarot',
    description:
      "Decision-making tool disguised as tarot cards, featuring a dead developer's ghost trapped in a rubber duck who helps creative people debug their mental blocks",
    link: 'https://rubberducktarot.com',
    order: 1,
    active: true,
  },
  {
    imgNormal: sbBukowskisImg,
    alt: 'Seagull Bukowskis',
    title: 'SQUAWK!: The Scavenger Diaries',
    description:
      'Nihilistic animals philosophize in Austin dumpsters - dark satire webcomic',
    link: 'https://gjc.beehiiv.com/subscribe',
    order: 2,
    active: true,
  },
  {
    imgNormal: hypehallImg,
    alt: 'HypeHall',
    title: 'HypeHall',
    description:
      'AI-powered app for discovering local bands through curated video feeds',
    link: 'https://hypehall.beehiiv.com/subscribe',
    order: 3,
    active: false,
  },
  {
    imgNormal: liveLaughDieImg,
    imgWide: liveLaughDieWideImg,
    alt: 'Live Laugh Die',
    title: 'Live Laugh Die',
    description:
      'Horror trivia game satirizing MLM culture and toxic positivity through deadly quiz show gameplay',
    link: 'https://liveLaughDie.beehiiv.com/subscribe',
    order: 4,
    active: true,
  },
];

const Projects = ({ theme }) => {
  const projectRefs = useRef([]);
  const { data: cmsProjects, loading, error } = useContentful(getProjects);

  // Use CMS data if available, otherwise fall back to static data
  const projects =
    cmsProjects && cmsProjects.length > 0 ? cmsProjects : fallbackProjects;

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

    const currentRefs = projectRefs.current;
    currentRefs.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      currentRefs.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  if (loading) {
    return (
      <section className="p-5 border-t border-github-lightGray dark:border-dracula-currentLine">
        <SectionHeading>Projects</SectionHeading>
        <div className="text-center py-8">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    console.warn('Contentful error, using fallback data:', error);
  }

  if (theme === 'web2' || theme === 'csszen') {
    return <ClassicProjectsList projects={projects} />;
  }

  // sort projects by order
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  const isOddLayout = sortedProjects.length % 2 !== 0;

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
      <SectionHeading>Projects</SectionHeading>
      <div
        className={clsx(
          'grid gap-6',
          isOddLayout ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
        )}
      >
        {sortedProjects
          .filter(projectItem => projectItem.active)
          .map((projectItem, idx) => {
            const imageSrc =
              isOddLayout && projectItem.imgWide
                ? projectItem.imgWide
                : projectItem.imgNormal;
            return (
              <ProjectCard
                key={projectItem.id || projectItem.title}
                img={imageSrc}
                alt={projectItem.alt}
                title={projectItem.title}
                description={projectItem.description}
                link={projectItem.link}
                icon={projectItem.icon}
                refCb={el => (projectRefs.current[idx] = el)}
                createRipple={createRipple}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Projects;
