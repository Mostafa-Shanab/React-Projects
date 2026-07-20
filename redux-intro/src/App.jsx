import { useSelector } from "react-redux";

import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";

function App() {
  const fullname = useSelector((store) => store.customer.fullname);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullname ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
