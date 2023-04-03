import React from 'react';
import './ProfileAlgebra.css';
import { Link } from 'react-router-dom';

function ProfileAlgebra() {
    return (
        <div className='ProfileAlgebra'>
            <h2 className='ProfileAlgebra-title'>ProfileAlgebra</h2>
            <div className='ProfileAlgebra-content'>
                <div className='ProfileAlgebra-module'>
                    <div id='base' className='ProfileAlgebra-header'>
                       <h3>База вопросов</h3>
                    </div>
                    <h4 className='ProfileAlgebra-subtitle'>Выбери класс</h4>
                    <ul className='ProfileAlgebra-list'>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>5 класс</Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>6 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>7 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>8 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>9 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>10 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/basetasks' className='ProfileAlgebra-link'>11 класс </Link></li>
                    </ul>
                </div>
                <div className='ProfileAlgebra-module'>
                    <div id='theory' className='ProfileAlgebra-header'>
                      <h3>Теория</h3>
                    </div>
                    <h4 className='ProfileAlgebra-subtitle'>Выбери класс</h4>
                    <ul className='ProfileAlgebra-list'>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>5 класс</Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>6 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>7 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>8 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>9 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>10 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>11 класс </Link></li>
                    </ul>
                </div>
                <div className='ProfileAlgebra-module'>
                    <div id='test' className='ProfileAlgebra-header'>
                    <h3>Контрольные работы</h3>
                    </div>
                    <h4 className='ProfileAlgebra-subtitle'>Выбери класс</h4>
                    <ul className='ProfileAlgebra-list'>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>5 класс</Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>6 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>7 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>8 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>9 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>10 класс </Link></li>
                        <li className='ProfileAlgebra-class'><Link to='/' className='ProfileAlgebra-link'>11 класс </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileAlgebra;