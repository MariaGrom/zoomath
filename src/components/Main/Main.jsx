import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main className='Main'>


           <div className='Main__container'>
           <h1 className='Main__title'> Заголовок сайта</h1>
           <h2 className='Main__subtitle'>Интнресный текст - почему мы молодцы и какие хорошие.
           Интнресный текст - почему мы молодцы и какие хорошие.
           Интнресный текст - почему мы молодцы и какие хорошие.
           Интнресный текст - почему мы молодцы и какие хорошие.
           </h2>
           <div className='Main__content'>
           <Link to='/algebra' className='Main__link'>
            <div className='Main__profile'>Алгебра</div>
           </Link>
           <Link to='/geometry' className='Main__link'> 
            <div className='Main__profile'>Геометрия</div>
           </Link>
           </div>
           </div>

        </main>
    );
}

export default Main;