import styles from './Video.module.scss';
import IconPlay from '../../../img/icon_play.svg';

function Video() {
    return (
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
    )
}

export default Video;