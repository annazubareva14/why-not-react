import React from 'react';
import s from './header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img src='https://themified.com/friend-finder/images/logo.png' />
    </header>
  );
}

export default Header;
