import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title fade-in-up">
          A Symphony of <br/> <span className="highlight">Flavors</span>
        </h1>
        <p className="hero-subtitle fade-in-up delay-1">
          Experience the finest culinary excellence in a modern, elegant atmosphere. We bring you a fusion of traditional techniques and contemporary aesthetics.
        </p>
        <div className="hero-buttons fade-in-up delay-2">
          <a href="#reservations" className="btn-primary text-[20px] font-extrabold">
            Book a Table <ArrowRight size={18} />
          </a>
          <a href="#menu" className="btn-secondary">
            Explore Menu
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 0 5%;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(5, 5, 5, 0.7) 0%,
            rgba(5, 5, 5, 0.9) 100%
          );
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin-top: 80px;
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          letter-spacing: -1px;
        }
        .highlight {
          color: var(--primary);
          font-style: italic;
          font-weight: 400;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
