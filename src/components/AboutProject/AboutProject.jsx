import React from 'react';
import styles from './AboutProject.module.scss';
import QuestionBank from './RepresentativeCard/QuestionBank/QuestionBank';
import TheoreticalBase from './RepresentativeCard/TheoreticalBase/TheoreticalBase';
import TestPapers from './RepresentativeCard/TestPapers/TestPapers';
import IconArrow from '../../img/test_arrow.svg';
import IconSliderLeft from '../../img/slider_left.svg';
import IconSliderRight from '../../img/slider_right.svg';
import IconStat from '../../img/stat.svg';

function AboutProject() {
    return (
        <main className={styles.content}>
            <div className={styles.container}>
                <div className={styles.titles}>
                    <h1 className={styles.title}> Заголовок сайта</h1>
                    <h2 className={styles.subtitle}>Интересный текст - почему мы молодцы и какие хорошие.
                        Интнресный текст - почему мы молодцы.Интнресный текст - почему мы молодцы и какие хорошие.
                    </h2>
                </div>
                <div className={styles.cards}>
                    <div className={styles.cards__container}>
                        <QuestionBank />
                        <TheoreticalBase />
                        <TestPapers />
                    </div>
                </div>
            </div>
            <section className={styles.test}>
                <div className={styles.container}>
                    <div className={styles.test__container}>
                        <div className={styles.test__discription}>
                            <p className={styles.test__text}>Пройди тест и узнай,<br />насколько ты готов</p>
                            <img className={styles.test__arrow} src={IconArrow} alt='Тест' />
                        </div>
                        <button className={styles.test__btn}>
                            Узнать свой уровень
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.example}>
                <div className={styles.container}>
                    <div className={styles.example__discription}>
                        <h2>Заголовок описания функционала</h2>
                        <p>Проверь уровень своей подготовки, пройдя тест составленный на основании типовых задачах вступительных экзаменов</p>
                        <p>Проверь уровень своей подготовки, пройдя тест составленный на основании типовых задачах вступительных экзаменов</p>
                    </div>
                    <div className={styles.example__slider}>
                        <button className={styles.example__sliderLeft}><img src={IconSliderLeft} alt='SliderLeft' /></button>
                        <div className={styles.example__card}>
                            <button type='button' className={styles.example__bookmark}></button>
                            <button type='button' className={styles.example__done}></button>

                            <div className={styles.example__complexity}>
                                <p >middle</p>
                            </div>
                            <div className={styles.example__task}>
                                <p>Ленту длиной в 60м. разделили в отношении 2:3, а затем от меньшей части отрезали 0,4 её длины.
                                    Сколько процентов от всей длины ленты составляет длина меньшей из полученных частей?</p>
                                <div className={styles.example__statistics}>
                                    <div className={styles.example__statisticsLike}>
                                        <button type='button' className={styles.example__like}></button>
                                        <p>124</p>
                                    </div>
                                    <div className={styles.example__statisticsDecisions}>
                                        <div>
                                            <img src={IconStat} alt='statistics' />
                                            <p>67%</p>
                                        </div>
                                        <p>решили эту задачу</p>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.example__btns}>
                                <button type='button' className={styles.example__btn}>решение</button>
                                <button type='button' className={styles.example__btn}>видео</button>
                                <button type='button' className={styles.example__btn}>теория</button>
                            </div>
                        </div>
                        <button className={styles.example__sliderRight}><img src={IconSliderRight} alt='SliderRigth' /></button>
                    </div>

                </div>

            </section>



        </main>
    );
}

export default AboutProject;