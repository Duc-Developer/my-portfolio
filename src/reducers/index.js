import { combineReducers } from "redux";
import { myCvReducer } from "./myCv.reducer";


const rootReducer = combineReducers({
    myCv: myCvReducer
});

export default rootReducer;