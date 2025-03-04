import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

const projects = [
  {
    id: 1,
    title: 'Alliance - football school',
    category: 'Web Design',
    image: 'images/alliance.png',
    link: 'https://www.behance.net/gallery/126826131/Alliance'
  },
  {
    id: 2,
    title: 'MójLekarz',
    category: 'Graduation project',
    image: 'images/lekarz.png',
    link: 'https://www.behance.net/gallery/209202601/Medical-website'
  },
  {
    id: 3,
    title: 'Yoga place',
    category: 'Mobile Design',
    image: 'images/yogaplace.png',
    link: 'https://www.behance.net/gallery/128155941/YOGA'
  },
  {
    id: 4,
    title: 'Pet.it - startup',
    category: 'UX Research & Design',
    image: 'images/petit.png',
    link: 'https://www.behance.net/gallery/218470669/Petit-logo'
  },
  {
    id: 5,
    title: 'Okto - Movies Online',
    category: 'Web Design',
    image: 'images/oktofill.png',
    link: 'https://www.behance.net/gallery/130743661/okto'
  },
  {
    id: 6,
    title: 'First site',
    category: 'Web Design',
    image: 'images/mybesite.png',
    link: 'https://www.behance.net/gallery/209206061/Personal-service-site'
  },
];

const Projects = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
      <div className="min-h-screen gradient-bg pt-24 pb-16">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gradient mb-16">
            MY PROJECTS
          </h1>

          <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
              style={{ transform: 'translateY(20px)' }}
          >
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className="glass-morphism rounded-xl overflow-hidden transition-base hover:transform hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-400 mb-2">{project.category}</p>
                    <h2 className="text-xl font-semibold text-white mb-3">{project.title}</h2>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-base flex items-center"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Projects;
