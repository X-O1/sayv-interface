import styles from "./YieldEarned.module.css";

const YieldCard = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Earned Today</p>
        <p className={styles.balance}>$9.60</p>
      </div>
    </>
  );
};

export default YieldCard;
