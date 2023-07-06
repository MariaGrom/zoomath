import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import IconUser from '../../img/user-login.svg'

function Header() {
    return (
        <section className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>LOGO</div>
                <nav>
                    <ul className={styles.list}>
                        <li><a href='#'>Подписка</a></li>
                        <li><a href='#'>О лицеях</a></li>
                        <li><a href='#'>Отзывы</a></li>
                    </ul>
                </nav>
                <Link to='/signin' className={styles.btn_login}><img src={IconUser} alt='userLogin' className={styles.icon_user} />Войти</Link>
            </div>
        </section>
    );
}

export default Header;