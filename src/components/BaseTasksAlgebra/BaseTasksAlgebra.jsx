import React from 'react';
import { Link } from 'react-router-dom';
import './BaseTasksAlgebra.css';

function BaseTasksAlgebra() {
    return (
        <div className='BaseTasks'>
            <h3 className='BaseTasks-title'>навигационная строка(если нужно) типа: Алгебра/база вопросов/9класс</h3>
            <div className='BaseTasks-content'>
                <h4 className='BaseTasks-subtitle'>Раздел 1</h4>
                <ul className='BaseTasks-list'>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел </Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел</Link></li>
                </ul>
                <h4 className='BaseTasks-subtitle'>Раздел 2</h4>
                <ul className='BaseTasks-list'>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                </ul>
                <h4 className='BaseTasks-subtitle'>Раздел 3</h4>
                <ul className='BaseTasks-list'>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                    <li><Link className='BaseTasks-link BaseTasks-card' to='/algebra/base/card'> Подраздел №1</Link></li>
                </ul>
            </div>

        </div>
    );
}

export default BaseTasksAlgebra;