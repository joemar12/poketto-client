import { fork } from "redux-saga/effects";
import { accountsSaga } from "./features/Accounts/saga";

export default function* rootSaga() {
  yield fork(accountsSaga);
  //other sagas here
}
