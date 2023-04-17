import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className='Footer'>
            <div className='Footer__content'>
            <nav className='Footer__navigation'>
                <ul className='Footer__list'>
                    <li><a className='Footer__item'>О нас</a></li>
                    <li><a className='Footer__item'>Контакты</a></li>
                    <li><a className='Footer__item'>Политика конфиденциальности </a></li>
                </ul>
            </nav>
            </div>
        </section>
    );
}

export default Footer;