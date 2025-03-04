
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="about" className="section-padding gradient-bg">
      <div 
        ref={sectionRef} 
        className="max-w-4xl mx-auto opacity-0"
        style={{ transform: 'translateY(20px)' }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-gradient">
          ABOUT ME
        </h2>
        
        <div className="glass-morphism p-8 rounded-2xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            My name is Stanislaw. I am a UX/UI designer. I am 27 years old. 
            I strive to create designs that not only look amazing, but also 
            communicate information effectively and are easy to use.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gradient">My tools</h3>
            <div className="flex flex-wrap gap-3">
              {['Figma', 'Illustrator', 'HTML', 'CSS', 'Sketch', 'Jira', 'Photoshop'].map((tool) => (
                <span 
                  key={tool}
                  className="bg-transparent px-4 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-transparent relative group transition-all duration-300"
                >
                  {tool}
                  <span className="absolute inset-0 rounded-full group-hover:opacity-100 opacity-0 border border-gradient-outline pointer-events-none"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
