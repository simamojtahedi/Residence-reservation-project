import {SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE} from './userTypes'
  
const initialState = {
    loading: true,
    user: null,
    error: null,
};
  
export const userSigninReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_USER_REQUEST:
            return {
            loading: true,
            };
        case SIGNIN_USER_SUCCESS:
            return {
            loading: false,
            user: action.payload,
            };
        case SIGNIN_USER_FAILURE:
            return {
            loading: false,
            error: action.payload,
            };
        default:
            return state;
    }
};

export const userSignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_REQUEST:
            return {
            loading: true,
            };
        case SIGNUP_USER_SUCCESS:
            return {
            loading: false,
            user: action.payload,
            };
        case SIGNUP_USER_FAILURE:
            return {
            loading: false,
            error: action.payload,
            };
        default:
            return state;
    }
};
  
export default userSigninReducer;