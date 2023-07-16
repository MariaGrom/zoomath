import React, { useState } from 'react';
import styles from './Test.module.scss';
import IconArrow from '../../../img/test_arrow.svg';
import Accordion from '../Accordion/Accordion';

function Test() {
    const [isShow, setIsShow] = useState(false);

    // функция скролла экрана
    function scrollToSection() {
        window.scrollBy({
            top: 300,
            behavior: "smooth"
        });
    }
    // функция показа аккордиона
    function showAccordion() {
        console.log('click')
        setIsShow(true);
        scrollToSection();
    }

    return (
        <section className={styles.test}>
            <div className={styles.container}>
                <div className={styles.test__container}>
                    <div className={styles.test__pointer}>
                        <p className={styles.test__text}>Пройди тест и узнай,<br />насколько ты готов</p>
                        <img className={styles.test__arrow} src={IconArrow} alt='test' />
                    </div>
                    <button className={styles.test__btn} onClick={showAccordion}>
                        Узнать свой уровень
                    </button>
                </div>
            </div>
            <Accordion isShow={isShow} />
        </section>
    )
}
export default Test