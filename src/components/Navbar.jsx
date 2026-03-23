import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.4s ease',
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      padding: scrolled ? '15px 5%' : '25px 5%',
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.8rem',
      fontWeight: 700,
      color: 'var(--primary)',
      textDecoration: 'none',
      letterSpacing: '2px',
    },
    links: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none',
      }
    },
    link: {
      color: 'var(--text-main)',
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    mobileBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'var(--primary)',
      cursor: 'pointer',
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: 'var(--bg-darker)',
      display: mobileMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '2rem',
      zIndex: 999,
    },
    mobileLink: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2rem',
      color: 'var(--primary)',
      textDecoration: 'none',
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservations' }
  ];

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <a href="#home" style={styles.logo}>AURA</a>
          
          <div className="desktop-links" style={styles.links}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} style={styles.link} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(true)}
            style={{...styles.mobileBtn, display: 'block'}}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div style={styles.mobileMenu}>
        <button 
          onClick={() => setMobileMenuOpen(false)}
          style={{ position: 'absolute', top: '25px', right: '5%', background:'none', border:'none', color:'var(--primary)', cursor:'pointer'}}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            style={styles.mobileLink}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>

      <style>{`
        .nav-link:hover {
          color: var(--primary) !important;
        }
        @media (min-width: 769px) {
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-links {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
