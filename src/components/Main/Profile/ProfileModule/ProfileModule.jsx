import React from 'react';
import './ProfileModule.css';
import { Link } from 'react-router-dom';

function ProfileModule(props) {

    const { title, link, discription } = props
    return (
        <div className='ProfileModule'>
            <div id='base' className='ProfileModule__header'>
               <h3 className='ProfileModule__title'>{title}</h3>
               <p>{discription}</p>
            </div>
            <h4 className='ProfileModule__subtitle'>Выбери класс</h4>
            <ul className='ProfileModule__list'>
                <li className='ProfileModule__class'><Link to={link} className='ProfileModule__link'>5 класс</Link></li>
                <li className='ProfileModule__class'><Link to={link} className='ProfileModule__link'>6 класс </Link></li>
            </ul>
        </div>
    )
}

export default ProfileModule;