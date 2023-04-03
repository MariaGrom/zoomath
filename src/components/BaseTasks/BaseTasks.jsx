import React from 'react';
import { Link } from 'react-router-dom';
import './BaseTasks.css';

function BaseTasks() {
    return (
        <div className='BaseTasks'>
            <h3 className='BaseTasks-title'>навигационная строка(если нужно) типа: Алгебра/база вопросов/9класс</h3>
            <div className='BaseTasks-content'>
                <h4 className='BaseTasks-subtitle'>тема №1</h4>
                <ul className='BaseTasks-list'>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/card'> карточка №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/card'> карточка №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/card'> карточка №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/card'> карточка №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/card'> карточка №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/card'> карточка №1</Link></li>
                </ul>
            </div>

        </div>
    );
}

export default BaseTasks;