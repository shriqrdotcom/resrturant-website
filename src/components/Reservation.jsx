import { useState } from 'react';
import { CalendarDays } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: 2,
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const { name, phone, guests, date, time } = formData;
    
    const message = `*Table Reservation:*\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}\nDate: ${date}\nTime: ${time}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919830518927?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', guests: 2, date: '', time: '' });
  };

  return (
    <section id="reservations" className="section-padding">
      <div className="container">
        <div className="reservation-card fade-in-up">
          <div className="res-img">
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" 
              alt="Elegant Table Setup" 
              loading="lazy"
            />
          </div>
          
          <div className="res-form-wrapper">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Reserve Your Table</h2>
            <p className="res-subtitle">Join us for an unforgettable dining experience. We look forward to hosting you.</p>

            <form onSubmit={handleReservationSubmit} className="res-form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-input" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="form-input" 
                    placeholder="Your Phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Number of Guests</label>
                  <select 
                    name="guests" 
                    className="form-input" 
                    required
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1,2,3,4,5,6,7,8,"8+"].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    className="form-input" 
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    className="form-input" 
                    required
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
                <CalendarDays size={20} /> Book Table via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .reservation-card {
          display: flex;
          background: var(--bg-card);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          border: 1px solid #222;
        }

        .res-img {
          flex: 1;
          display: none;
        }

        .res-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .res-form-wrapper {
          flex: 1.2;
          padding: 4rem;
        }

        .res-subtitle {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        @media (min-width: 992px) {
          .res-img {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .res-form-wrapper {
            padding: 2.5rem 1.5rem;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Reservation;
