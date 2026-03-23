import { Utensils, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container about-container">
        <div className="about-img-grid fade-in-up">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" 
            alt="Restaurant Interior" 
            className="img-large"
            loading="lazy"
          />
          <img 
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&q=80&w=600" 
            alt="Chef Preparing Food" 
            className="img-small"
            loading="lazy"
          />
        </div>

        <div className="about-content fade-in-up delay-1">
          <h2 className="section-title" style={{ textAlign: 'left' }}>The Essence of AURA</h2>
          <p className="about-text">
            For over a decade, AURA has been redefining the dining landscape. 
            We believe that a meal is more than just nourishment; it is an experience, 
            a journey of flavors that tells a story of tradition, innovation, and passion.
          </p>
          <p className="about-text">
            Our award-winning chefs meticulously source the finest, freshest ingredients 
            to plate masterpieces that delight both the palate and the eye.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="icon-wrapper">
                <Utensils size={24} />
              </div>
              <div>
                <h4>Gourmet Dishes</h4>
                <p>Crafted with perfection</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <Award size={24} />
              </div>
              <div>
                <h4>Award Winning</h4>
                <p>Recognized excellence</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-wrapper">
                <Clock size={24} />
              </div>
              <div>
                <h4>Perfect Timing</h4>
                <p>Seamless service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-img-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .img-large {
          border-radius: 16px;
          grid-column: 1 / 3;
          box-shadow: var(--shadow-soft);
          transition: transform 0.5s ease;
        }

        .img-small {
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 50%;
          border-radius: 12px;
          border: 8px solid var(--bg-dark);
          box-shadow: var(--shadow-soft);
          transition: transform 0.5s ease;
        }

        .about-img-grid:hover .img-large {
          transform: scale(1.02);
        }

        .about-img-grid:hover .img-small {
          transform: scale(1.05);
        }

        .about-text {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .features {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .feature-item h4 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .feature-item p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 992px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-img-grid {
            max-width: 600px;
            margin: 0 auto 50px;
          }
        }

        @media (max-width: 576px) {
          .img-small {
            right: -20px;
            bottom: -20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
