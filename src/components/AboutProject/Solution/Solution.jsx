import styles from './Solution.module.scss';
import Video from '../Video/Video';
import IconArrowAnswer from '../../../img/arrow_answer.svg';
import IconArrowTheory from '../../../img/arrow_theory.svg';
import IconArrowVideo from '../../../img/arrow_video.svg';


function Solution() {
    return (
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
                        <Video />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution;