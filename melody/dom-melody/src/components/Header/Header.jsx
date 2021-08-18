import React from 'react';
import './Header.css';

export default class Header extends React.Component {

  state = {
    header: {
      logoText: 'Melody',
      navbarList: [
        'Подобрать квартиру',
        'Забронировать квартиру',
        'Ход строительства',
        'Проектная декларация'],
      telephone: '8 (843) 123-45-67'
    }
  }

  render() {
    return(
      <header className='header'>
        <div className='header-wrapper'>
          <div className='logo'>
            <a href="#" className='logo-link'>{this.state.header.logoText}</a>
          </div>
          <nav className='navbar'>
            <ul className='navbar-list'>
              <li className='navbar-item'><a href="#" className='navbar-item-link navbar-item-link_active'>{this.state.header.navbarList[0]}</a></li>
              <li className='navbar-item'><a href="#" className='navbar-item-link'>{this.state.header.navbarList[1]}</a></li>
              <li className='navbar-item'><a href="#" className='navbar-item-link'>{this.state.header.navbarList[2]}</a></li>
              <li className='navbar-item'><a href="#" className='navbar-item-link'>{this.state.header.navbarList[3]}</a></li>
            </ul>
          </nav>
          <div className='telephone'>
            <p>Закажите звонок: <br /><a href="tel:+78431234567" className='telephone-link'>{this.state.header.telephone}</a></p>
          </div>
        </div>
      </header>
    )
  }
}