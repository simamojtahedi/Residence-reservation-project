
import { combineReducers } from "redux";
import {userSigninReducer, userSignupReducer} from "./user/userReducer";

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
});

export default rootReducer;