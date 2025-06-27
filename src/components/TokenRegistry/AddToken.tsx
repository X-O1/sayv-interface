import styles from "./AddToken.module.css";

const AddTokenButton = () => {
  return (
    <button className={styles.addTokenButton}>
      Register Token <br />
      <span className={styles.subTitle}>(Dev Only)</span>
    </button>
  );
};

export default AddTokenButton;
