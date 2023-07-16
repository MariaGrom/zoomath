import styles from './CardOfLevel.module.scss';

function CardOfLevel(props) {

    const { title, description, icon, alt, styleCard, styleSinopsis } = props;

    return (

        <li className={styleCard}>
            <p>сложность:</p>
            <h2>{title}</h2>
            <p className={styleSinopsis}>{description}</p>
            <img className={styles.img} src={icon} alt={alt} />
        </li>

    )
}

export default CardOfLevel;