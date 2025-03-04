
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

// Duplicate projects for infinite carousel
const allProjects = [...projects, ...projects];

const ProjectCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      carouselRef.current?.scrollTo({
        left: (currentIndex - 1) * 320,
        behavior: 'smooth'
      });
    }
  };

  const scrollNext = () => {
    if (currentIndex < allProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
      carouselRef.current?.scrollTo({
        left: (currentIndex + 1) * 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="section-padding gradient-bg">
      <div 
        ref={sectionRef} 
        className="max-w-6xl mx-auto opacity-0"
        style={{ transform: 'translateY(20px)' }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-gradient">
          MY PORTFOLIO
        </h2>
        
        <div className="relative">
          <div 
            className="carousel-container relative overflow-hidden" 
          >
            <div 
              ref={carouselRef}
              className="flex gap-8 items-start px-4 animate-carousel-infinite"
              style={{ width: `${allProjects.length * 320}px` }}
            >
              {allProjects.map((project, index) => (
                <div 
                  key={`${project.id}-${index}`} 
                  className="w-[280px] flex-shrink-0 glass-morphism rounded-xl overflow-hidden"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-base hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-400 mb-1">{project.category}</p>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
