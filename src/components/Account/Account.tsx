import styles from "./Account.module.css";

const Account = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src="src/assets/images/logo.png" alt="SAYV" className={styles.logo} />
        <span className={styles.title}>SAYV</span>
      </div>
      <button className={styles.connectWalletButton}>
        <span>Connect</span>
      </button>
    </div>
  );
};

export default Account;
