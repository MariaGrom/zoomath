import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__info}>
                    <div className={styles.logo}>LOGO</div>
                    <p className={styles.footer__copyright}>&copy; Zoomath 2023</p>
                    <p className={styles.footer__text}>
                        Мелким текстом о том, что весь контент на этом веб-сайте был разработан независимо от лицеев и не одобрен им. Сайт разработан исключительно в доп. образовательных целях.
                    </p>
                </div>
                <nav className={styles.footer__navigation}>
                    <ul className={styles.footer__list}>
                        <li><a className={styles.footer__link} href="#">Отзывы</a></li>
                        <li><a className={styles.footer__link} href="#">Обратная связь</a></li>
                        <li><a className={styles.footer__link} href="#">Политика конфиденциальности </a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Footer;