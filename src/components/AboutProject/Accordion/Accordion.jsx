import styles from './Accordion.module.scss';
import IconCubeEasy from '../../../img/cube-easy.svg';
import IconCubeMiddle from '../../../img/cube-middle.svg';
import IconCubeHard from '../../../img/cube-hard.svg';
import CardOfLevel from '../CardOfLevel/CardOfLevel';

function Accordion({ isShow }) {
    return (
        <div className={isShow ? styles.accordion : styles.accordionOff}>
            <div className={styles.accordion__container}>
                <div className={styles.accordion__class}>
                    <h2>8 класс</h2>
                    <h3> выбери уровень сложности</h3>
                    <ul className={styles.accordion__listLevels}>
                        <CardOfLevel
                            styleCard={styles.accordion__level1}
                            styleSinopsis={styles.sinopsis}
                            title='easy'
                            description='всплывающий текст при наведении'
                            icon={IconCubeEasy}
                            alt='cubeEasy' />

                        <CardOfLevel
                            styleCard={styles.accordion__level2}
                            styleSinopsis={styles.sinopsis}
                            title='middle'
                            description='всплывающий текст при наведении'
                            icon={IconCubeMiddle}
                            alt='cubeMiddle' />

                        <CardOfLevel
                            styleCard={styles.accordion__level3}
                            styleSinopsis={styles.sinopsis}
                            title='hard'
                            description='всплывающий текст при наведении'
                            icon={IconCubeHard}
                            alt='cubeHard' />
                    </ul>
                </div>
                <div className={styles.accordion__class}>
                    <h2>10 класс</h2>
                    <h3> выбери уровень сложности</h3>
                    <ul className={styles.accordion__listLevels}>
                        <CardOfLevel
                            styleCard={styles.accordion__level1}
                            styleSinopsis={styles.sinopsis}
                            title='easy'
                            description='всплывающий текст при наведении'
                            icon={IconCubeEasy}
                            alt='cubeEasy' />

                        <CardOfLevel
                            styleCard={styles.accordion__level2}
                            styleSinopsis={styles.sinopsis}
                            title='middle'
                            description='всплывающий текст при наведении'
                            icon={IconCubeMiddle}
                            alt='cubeMiddle' />

                        <CardOfLevel
                            styleCard={styles.accordion__level3}
                            styleSinopsis={styles.sinopsis}
                            title='hard'
                            description='всплывающий текст при наведении'
                            icon={IconCubeHard}
                            alt='cubeHard' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Accordion;