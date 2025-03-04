
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.classList.add('animate-fade-in');
      nameRef.current.style.opacity = '0';
      nameRef.current.style.animationDelay = '0.3s';
    }
    
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
      titleRef.current.style.opacity = '0';
      titleRef.current.style.animationDelay = '0.8s';
    }
  }, []);

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <section className="min-h-screen w-full gradient-bg flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 mb-4 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Welcome to my portfolio
        </p>
        
        <h1 ref={nameRef} className="text-5xl md:text-7xl font-display font-bold mb-6">
          Hi, my name is <span className="text-gradient">Stanisław Olszewski</span>
        </h1>
        
        <p ref={titleRef} className="text-2xl md:text-3xl text-gray-300 font-light">
          I'm a <span className="text-gradient font-medium">UX/UI Designer</span>
        </p>
        
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <button 
            className="px-8 py-3 rounded-md group relative overflow-hidden border border-white/20 font-medium text-white"
            onClick={handleViewWork}
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 gradient-accent transition-opacity duration-500"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
