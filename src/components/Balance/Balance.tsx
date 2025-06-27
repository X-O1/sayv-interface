import styles from "./Balance.module.css";

const Balance = () => {
  // balance logic

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Total Balance</p>
        <p className={styles.balance}>$7,250</p>
      </div>
    </>
  );
};

export default Balance;
