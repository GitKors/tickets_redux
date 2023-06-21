import React from 'react';
import headerImage from '../../public/assets/fly.png';
import '../Styles/header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={headerImage} alt="Avia Tickets" />
      <h1 className='title'>Поиск авиабилетов</h1>
    </header>
  );
};

export default Header;
