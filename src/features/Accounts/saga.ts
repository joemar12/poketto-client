import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  getUserAccountsFetch,
  getUserAccountsSuccess,
  getUserAccountsFailure,
} from "./accounts.slice";
import type { Account } from "./types";

export function* accountsSaga() {
  yield takeLatest(getUserAccountsFetch.type, getAccounts);
  // add other accounts related actions here
}

const fetchAccounts = (userId: string) => {
  //mock for now
  console.log("fetch accounts for: " + userId);
  return [
    { id: "1", name: "TEST 1", description: "test account 1" } as Account,
    { id: "2", name: "TEST 2", description: "test account 2" } as Account,
  ];
};

function* getAccounts(action: PayloadAction<string>): any {
  try {
    const response = yield call(fetchAccounts, action.payload);
    console.log("accounts fetched: " + response);
    yield put(getUserAccountsSuccess(response));
  } catch (error) {
    yield put(getUserAccountsFailure(error));
  }
}
