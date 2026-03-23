import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const handleClick = () => {
    const defaultMessage = "Hi, I would like to know more about AURA Restaurant.";
    const url = `https://wa.me/919830518927?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <button 
        className="wa-float-btn" 
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} color="white" />
      </button>

      <style>{`
        .wa-float-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25d366;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .wa-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        @keyframes pulse-animation {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        .wa-float-btn {
          animation: pulse-animation 2s infinite;
        }

        @media (max-width: 768px) {
          .wa-float-btn {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppWidget;
