import React, { useState } from 'react';
import styles from './AboutProject.module.scss';
import QuestionBank from './RepresentativeCard/QuestionBank/QuestionBank';
import TheoreticalBase from './RepresentativeCard/TheoreticalBase/TheoreticalBase';
import TestPapers from './RepresentativeCard/TestPapers/TestPapers';
import Footer from '../Footer/Footer';
import IconArrow from '../../img/test_arrow.svg';
import IconSliderLeft from '../../img/slider_left.svg';
import IconSliderRight from '../../img/slider_right.svg';
import IconStat from '../../img/stat.svg';
import IconArrowAnswer from '../../img/arrow_answer.svg';
import IconArrowTheory from '../../img/arrow_theory.svg';
import IconArrowVideo from '../../img/arrow_video.svg';
import IconPlay from '../../img/icon_play.svg';

function AboutProject() {

    const [isShow, setIsShow] = useState(false);

    // function scrollToSection(id) {
    //     const element = document.getElementById(id);
    //     element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // };

    function scrollToSection() {


        window.scrollBy({
            top: 300,
            behavior: "smooth"
        });
    }

    function showAccordion() {
        console.log('click')
        setIsShow(true);
        scrollToSection();
    }
    return (
        <main className={styles.content}>
            <div className={styles.container}>
                <div className={styles.titles}>
                    <h1 className={styles.title}>Полезный ресур по подготовке к поступлению в лучшие лицеи</h1>
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
                        <div className={styles.test__pointer}>
                            <p className={styles.test__text}>Пройди тест и узнай,<br />насколько ты готов</p>
                            <img className={styles.test__arrow} src={IconArrow} alt='test' />
                        </div>
                        <button className={styles.test__btn} onClick={showAccordion}>
                            Узнать свой уровень
                        </button>
                    </div>
                </div>

                <div id="accordion" className={isShow ? styles.accordion : styles.accordionOff}>
                    <div className={styles.accordion__container}>
                        <div className={styles.accordion__class}>
                            <h2>8 класс</h2>
                            <h3> выбери уровень сложности</h3>
                            <ul className={styles.accordion__listLevels}>
                                <li>
                                    <div className={styles.accordion__level1}>
                                        <p>сложность</p>
                                        <h2>easy</h2>
                                        <p>всплывающий текст при наведении</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.accordion__level2}>
                                        <p>сложность</p>
                                        <h2>middle</h2>
                                        <p>всплывающий текст при наведении</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.accordion__level3}>
                                        <p>сложность</p>
                                        <h2>hard</h2>
                                        <p>всплывающий текст при наведении</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.accordion__class}>
                            <h2>10 класс</h2>
                            <h3> выбери уровень сложности</h3>
                            <ul className={styles.accordion__listLevels}>
                                <li>
                                    <div className={styles.accordion__level1}>
                                        <p>сложность</p>
                                        <h2>easy</h2>
                                        <p className={styles.sinopsis}>всплывающий текст при наведении</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.accordion__level2}>
                                        <p>сложность</p>
                                        <h2>middle</h2>
                                        <p>всплывающий текст при наведении</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.accordion__level3}>
                                        <p>сложность</p>
                                        <h2>hard</h2>
                                        <p>всплывающий текст при наведении</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <section className={styles.example}>
                <div className={styles.container}>

                    <div className={styles.example__discription}>
                        <h2>Практика отдельных тем и контрольные работы</h2>
                        <p> Тысячи вопросов в стиле отдельных заданий, отфильтрованных по теме, подтеме и сложности.
                            Вступительные контрольные работы прошлых лет.
                            Практикуйтесь и готовьтесь к поступлению в лучшие лицеи Москвы в удобном для вас графике!
                        </p>
                    </div>

                    <div className={styles.example__slider}>
                        <button className={styles.example__sliderLeft}><img src={IconSliderLeft} alt='sliderLeft' /></button>
                        <div className={styles.example__card}>
                            <button type='button' className={styles.example__bookmark}></button>
                            <button type='button' className={styles.example__done}></button>

                            <div className={styles.example__complexity}>
                                <p >middle</p>
                            </div>
                            <div className={styles.example__task}>
                                <p>Ленту длиной в 60 метров разделили в отношении 2:3, а затем от меньшей части отрезали 0,4 её длины.
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
                        <button className={styles.example__sliderRight}><img src={IconSliderRight} alt='sliderRigth' /></button>
                    </div>

                </div>

            </section>
            <section className={styles.solution}>
                <div className={styles.solution__container}>
                    <div className={styles.solution__text}>
                        <div className={styles.solution__substrateText}>
                            <div className={styles.solution__pointerText}>
                                <p className={styles.solution__arrowTitle}>Решения</p>
                                <img className={styles.solution__arrow} src={IconArrowAnswer} alt='answer' />
                            </div>
                            <p className={styles.solution__discription}>Подробные и понятные решения в текстовом формате, со всеми рассуждениями по ходу решения.</p>
                            <div className={styles.solution__img}></div>
                        </div>
                    </div>
                    <div className={styles.solution__theory}>
                        <div className={styles.solution__substrateTheory}>
                            <div className={styles.solution__pointerTheory}>
                                <p className={styles.solution__arrowTitle}>Теория</p>
                                <img className={styles.solution__arrow} src={IconArrowTheory} alt='theory' />
                            </div>
                            <p className={styles.solution__discription}>Вся необходимая теория, дающая ответы на все вопросы.</p>
                            <div className={styles.solution__img}></div>
                        </div>
                    </div>
                    <div className={styles.solution__video}>
                        <div className={styles.solution__substrateVideo}>
                            <div className={styles.solution__pointerVideo}>
                                <p className={styles.solution__arrowTitle}>Видео решения</p>
                                <img className={styles.solution__arrow} src={IconArrowVideo} alt='Video' />
                            </div>
                            <p className={styles.solution__discription}>Видео решения с тайм-кодом - можно промотать сразу до того места, где возникли сложности в решении.</p>
                            <div className={styles.video}>
                                <div className={styles.video__content}>
                                    <img src={IconPlay} />
                                </div>
                                <div className={styles.video__timeCode}>
                                    <ul>
                                        <li>2:45 - ntcn bkjhvhjk lsblhfvclhv bckvhfvg </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.news}>
                Блок с новостями
            </section>
            <section className={styles.statistic}>
                Блок со статистикой по продукивности сервиса
            </section>

            <Footer />

        </main>
    );
}

export default AboutProject;