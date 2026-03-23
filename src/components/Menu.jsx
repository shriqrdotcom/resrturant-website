import { useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { ShoppingBag, X } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: 1,
    address: ''
  });

  const categories = ['All', ...menuCategories];

  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    setOrderModalOpen(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const { name, phone, quantity, address } = formData;
    
    const message = `*New Order:*\nName: ${name}\nPhone: ${phone}\nItem: ${selectedItem.name}\nQuantity: ${quantity}\nAddress: ${address}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919830518927?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setOrderModalOpen(false);
    setFormData({ name: '', phone: '', quantity: 1, address: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="menu" className="section-padding">
      <div className="container">
        <h2 className="section-title fade-in-up">Culinary Art</h2>
        <p className="section-subtitle fade-in-up delay-1">
          Explore our carefully curated menu, featuring a blend of classic recipes and innovative modern gastronomy.
        </p>

        <div className="category-tabs fade-in-up delay-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid fade-in-up delay-3">
          {filteredMenu.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-img-wrapper">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="menu-overlay">
                  <button className="btn-primary btn-icon" onClick={() => openModal(item)}>
                    <ShoppingBag size={18} /> Order Now
                  </button>
                </div>
              </div>
              <div className="menu-info">
                <div className="menu-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="menu-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {orderModalOpen && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content fade-in-up">
            <button className="close-btn" onClick={() => setOrderModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="modal-title">Order {selectedItem.name}</h3>
            <p className="modal-subtitle">Price: {selectedItem.price}</p>
            
            <form onSubmit={handleOrderSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="John Doe"
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
                  placeholder="+1 (555) 000-0000"
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Quantity</label>
                <input 
                  type="number" 
                  name="quantity" 
                  className="form-input" 
                  min="1"
                  required 
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Delivery Address</label>
                <textarea 
                  name="address" 
                  className="form-input" 
                  rows="3"
                  placeholder="123 Main St, Apt 4B"
                  required 
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center'}}>
                Place Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .category-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .tab-btn {
          background: transparent;
          border: 1px solid #333;
          color: var(--text-muted);
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .tab-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .tab-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--bg-darker);
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .menu-card {
          background-color: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .menu-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-soft);
          background-color: var(--bg-card-hover);
        }
        .menu-img-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        .menu-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .menu-card:hover .menu-img-wrapper img {
          transform: scale(1.05);
        }
        .menu-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .menu-card:hover .menu-overlay {
          opacity: 1;
        }
        .menu-info {
          padding: 1.5rem;
        }
        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.8rem;
          gap: 1rem;
        }
        .menu-header h3 {
          font-size: 1.25rem;
          margin: 0;
          color: var(--text-main);
          font-family: var(--font-serif);
        }
        .price {
          color: var(--primary);
          font-weight: 600;
          font-size: 1.1rem;
        }
        .menu-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-content {
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: 16px;
          width: 100%;
          max-width: 500px;
          position: relative;
          box-shadow: var(--shadow-soft);
          border: 1px solid #333;
        }
        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.3s;
        }
        .close-btn:hover {
          color: var(--primary);
        }
        .modal-title {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
          font-family: var(--font-serif);
        }
        .modal-subtitle {
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .menu-img-wrapper {
            height: 200px;
          }
          .modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;
