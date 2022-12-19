import { useGetUserAccountsQuery } from "./GetAccounts.generated";

const AccountsList = () => {
  const { data, isLoading, isFetching } = useGetUserAccountsQuery();

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-lg">Accounts</h1>
      <ul>
        {data.userAccounts.map((account) => (
          <li key={account.id}>
            {account.name} - {account.description} - {account.accountType}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AccountsList;
