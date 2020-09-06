import { myCvConstants as cvType } from '../constants'

const initialState = {};

export function myCvReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case cvType.CREATE_MY_CV_SUCCESS:
            console.log("success", payload);
            return state;
        case cvType.CREATE_MY_CV_FAIL:
            console.log("fail");
            return state;
        default:
            return state;
    }
}