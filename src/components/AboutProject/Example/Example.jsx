import styles from './Example.module.scss';
import IconSliderLeft from '../../../img/slider_left.svg';
import IconSliderRight from '../../../img/slider_right.svg';
import IconStat from '../../../img/stat.svg';

function Example() {
    return (<section className={styles.example}>
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
    )
}

export default Example;