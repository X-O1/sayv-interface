import Balance from "./components/Balance/Balance.tsx";
import YieldCard from "./components/YieldEarned/YieldEarned.tsx";
import TransactButtons from "./components/TransactionButtons/TransactButtons.tsx";
import GetAdvanceButton from "./components/GetAdvanceButton/GetAdvanceButton.tsx";
import Account from "./components/Account/Account.tsx";
import styles from "./components/App/App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <Account />
        <Balance />
        <YieldCard />
        <TransactButtons />
        <GetAdvanceButton />
      </div>
    </>
  );
};

export default App;
