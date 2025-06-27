import styles from "./GetAdvanceButton.module.css";

const GetAdvanceButton = () => {
  return (
    <button className={styles.getAdvanceButton}>
      Get Advance <br />
      <span className={styles.subTitle}>Powered by YieldWield™</span>
    </button>
  );
};

export default GetAdvanceButton;
