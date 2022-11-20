import { useEffect } from "react";
import { connect } from "react-redux";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { selectUserEmail } from "../Authentication/user.slice";
import { selectUserAccounts } from "./accounts.slice";
import { getUserAccountsFetch } from "./accounts.slice";
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
  const userId = useAppSelector((state) => selectUserEmail(state));
  useEffect(() => {
    fetchAccounts(userId);
  }, [userId]);

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
