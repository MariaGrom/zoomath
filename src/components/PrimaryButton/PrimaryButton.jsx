import styles from "./PrimaryButton.module.scss";

export const PrimaryButton = (props) => {
  const { onClick, children } = props;

  return (
    <div onClick={onClick} className={styles.defaultStyles} type="button">
      {children}
    </div>
  );
};
