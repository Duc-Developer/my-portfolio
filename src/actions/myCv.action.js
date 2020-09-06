import { myCvConstants as type } from '../constants';

export function createMyCv(data) {
    return {
        type: type.CREATE_MY_CV,
        payload: data
    }
};

export function createMyCvSuccess(data) {
    return {
        type: type.CREATE_MY_CV_SUCCESS,
        payload: data
    }
};

export function createMyCvFail(data) {
    return {
        type: type.createMyCvFail,
        payload: data
    }
};