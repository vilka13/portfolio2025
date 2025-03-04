
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'lukumer1997@gmail.com',
    link: 'mailto:lukumer1997@gmail.com'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'Poznań, Poland',
    link: null
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'Stanislaw Olszewski',
    link: 'https://www.linkedin.com/in/staols13/'
  }
];

const Contacts = () => {
  const contactsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    
    if (contactsRef.current) observer.observe(contactsRef.current);
    if (formRef.current) observer.observe(formRef.current);
    
    return () => {
      if (contactsRef.current) observer.unobserve(contactsRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      return;
    }
    
    setLoading(true);
    
    try {
      // Using EmailJS service to send emails without a backend
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'lukumer1997@gmail.com'
      };
      
      // Setting up EmailJS using the service
      await window.emailjs.send(
        'service_portfolio', // Create this service ID in EmailJS
        'template_contact', // Create this template ID in EmailJS
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your public key from EmailJS
      );
      
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-bg pt-24 pb-16">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-gradient mb-16">
          CONTACT ME
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            ref={contactsRef}
            className="glass-morphism rounded-xl p-8 opacity-0"
            style={{ transform: 'translateY(20px)' }}
          >
            <h2 className="text-2xl font-semibold text-gradient mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-white hover:text-gradient transition-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium text-white mb-4">Working Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Weekends: By appointment</p>
            </div>
          </div>
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-morphism rounded-xl p-8 opacity-0"
            style={{ transform: 'translateY(20px)', animationDelay: '0.2s' }}
          >
            <h2 className="text-2xl font-semibold text-gradient mb-8">Send Message</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" 
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full gradient-static py-3 rounded-lg font-medium text-white hover:opacity-90 transition-base disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
