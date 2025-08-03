import { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsVisible(scrollPosition < 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '+2348146637827';
  const whatsappMessage = 'Hi Coco! I found your website and would love to discuss your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:bg-[#128C7E]"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
