
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

const skillsData = [
  { name: 'Figma', rating: 9 },
  { name: 'Illustrator', rating: 7 },
  { name: 'HTML', rating: 7 },
  { name: 'CSS', rating: 6 },
  { name: 'SKETCH', rating: 8 },
  { name: 'JIRA', rating: 9 },
  { name: 'Photoshop', rating: 3 }
];

const Skills = () => {
  const skillsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const skillBar = entry.target.querySelector('.skill-progress');
              if (skillBar) {
                skillBar.classList.add('animate-skill');
              }
            }, 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    skillsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Add animation class dynamically
  useEffect(() => {
    document.head.insertAdjacentHTML(
      'beforeend',
      `<style>
        .animate-skill {
          width: var(--skill-width) !important;
        }
      </style>`
    );
  }, []);

  return (
    <div className="min-h-screen gradient-bg pt-24 pb-16">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gradient mb-16">
          MY SKILLS
        </h1>

        <div className="glass-morphism rounded-xl p-8 md:p-12">
          <div className="space-y-10">
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                ref={(el) => (skillsRefs.current[index] = el)}
                className="animate-slide-up"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-medium text-white">{skill.name}</h3>
                  <span className="text-gray-400">{skill.rating}/10</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress w-0 gradient-static"
                    style={{
                      '--skill-width': `${skill.rating * 10}%`,
                    } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-2xl font-semibold text-gradient mb-6">Additional Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Responsive Design',
                'Animation',
                'Wireframing',
                'Prototyping',
                'User Testing',
                'Design Systems'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center transition-base hover:bg-white/10"
                >
                  <p className="text-white">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
