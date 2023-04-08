import { call, put, takeLatest } from "redux-saga/effects";
import { getData } from "../http";
import { setData } from "./actions";
import { IResponse } from "../types";
import { Actions } from "../constants/Actions";

export function* fetchDataSaga(): any {
	const data: IResponse = yield call(getData);
	yield put(setData(data.list || []));
}

export default function* rootSaga() {
	yield takeLatest(Actions.FETCH_DATA, fetchDataSaga);
}
