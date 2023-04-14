import React from 'react';
import './ProfileModule.css';
import { Link } from 'react-router-dom';

function ProfileModule(props) {

    const { title, link } = props
    return (
        <div className='ProfileModule'>
            <div id='base' className='ProfileModule-header'>
                <h3>{title}</h3>
            </div>
            <h4 className='ProfileModule-subtitle'>Выбери класс</h4>
            <ul className='ProfileModule-list'>
                <li className='ProfileModule-class'>
                    <Link to={link} className='ProfileModule-link'>
                        
                        5 класс 
                        </Link></li>
                <li className='ProfileModule-class'><Link to={link} className='ProfileModule-link'>6 класс </Link></li>
                {/* <li className='ProfileModule-class'><Link to={link} className='ProfileModule-link'>7 класс </Link></li>
                <li className='ProfileModule-class'><Link to={link} className='ProfileModule-link'>8 класс </Link></li>
                <li className='ProfileModule-class'><Link to={link} className='ProfileModule-link'>9 класс </Link></li>
                <li className='ProfileModule-class'><Link to={link} className='ProfileModule-link'>10 класс </Link></li>
                <li className='ProfileModule-class'><Link to={link} className='ProfileModule-link'>11 класс </Link></li> */}
            </ul>
        </div>
    )
}

export default ProfileModule;