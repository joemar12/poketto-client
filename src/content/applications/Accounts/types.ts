export enum AccountType {
  Asset,
  Liability,
  Equity,
  Revenue,
  Expense,
}

type Account = {
  id: string;
  name: string;
  description: string;
  accountType: AccountType;
  ownerUserId: string;
  isPlaceHolder: boolean;
  parentAccountId: string;
};

export type { Account };
