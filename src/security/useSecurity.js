import store from "redux/store"
import { savetk, sessionTimeOut,  totalTimeSession, descTK } from "./services";
import { getExp, updateSessionAction, getIat, signOffUserAction } from "redux/actions/userActions";


const UseSecurity = () => {

    const dispatch = store.dispatch;

    const isSingIn = () => {
        const user = store.getState().user;
        let userSignIn = true;
        if (user.tk && typeof user.tk === 'string') {
            let dateExp = new Date(0);
            dateExp.setSeconds(getExp(user.tk));
            const currentDate = new Date();
            if (dateExp.getTime() < currentDate.getTime()) {
                userSignIn = false;
            }
        } else {
            userSignIn = false;
        }
        return userSignIn;
    }

    function getSessionTimeOut() {
        const user = store.getState().user;
        return user.tk ? sessionTimeOut(getExp(user.tk)) : 0;
    }

    function getTk() {
        const user = store.getState().user;
        let dateExp = new Date(0);
        dateExp.setSeconds(getExp(user.tk));
        const currentDate = new Date();
        if ((dateExp.getTime() - currentDate.getTime) < 120000) {
            updateTk();
        }
        let tok =  descTK(user.tk,user.ruc);
        
        return user.type  + " " +  tok;
    }

    function updateTk() {
        return new Promise((resolve, reject) => {
            dispatch(updateSessionAction(resolve, reject));
        })
        
    }

    function getTotalTimeSession() {
        const user = store.getState().user;
        return user.tk ? totalTimeSession(getExp(user.tk), getIat(user.tk)) : 0;
    }

    function signout() {
        dispatch(signOffUserAction());
    }

    return ({
        isSingIn: isSingIn,
        savetk: savetk,
        sessionTimeOut: getSessionTimeOut,
        getTk: getTk,
        updateTk: updateTk,
        getTotalTimeSession: getTotalTimeSession,
        signout: signout,
        descTK: descTK
    });
}

export default UseSecurity;
