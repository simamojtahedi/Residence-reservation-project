import axios from "axios";
import Router from "next/router";
import {SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, SIGNOUT_USER} from './userTypes'
import { toast } from 'react-hot-toast';

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signinUserSuccess = (users) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: users,
  };
};

export const signinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signupUserRequest = () => {
    return {
      type: SIGNUP_USER_REQUEST,
    };
};
  
export const signupUserSuccess = (users) => {
    return {
      type: SIGNUP_USER_SUCCESS,
      payload: users,
    };
};
  
export const signupUserFailure = (error) => {
    return {
      type: SIGNUP_USER_FAILURE,
      payload: error,
    };
};


export const userSignin = (data) => {
    return (dispatch) => {
        dispatch (signinUserRequest())
        axios.post('http://localhost:5000/api/user/signin', data, {withCredentials: true})
        .then(response => {
          toast.success('خوش آمدید')
          dispatch(signinUserSuccess(response.data))
          Router.push('/')
        })
        .catch(err => {
          dispatch(signinUserFailure(err.message))
        })
    }
}

export const userSignup = (data) => {
  return (dispatch) => {
      dispatch (signupUserRequest())
      axios.post('http://localhost:5000/api/user/signup', data, {withCredentials: true})
      .then(response => dispatch(signupUserSuccess(response.data)))
      .catch(err => dispatch(signupUserFailure(err.message)))
  }
}

export const userSignout = () => {
  return (dispatch) => {
    dispatch ({type: SIGNOUT_USER })
    axios.get('http://localhost:5000/api/user/logout', {withCredentials: true})
    .then(() => window.location.href = '/')
    .catch()
  }
}

export const loadUser = (store) => {
  axios.get('http://localhost:5000/api/user/load', {withCredentials: true})
  .then(response => {
    store.dispatch(signinUserSuccess(response.data))
  })
  .catch(err => {})
}