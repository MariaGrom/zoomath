import React from 'react';
import './Header.css';

function Header() {
    return (
        <section className='Header'>
            <div className='Header__content'>
           <div className='Header__logo'>Logo</div>
           <nav className='Header__navigation'>
            <ul className='Header__list'>
                <li><a className='Header__item' href='/zoomath'> Главная</a> </li>
                <li><a className='Header__item' href='#'>Не главная</a></li>
            </ul>
           </nav>
           <button>Войти</button>
           </div>
        </section>
    );
}

export default Header;