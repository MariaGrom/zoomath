import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main className='Main'>

           <h1 className='Main-title'>главная</h1> 
           <h2 className='Main-subtitle'>Интнресный текст - почему мы молодцы и какие хорошие</h2>
           <div className='Main-contetnt'>
           <Link to='/algebra' className='Main-link'>
            <div className='Main-profile'>
                алгебра
                </div>
           </Link>
           <Link to='/geometry' className='Main-link'> 
            <div className='Main-profile'>геометрия</div>
           </Link>
           </div>

        </main>
    );
}

export default Main;