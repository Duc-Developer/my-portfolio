import { put, takeEvery } from 'redux-saga/effects';
import { myCvConstants as cvType } from '../constants';
import { createMyCvSuccess } from '../actions';
import { database, storage } from '../firebase';

function* createMyCv(action) {
    const { payload } = action;
    if (!payload.avatar) {
        yield database.ref(`users/${payload.uid}`)
            .update({
                ...payload,
                avatar: ""
            });
        yield put(createMyCvSuccess(payload));
        return;
    } else {
        let uploadTask = storage.ref("images/")
            .child(payload.uid)
            .put(payload.avatar);
        yield uploadTask.on('state_changed',
            (snapshot) => { },
            (error) => { if (error) { console.log(error.code) } },
            () => {
                uploadTask.snapshot
                    .ref
                    .getDownloadURL()
                    .then(url => {
                        database.ref(`users/${payload.uid}`)
                            .update({
                                ...payload,
                                avatar: url
                            });
                    })
            }
        );
        let avatarRes = yield database.ref("users/" + payload.uid + "/avatar")
            .once("value")
            .then(snapshot => snapshot.val());
        yield put(createMyCvSuccess({
            ...payload,
            avatar: avatarRes
        }));
    }
}

export function* createMyCvAction() {
    yield takeEvery(cvType.CREATE_MY_CV, createMyCv);
}