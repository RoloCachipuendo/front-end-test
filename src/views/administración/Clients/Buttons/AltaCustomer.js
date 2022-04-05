import { useState, Fragment } from "react";
import {
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    makeStyles,
    Grid,
    Button,
    Backdrop,
    CircularProgress,
    Divider,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/AccessAlarmOutlined";

import { useStylesApp } from "hooks/useStyles";
import { palette, useStylesGlobal } from "configurations/styles/theme";
import { useSnackbar } from "notistack";
import { clientLocal } from "configurations/axios";
import { API_POST_SAVE_CLAVE, API_PUT_LOCAL_UPDATE_EMP } from "../apis";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    IconButton: {
        marginTop: "0%",
        marginBottom: "0%",
        padding: "0px",
    },
    textFieldComboBox: {
        minWidth: "75%",
        maxWidth: "95%",
    },
    backdrop: {
        zIndex: theme.zIndex.modal + 1,
        color: palette.primary.main,
    },
}));

const AltaCustomer = ({ costumer, updateView }) => {
    const [open, setOpen] = useState(false);
    const classesGlobal = useStylesGlobal();
    const [openLoader, setOpenLoader] = useState(false);
    const classes = useStyles();
    const classesApp = useStylesApp();
    const { enqueueSnackbar } = useSnackbar();
    const [msgError, setMsg] = useState({ show: false, msg: null, type: null });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function closeAlert() {
        setMsg({ show: false });
    }

    const handleSave = async () => {
        console.log("entra al servicio")
        //setOpenLoader(true);
        console.log("entra al servicio")
        await clientLocal
            .post(
                API_POST_SAVE_CLAVE + `/${costumer.idPersona}`,
            )
            .then((response) => {
                if (response.status >= 200 && response.status <= 301) {
                    enqueueSnackbar("Credenciales creadas. para el usuario " +costumer.nombresPersona +". El usuario es el email y la clvae por defecto es emp2022", {
                        variant: "success",
                        anchorOrigin: {
                            vertical: "top",
                            horizontal: "right",
                        },
                        autoHideDuration: 10000,
                    });
                    updateView();
                    setOpenLoader(false);
                    setOpen(false);
                }
            })
            .catch((exception) => {
                if (exception.response) {
                    if (exception.response.status === 400) {
                        setMsg({ show: true, msg: "No se pudo crear las credenciales." });
                    } else if (exception.response.status === 404) {
                        setMsg({
                            show: true,
                            msg: "No se encontró el empleado.",
                        });
                    } else {
                        setMsg({
                            show: true,
                            msg:
                                "Error al registrar las credenciales del empleado. Contáctese con el administrador del Sistema.",
                        });
                    }
                } else {
                    setMsg({
                        show: true,
                        msg:
                            "Existen problemas en la red. Contáctese con el administrador del Sistema.",
                    });
                }
                setOpenLoader(false);
            });
    };

    return (
        <Fragment>
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleClickOpen}
                className={classes.IconButton}
            >
                <EditIcon style={{ color: palette.primary.main }} />
            </IconButton>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle id="max-width-dialog-title">Dar de Alta Empleado</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSave}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12}>
                                <label>
                                    Al dar de alta al empleado, se generara las credenciales para poder ingresar al sistema
                                </label>

                            </Grid>

                            {msgError.show ? (
                                <Alert
                                    tipo={msgError.type}
                                    mensaje={msgError.msg}
                                    mesajeSubrayado={null}
                                    titulo={null}
                                    mostrar={msgError.show}
                                    cerrarAlerta={closeAlert}
                                />
                            ) : null}


                            <Grid container spacing={3} justify="center">
                                <Grid item md={12} xs={12}>
                                    <Divider />
                                </Grid>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    //type="submit"
                                    onClick={handleSave}
                                    className={classesGlobal.marginButton}
                                >
                                    Dar Alta
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleClose}
                                    className={classesGlobal.marginButton}
                                >
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
            </Dialog>
            <Backdrop className={classes.backdrop} open={openLoader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Fragment>
    );

}



export default AltaCustomer;