import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        <div className="footer-brand fade-in-up">
          <h2 className="footer-logo">AURA</h2>
          <p className="footer-brief">
            Where culinary excellence meets architectural elegance. Experience fine dining at its absolute best.
          </p>
          <div className="social-links">
            <a href="#" className="social-btn"><Instagram size={20} /></a>
            <a href="#" className="social-btn"><Facebook size={20} /></a>
            <a href="#" className="social-btn"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-links fade-in-up delay-1">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reservations">Reservations</a></li>
          </ul>
        </div>

        <div className="footer-contact fade-in-up delay-2">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              123 Culinary Boulevard, Food District, NY 10001
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              +1 (555) 123-4567
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              reservations@aurarestaurant.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} AURA Restaurant. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--bg-darker);
          border-top: 1px solid #222;
          padding-top: 5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
          padding: 0 5%;
        }

        .footer-logo {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
        }

        .footer-brief {
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.8;
          max-width: 350px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          transition: var(--transition-smooth);
        }

        .social-btn:hover {
          background-color: var(--primary);
          color: var(--bg-darker);
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .footer-links h3, .footer-contact h3 {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .footer-links ul, .footer-contact ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-contact li {
          color: var(--text-muted);
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          line-height: 1.5;
        }

        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-bottom {
          border-top: 1px solid #222;
          padding: 2rem 5%;
        }

        .bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #666;
          font-size: 0.9rem;
        }

        .bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .bottom-links a {
          color: #666;
          transition: color 0.3s;
        }

        .bottom-links a:hover {
          color: var(--primary);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .bottom-flex {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
