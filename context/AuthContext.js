import React, { useContext, useEffect } from 'react'
import { useReducerAsync } from "use-reducer-async";
import axios from 'axios'
import toast from 'react-hot-toast';
import Router from 'next/router';

const AuthContext = React.createContext()
const AuthContextDispatcher = React.createContext()

const initialState = {
    loading: false,
    error: null,
    user: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case "SIGNIN_PENDING": {
            return { loading: true, error: false, user: null }
        }
        case "SIGNIN_SUCCESS": {
            return { loading: false, error: null, user: action.payload }
        }
        case "SIGNIN_REJECT": {
            return { loading: false, error: action.error, user: null }
        }
        default:
            return { ...state };
    }
}

const asyncActionHandlers = {
    SIGNIN: ({dispatch}) => (action) => {
        dispatch({type: "SIGNIN_PENDING"})
        axios.post('http://localhost:5000/api/user/signin', action.payload, {withCredentials: true})
        .then(response => {
            toast.success('با موفقیت وارد شدید')
            dispatch({type: 'SIGNIN_SUCCESS', payload: response.data})
            Router.push('/')
            console.log(response)
        })
        .catch(err => {
            dispatch({type: 'SIGNIN_REJECT', error: err})
            console.log(err)
        })
    },
    SIGNUP: ({dispatch}) => (action) => {
        dispatch({type: "SIGNIN_PENDING"})
        axios.post('http://localhost:5000/api/user/signup', action.payload, {withCredentials: true})
        .then(response => {
            toast.success('خوش آمدید')
            dispatch({type: 'SIGNIN_SUCCESS', payload: response.data})
            Router.push('/')
        })
        .catch(err => {
            dispatch({type: 'SIGNIN_REJECT', error: err})
            console.log(err)
        })
    },
    LOADUSER: ({dispatch}) => () => {
        dispatch({type: "SIGNIN_PENDING"})
        axios.get('http://localhost:5000/api/user/load', {withCredentials: true})
        .then(response => {
            dispatch({type: 'SIGNIN_SUCCESS', payload: response.data})
        })
        .catch(err => {
            dispatch({type: 'SIGNIN_REJECT', error: err})
        })
    },
    SIGNOUT: ({dispatch}) => () => {
        axios.get('http://localhost:5000/api/user/logout', {withCredentials: true})
        .then(() => { window.location.href= '/' })
        .catch(err => {
            dispatch({type: 'SIGNIN_REJECT', error: err})
        })
    },
}


const AuthProvider = ({children}) => {
    const [auth, setAuth] = useReducerAsync(reducer, initialState, asyncActionHandlers)

    useEffect(() => {
        setAuth({type: 'LOADUSER'})
    }, [])

    return (
        <AuthContext.Provider value={auth}>
            <AuthContextDispatcher.Provider value={setAuth}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
export const useAuthActions = () => useContext(AuthContextDispatcher)