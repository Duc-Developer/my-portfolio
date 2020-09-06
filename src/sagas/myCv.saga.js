import { put, takeEvery } from 'redux-saga/effects';
import { myCvConstants as cvType } from '../constants';
import { createMyCvSuccess } from '../actions';

function* createMyCv(action) {
    const { payload } = action;
    yield put(createMyCvSuccess(payload));
}

export function* createMyCvAction() {
    yield takeEvery(cvType.CREATE_MY_CV, createMyCv);
}