import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

//Color para la advertencia
import red from '@material-ui/core/colors/red';

import typesError from "./types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    message: {
        display: "block",
        padding: "8px 0px",
        flexDirection: "column",
        justifyContent: "center"
    }
}));

export default function Alerta({ tipo, mensaje, mesajeSubrayado, titulo, mostrar, cerrarAlerta }) {
    const classes = useStyles();

    const renderizarAlerta = () => {
        switch (tipo) {
            case typesError.error:
                return (
                    <Alert severity="error"
                        action={
                            <IconButton aria-label="close" color="inherit" size="small"
                                onClick={() => { cerrarAlerta(); }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        classes={{ message: classes.message }}
                    >
                        <AlertTitle>{titulo}</AlertTitle>
                        <font color={red.A700}>  {mensaje} <b>{mesajeSubrayado}</b></font>
                    </Alert>
                );           
            case typesError.warning:
                return (
                    <Alert severity="warning"
                        action={
                            <IconButton aria-label="close" color="inherit" size="small"
                                onClick={() => { cerrarAlerta(); }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        classes={{ message: classes.message }}
                    >
                        <AlertTitle>{titulo}</AlertTitle>
                        {mensaje} <b>{mesajeSubrayado}</b>
                    </Alert>
                );
            case typesError.info:
                return (
                    <Alert severity="info"
                        action={
                            <IconButton aria-label="close" color="inherit" size="small"
                                onClick={() => { cerrarAlerta(); }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        classes={{ message: classes.message }}
                    >
                        <AlertTitle>{titulo}</AlertTitle>
                        <label> {mensaje} <b>{mesajeSubrayado}</b></label>
                    </Alert>
                );
            case typesError.success:
                return (

                    <Alert severity="success"
                        action={
                            <IconButton aria-label="close" color="inherit" size="small"
                                onClick={() => { cerrarAlerta(); }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        classes={{ message: classes.message }}
                    >
                        <AlertTitle>{titulo}</AlertTitle>
                        {mensaje} <b>{mesajeSubrayado}</b>
                    </Alert>
                );
            default:
                return (
                    <Alert severity="error"
                        action={
                            <IconButton aria-label="close" color="inherit" size="small"
                                onClick={() => { cerrarAlerta(); }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        classes={{ message: classes.message }}
                    >
                        <AlertTitle>{titulo}</AlertTitle>
                        {mensaje} <b>{mesajeSubrayado}</b>
                    </Alert>
                );
        }
    }

    return (
        <div className={classes.root}>
            <Collapse in={mostrar}>
                {renderizarAlerta()}
            </Collapse>
        </div>
    );
}