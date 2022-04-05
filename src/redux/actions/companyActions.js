import actionTypes from "../types/companyTypes";

export const addCompanyAction = info => ({
    type: actionTypes.ADD_INFO_COMPANY,
    payload: info
})

export const loadInfoCompanyAction = () => ({
    type: actionTypes.LOAD_INFO_COMPANY,
})
export const clearCompanyAction = () => ({
    type: actionTypes.CLEAR_INFO_COMPANY
})

export const rememberCompanyAction = () => ({
    type: actionTypes.REMEMBER_COMPANY
})