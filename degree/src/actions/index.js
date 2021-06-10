import axios from 'axios'

import {ACTION_TYPES} from '../const'

export const changePhoneAction = (phoneValue) => {
    return {
        type: ACTION_TYPES.CHANGE_PHONE,
        payload: phoneValue
    }
}

export const changePasswordAction = (passwordValue) => {
    return {
        type: ACTION_TYPES.CHANGE_PASSWORD,
        payload: passwordValue
    }
}

const signInStart = () => {
    return {
        type: ACTION_TYPES.SIGN_IN_START
    }
}

const signInSuccess = (userData) => {
    console.log(userData);
    return {
        type: ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: userData
    }
}

const signInFailure = (err) => {
    return {
        type: ACTION_TYPES.SIGN_IN_FAILURE,
        payload: err
    }
}

export const signIn = ({phone, password}) => {
    return async (dispatch) => {
        dispatch(signInStart())
        try {
            const response = await axios.post('http://localhost:3001/auth/sign-in', {
                phone,
                password
            })

            dispatch(signInSuccess(response.data))
        } catch (err) {
            dispatch(signInFailure(err.response?.data))
        }
    }
}



export const signOut = () => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.SIGN_OUT
    })
}