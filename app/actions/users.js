import axios from 'axios'

import { ME_FROM_TOKEN, ME_FROM_TOKEN_SUCCESS, ME_FROM_TOKEN_FAILURE, RESET_TOKEN,
        SIGNUP_USER, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE, RESET_USER,
        SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
        VALIDATE_EMAIL, VALIDATE_EMAIL_SUCCESS, VALIDATE_EMAIL_FAILURE,
        UPDATE_USER_EMAIL,
        VALIDATE_USER_FIELDS, VALIDATE_USER_FIELDS_SUCCESS, VALIDATE_USER_FIELDS_FAILURE, RESET_VALIDATE_USER_FIELDS,
        LOGOUT_USER,
        ROOT_URL} from './types'

export function meFromToken(tokenFromStorage) {
    //check if the token is still valid, if so, get me from the server
    const request = axios.get(`${ROOT_URL}/user/me/from/token?token=${tokenFromStorage}`);

    return {
        type: ME_FROM_TOKEN,
        payload: request
    };
}

export function meFromTokenSuccess(currentUser) {
    return {
        type: ME_FROM_TOKEN_SUCCESS,
        payload: currentUser
    };
}

export function meFromTokenFailure(error) {
    return {
        type: ME_FROM_TOKEN_FAILURE,
        payload: error
    };
}


export function resetToken() {//used for logout
    return {
        type: RESET_TOKEN
    };
}

export function signUpUser(formValues) {
    const request = axios.post(`${ROOT_URL}/user/signup`, formValues)

    return {
        type: SIGNUP_USER,
        payload: request
    };
}

export function signUpUserSuccess(user) {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: user
    };
}

export function signUpUserFailure(error) {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: error
    };
}


export function resetUser() {
    return {
        type: RESET_USER,
    };
}

export function signInUser(formValues) {
    const request = axios.post(`${ROOT_URL}/user/signin`, formValues);

    return {
        type: SIGNIN_USER,
        payload: request
    };
}

export function signInUserSuccess(user) {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: user
    };
}

export function signInUserFailure(error) {

    return {
        type: SIGNIN_USER_FAILURE,
        payload: error
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}
export function updateUserEmail(email) {
    return {
        type: UPDATE_USER_EMAIL,
        payload:email
    };
}

export function validateUserFields(values) {
    //note: we cant have /users/validateFields because it'll match /users/:id path!
    const request = axios.post(`${ROOT_URL}/user/validate/fields`, values);

    return {
        type: VALIDATE_USER_FIELDS,
        payload: request
    };
}

export function validateUserFieldsSuccess() {
    return {
        type: VALIDATE_USER_FIELDS_SUCCESS
    };
}

export function validateUserFieldsFailure(error) {
    return {
        type: VALIDATE_USER_FIELDS_FAILURE,
        payload: error
    };
}

export function resetValidateUserFields() {
    return {
        type: RESET_VALIDATE_USER_FIELDS
    }
};