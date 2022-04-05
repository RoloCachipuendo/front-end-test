import React, { useState, useEffect } from 'react';
import {
    makeStyles, FormControl, InputAdornment, OutlinedInput, IconButton,
    Backdrop, CircularProgress
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { palette } from "configurations/styles/theme";
import useForm from 'hooks/useFrom';
import validations from "../validations";
import middleware from "configurations/axios";
import apis from "../apis";
import Alert from 'widgets/alert';

//redux
import {useSelector} from "react-redux";
import {getRUCEmpresa, getSub} from "redux/actions/userActions";

const useStyles = makeStyles(theme => ({
    form: {
        borderWidth: "1px",
        border: "1px solid  #aaaaaa",
        borderRadius: "8px",
        width: "100%",
        padding: "2%",
        marginTop: "1%",
        boxShadow: "10px 10px 5px #aaaaaa"
    },
    button: {
        marginTop: "0.5%",
        width: "80%",
        maxWidth: "80%",
        padding: "0.5%",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: palette.primary.dark,
        borderRadius: "8px",
        "&:hover": {
            color: palette.primary.contrastText,
            background: palette.primary.main
        }
    },
    container: {
        width: "60%",
        maxWidth: "60%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    },
    textField: {
        width: '100%',
    },
    backdrop: {
        zIndex: theme.zIndex.modal + 999,
        color: palette.primary.main,
    },
}));

const ChangePass = () => {
    const classes = useStyles();
    const [openLoader, setOpenLoader] = useState(false);
    const [msgError, setMsg] = useState({ show: false, msg: null, type: null });
    const tk = useSelector(state => state.user.tk);
    const [currentPass, setCurrentPass] = useState({
        pass: "",
        showPass: false,
    });

    const [newPass, setNewPass] = useState({
        pass: "",
        showPass: false,
    });

    const [confirmPass, setConfirmPass] = useState({
        pass: "",
        showPass: false,
    });


    const handleChange = (name) => (event) => {
        switch (name) {
            case 'currentPass':
                getObject({
                    currentPass: event.target.value,
                    newPass: newPass.pass,
                    confirmPass: confirmPass.pass
                });
                setCurrentPass({ ...currentPass, pass: event.target.value });
                break;
            case 'newPass':
                getObject({
                    currentPass: currentPass.pass,
                    newPass: event.target.value,
                    confirmPass: confirmPass.pass
                });
                setNewPass({ ...newPass, pass: event.target.value });
                break;
            case 'confirmPass':
                getObject({
                    currentPass: currentPass.pass,
                    newPass: newPass.pass,
                    confirmPass: event.target.value
                });
                setConfirmPass({ ...confirmPass, pass: event.target.value });
                break;
            default:
                break;
        }
    };

    const handleClickShowPassword = (name) => {
        switch (name) {
            case 'currentPass':
                setCurrentPass({ ...currentPass, showPass: !currentPass.showPass });
                break;
            case 'newPass':
                setNewPass({ ...newPass, showPass: !newPass.showPass });
                break;
            case 'confirmPass':
                setConfirmPass({ ...confirmPass, showPass: !confirmPass.showPass });
                break;
            default:
                break;
        }

    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function closeAlert() { setMsg({ show: false }); }

    const existError = () => { }

    const handleSave = async () => {
        if(tk){
            setOpenLoader(true);
            await middleware.put(apis.put_update_pass,
                {
                    claveActual: currentPass.pass,
                    idAsignacionEmpresaUsuario: getSub(tk),
                    idEmpresa:  getRUCEmpresa(tk),
                    nuevaClave: newPass.pass
                }
            ).then(
                response => {
                    if (response.status >= 200 && response.status <= 300) {
                        setMsg({ show: true, msg: 'Contraseña actualizada', type: "success" });
                    }
                    setOpenLoader(false);
                }
            ).catch(
                exception => {
                    if (exception.response) {
                        if (exception.response.status === 400) {
                            setMsg({ show: true, msg: 'No se pudo actualizar la contraseña.', type: "error" });
                        }
                    } else {
                        setMsg({ show: true, msg: 'Existen problemas en la red. Contáctese con el administrador del Sistema.', type: "error" });
                    }
                    setOpenLoader(false);
    
                }
            );
        }else{
            setMsg({ show: true, msg: 'Su sesión expiro.', type: "error" });
        }

    }

    useEffect(() => {
        getObject({
            currentPass: "",
            newPass: "",
            confirmPass: ""
        })
    }, []);

    const { errors, handleSubmit, getObject } = useForm(handleSave, validations.updatePassword, existError);



    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.container}>
                    <div class="row form-group pl-4 pr-4">
                        {msgError.show ?
                            <Alert
                                tipo={msgError.type}
                                mensaje={msgError.msg}
                                mesajeSubrayado={null}
                                titulo={null}
                                mostrar={msgError.show}
                                cerrarAlerta={closeAlert}
                            /> : null
                        }
                        <div class="col-sm-12 mb-1">
                            <label>Los campos marcados con (  <font color={palette.error.main}> *</font> )son obligatorios:</label>
                        </div>
                        <div class="col-sm-4 mb-1">
                            <label>Contraseña actual  <font color={palette.error.main}> *</font>: </label>
                        </div>
                        <div class="col-sm-8 mb-1">
                            <FormControl className={classes.textField} variant="outlined">
                                <OutlinedInput
                                    type={currentPass.showPass ? 'text' : 'password'}
                                    value={currentPass.pass}
                                    onChange={handleChange('currentPass')}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">

                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleClickShowPassword('currentPass')}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {currentPass.showPass ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={0}
                                />
                                {errors.currentPass ? <small style={{ color: palette.error.main }}>{errors.currentPass}</small> : null}
                            </FormControl>
                        </div>
                        <div class="col-sm-4 mb-1">
                            <label>Contraseña nueva  <font color={palette.error.main}> *</font>: </label>
                        </div>
                        <div class="col-sm-8 mb-1">
                            <FormControl className={classes.textField} variant="outlined">
                                <OutlinedInput
                                    type={newPass.showPass ? 'text' : 'password'}
                                    value={newPass.pass}
                                    onChange={handleChange('newPass')}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">

                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleClickShowPassword('newPass')}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {newPass.showPass ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={0}
                                />
                            </FormControl>
                            {errors.newPass ? <small style={{ color: palette.error.main }}>{errors.newPass}</small> : null}
                        </div>
                        <div class="col-sm-4 mb-1">
                            <label>Confirmar contraseña nueva  <font color={palette.error.main}> *</font>: </label>
                        </div>
                        <div class="col-sm-8 mb-1">
                            <FormControl className={classes.textField} variant="outlined">
                                <OutlinedInput
                                    type={confirmPass.showPass ? 'text' : 'password'}
                                    value={confirmPass.pass}
                                    onChange={handleChange('confirmPass')}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">

                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => handleClickShowPassword('confirmPass')}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {confirmPass.showPass ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={0}
                                />
                                {errors.newPass ? <small style={{ color: palette.error.main }}>{errors.newPass}</small> : null}
                            </FormControl>
                        </div>
                        <div class="col-sm-12 mb-1" align="center">
                            <button className={classes.button} type="submit">Actualizar Contraseña</button>
                        </div>
                    </div>
                </div>
            </form>
            <Backdrop className={classes.backdrop} open={openLoader} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}

export default ChangePass;