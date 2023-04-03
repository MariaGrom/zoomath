import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className='Card'>
            <h3 className='Card-title'>навигационная строка(если нужно) типа: Алгебра/база вопросов/9класс/задания по теме №1</h3>
            <div className='Card-content'>
                <ul className='Card-selectorList'>
                    <li><button id='easy' type='button' className='Card-skill'>легкий</button></li>
                    <li><button id='normal' type='button' className='Card-skill'>средний</button></li>
                    <li><button id='hard' type='button' className='Card-skill'>сложный</button></li>
                    <li><button id='super' type='button' className='Card-skill'>олимпиадный</button></li>
                </ul>
                <div className='Card-Task'></div>
            </div>
        </div>
    );
}

export default Card;