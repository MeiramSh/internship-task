import React from 'react';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <a href="#">Ақпарат</a>
          <a href="#">Әдебиет</a>
          <a href="#">Өнер</a>
          <a href="#">ғылым</a>
          <a href="#">Эксклюзив</a>
          <a href="#">Карьера</a>
          <a href="#">Спорт</a>
          <a href="#">Тарих</a>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Іздеу..." />
          <button><i className="fas fa-search"></i></button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
