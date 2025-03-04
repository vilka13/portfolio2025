import { useEffect, useRef } from 'react';
import { FileDown } from 'lucide-react';

const ResumeDownload = () => {
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf';  // Путь к резюме в public/resume/
    link.download = 'resume.pdf';  // Имя файла при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <section className="section-padding gradient-bg">
        <div
            ref={sectionRef}
            className="max-w-4xl mx-auto opacity-0 text-center"
            style={{ transform: 'translateY(20px)' }}
        >
          <div className="glass-morphism p-10 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
              Want to know more about my experience?
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Download my resume to see my full qualification, experience and skills
            </p>

            <button
                onClick={handleDownload}
                className="px-8 py-3 rounded-md group relative overflow-hidden border border-white/20 font-medium text-white inline-flex items-center gap-2"
            >
              <span className="relative z-10">Download Resume</span>
              <FileDown className="relative z-10" size={20} />
              <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-300"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 gradient-accent transition-opacity duration-500"></span>
            </button>
          </div>
        </div>
      </section>
  );
};

export default ResumeDownload;
