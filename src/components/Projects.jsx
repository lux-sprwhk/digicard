import { useRef, useEffect } from 'react'
import sbBukowskisImg from '../assets/sb-bukowskis.jpeg'
import hypehallImg from '../assets/hypehall-thumb.jpg'

const Projects = () => {
  const projectRefs = useRef([])
  
  // Create ripple effect on project links
  const createRipple = (event) => {
    const button = event.currentTarget
    
    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add('ripple')
    
    const ripple = button.querySelector('.ripple')
    if (ripple) {
      ripple.remove()
    }
    
    button.appendChild(circle)
  }
  
  // Set up animations for project cards (currently inactive but mechanism preserved)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation class addition disabled, but mechanism kept for future use
            // entry.target.classList.add('animate-bounce-once')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    projectRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })
    
    return () => {
      projectRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section className="p-5 border-t border-github-lightGray dark:border-dracula-currentLine">
      <h2 className="section-heading">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          className="bg-white dark:bg-dracula-currentLine rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          ref={(el) => (projectRefs.current[0] = el)}
        >
          <div className="h-40 overflow-hidden">
            <img 
              src={sbBukowskisImg} 
              alt="Seagull Bukowskis" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="px-4 pt-4 pb-2 font-heading text-github-blue dark:text-dracula-purple">Seagull Bukowskis</h3>
          <p className="px-4 pb-4 text-sm text-github-text dark:text-dracula-foreground">
            Nihilistic animals philosophize in Austin dumpsters - dark satire webcomic
          </p>
          <a 
            href="#" 
            className="block text-center py-2 bg-github-blue text-white no-underline transition-colors hover:bg-github-lightBlue dark:bg-dracula-purple dark:hover:bg-dracula-pink relative overflow-hidden"
            onClick={createRipple}
          >
            View Project
          </a>
        </div>
        
        <div 
          className="bg-white dark:bg-dracula-currentLine rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          ref={(el) => (projectRefs.current[1] = el)}
        >
          <div className="h-40 overflow-hidden">
            <img 
              src={hypehallImg} 
              alt="HypeHall" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="px-4 pt-4 pb-2 font-heading text-github-blue dark:text-dracula-purple">HypeHall</h3>
          <p className="px-4 pb-4 text-sm text-github-text dark:text-dracula-foreground">
            AI-powered app for discovering local bands through curated video feeds  
          </p>
          <a 
            href="#" 
            className="block text-center py-2 bg-github-blue text-white no-underline transition-colors hover:bg-github-lightBlue dark:bg-dracula-purple dark:hover:bg-dracula-pink relative overflow-hidden"
            onClick={createRipple}
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects