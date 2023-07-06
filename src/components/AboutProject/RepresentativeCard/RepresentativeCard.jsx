import styles from './RepresentativeCard.module.scss';

function RepresentativeCard(props) {

    const { title } = props;
    return (
        <div className={styles.card_rotation}>
            <div className={styles.front}>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.back}>
                <div className={styles.back_content}>
                    <h2 className={styles.title}>kvegcvkdsh</h2>
                </div>

            </div>
        </div>



    )

}

export default RepresentativeCard