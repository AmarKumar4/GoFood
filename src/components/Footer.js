import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      position: 'relative',
      bottom: '0',
      width: '100%',
    },
    footerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    footerLinks: {
      listStyle: 'none',
      padding: '0',
      margin: '10px 0 0',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
    },
    footerLink: {
      color: '#ff9800',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p>&copy; {currentYear} YourCompany. All Rights Reserved.</p>
        <ul style={styles.footerLinks}>
          <li><a href="/about" style={styles.footerLink}>About Us</a></li>
          <li><a href="/privacy" style={styles.footerLink}>Privacy Policy</a></li>
          <li><a href="/terms" style={styles.footerLink}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.footerLink}>Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
