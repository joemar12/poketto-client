import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectUserAccounts } from "./accountsSlice";
import { getUserAccountsFetch } from "./accountsSlice";
import { Account } from "./types";

interface AccountsProps {
  accounts: Account[];
  fetchAccounts: (userId: string) => {
    payload: string;
    type: string;
  };
}

const AccountsList = (props: AccountsProps) => {
  const { accounts, fetchAccounts } = props;
  useEffect(() => {
    fetchAccounts("test");
  }, []);

  return (
    <>
      <h1 className="text-lg">Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} - {account.description}
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  accounts: selectUserAccounts(state),
});

const mapDispatchToProps = {
  fetchAccounts: (userId: string) => getUserAccountsFetch(userId),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(AccountsList);
