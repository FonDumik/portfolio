import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return(
      <header className='header'>
        <div className='header-wrapper'>
          <div className='logo'>
            <a href="#" className='logo-link'>Melody</a>
          </div>
          <nav className='navbar'>
            <ul className='navbar-list'>
              <li className='navbar-item'><a href="#" className='navbar-item-link navbar-item-link_active'>Подобрать <br />квартиру</a></li>
              <li className='navbar-item'><a href="#" className='navbar-item-link'>Забронировать <br />квартиру</a></li>
              <li className='navbar-item'><a href="#" className='navbar-item-link'>Ход <br />строительства</a></li>
              <li className='navbar-item'><a href="#" className='navbar-item-link'>Проектная <br />декларация</a></li>
            </ul>
          </nav>
          <div className='telephone'>
            <p>Закажите звонок: <br /><a href="tel:+78431234567" className='telephone-link'>8 (843) 123-45-67</a></p>
          </div>
        </div>
      </header>
    )
  }
}