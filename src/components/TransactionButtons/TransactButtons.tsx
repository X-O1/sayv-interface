import styles from "./TransactionButtons.module.css";

const TransactButtons = () => {
  return (
    <div className={styles.container}>
      <button className={styles.depositButton}>Deposit</button>
      <button className={styles.withdrawButton}>Withdraw</button>
    </div>
  );
};

export default TransactButtons;
