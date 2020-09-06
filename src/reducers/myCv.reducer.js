import defaultAvatar from '../images/default-placeholder.png';
import { myCvConstants as cvType } from '../constants';

const initialState = {
    profile: {
        email: "",
        fullName: "Your Name",
        phone: "",
        address: "",
        image: defaultAvatar,
        birthday: "",
        gender: "",
        rating: "",
        about: "",
        school: "",
        specialize: "",
        timeStart: "",
        timeEnd: "",
        moreInformation: "",
        experience: [
          {
            time: "",
            company: "",
            achievements: "",
            position: "",
            id: "root-id-1221",
          },
        ],
        special: [{ name: "", range: 0, id: "root-id-1223" }],
    }
};

export function myCvReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case cvType.CREATE_MY_CV_SUCCESS:
            alert("Cập nhật thông tin thành công!")
            return {
                ...state,
                profile: payload
            };
        case cvType.CREATE_MY_CV_FAIL:
            console.log("fail");
            return state;
        default:
            return state;
    }
}