
import { useEffect, useRef } from 'react';

const valueItems = [
  { name: 'Innovation', description: 'Creating new and effective design solutions' },
  { name: 'Cooperation', description: 'Working effectively with teams and clients' },
  { name: 'Precision', description: 'Attention to detail in every project' },
  { name: 'Impact', description: 'Creating designs that make a difference' },
  { name: 'Integrity', description: 'Honest and ethical design practices' }
];

const skillItems = [
  'Branding and visualisation development',
  'Design of mobile versions',
  'User interface for websites and applications',
  'Basic graphics'
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section id="experience" className="section-padding gradient-bg">
      <div 
        ref={sectionRef} 
        className="max-w-6xl mx-auto opacity-0"
        style={{ transform: 'translateY(20px)' }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-gradient">
          EXPERIENCE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            ref={valuesRef} 
            className="glass-morphism p-8 rounded-2xl opacity-0"
            style={{ transform: 'translateY(20px)', animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gradient">Core Values</h3>
            
            <div className="space-y-6">
              {valueItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full gradient-static mt-2"></div>
                  <div>
                    <h4 className="text-xl font-medium text-white">{item.name}</h4>
                    <p className="text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            ref={skillsRef} 
            className="glass-morphism p-8 rounded-2xl opacity-0"
            style={{ transform: 'translateY(20px)', animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gradient">Design Skills</h3>
            
            <div className="space-y-6">
              {skillItems.map((skill, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full gradient-static mt-2"></div>
                  <p className="text-lg text-white">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
