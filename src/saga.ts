import { fork } from "redux-saga/effects";
import { accountsSaga } from "./content/applications/Accounts/saga";

export default function* rootSaga() {
  yield fork(accountsSaga);
  //other sagas here
}
