import {
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    SIGN_OFF_USER,
    AUTH_USER_TMP
} from '../types/userType';

const initialState = {
    tk: null,
    ruc:null,
    error: null,
    tmp: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_USER_SUCCESS:
            return ({
                tk: action.payload.tk,
                ruc: action.payload.ruc,
                type: action.payload.type,
                error: null
            });
        case AUTH_USER_ERROR:
            return ({
                tk: null,
                error: action.payload,
            });
        case SIGN_OFF_USER:
            return ({
                tk: "",
                error: null
            });
        case AUTH_USER_TMP:
            return ({
                tk: "",
                error: null,
                tmp: true
            });
        default:
            return state;
    }
}