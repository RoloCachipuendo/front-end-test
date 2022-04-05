import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//redux
import UseSecurity from "security/useSecurity";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { signOffUserAction } from "redux/actions/userActions";

import UseTitle from "hooks/useTitle";
import { apiKey, aYoSis, domainSis } from "configurations/constant";

export default function useLogin() {

    const [user, setUser] = useState({ username: "", password: "" });
    const [open, setOpen] = useState(false);
    //const [openMsm, setOpenMsm] = useState(true);

    const [errorInputs, setErrorInputs] = useState(false);
    const [userRecovery, setUserRecovery] = useState();
    const [msgForgetPass, setmsgForgetPass] = useState({
        msg:
            "Ingrese el nombre del usuario con el que inicia sesión para recuperar  su contraseña.",
        type: "alert-primary",
    });
    const { isSingIn } = UseSecurity();
    const history = useHistory();
    const dispatch = useDispatch();
    UseTitle({ title: "Login" });
    const clearProcess = () => dispatch(signOffUserAction());
    const error = useSelector((state) => state.user.error);
    //para saber que dominio es
    const apiKeySis = window.location.hostname === domainSis ? aYoSis : apiKey;

    const [inputClave, setInputClave] = useState({
        error: false,
        helperText: null,
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeUserRecovey = (event) => {
        setUserRecovery(event.target.value);
    };


    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (isSingIn()) {
            history.push("/login");
        } else {
            clearProcess();
        }
    }, []);



    return {
        handleClickOpen,
        handleChangeUserRecovey,
        handleChange,
        inputClave,
        msgForgetPass,
        error,
        errorInputs,
        open,
        userRecovery,
        inputClave,
        user
    };
}