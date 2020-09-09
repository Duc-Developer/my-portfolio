import { all } from 'redux-saga/effects';
import { createMyCvAction } from './myCv.saga';

export default function* rootSaga() {
    yield all([
        createMyCvAction()
    ]);
}