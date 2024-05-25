import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#">Ақпарат</a>
          <a href="#">Әдебиет</a>
          <a href="#">Өнер</a>
          <a href="#">ғылым</a>
          <a href="#">Эксклюзив</a>
          <a href="#">Карьера</a>
          <a href="#">Спорт</a>
          <a href="#">Тарих</a>
        </div>
        <div className="footer-contact">
          <p>Байланыс үшін: magzhankz@gmail.com</p>
          <p>Барлық құқықтар сақталған @2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
