import React, { useState, useEffect } from 'react';
import {
    makeStyles, Radio, RadioGroup, FormControlLabel, FormControl,
    Backdrop, CircularProgress, NativeSelect, InputBase, withStyles
} from '@material-ui/core';
import { palette } from "configurations/styles/theme";
import useForm from 'hooks/useFrom';
import validations from "../validations";
import middleware, { clientLocal } from "configurations/axios";
import apis from "../apis";
import { typeVacuna } from 'configurations/typeVoucher';
import { API_PUT_LOCAL_UPDATE_EMP } from 'views/administración/Clients/apis';
import { getIdUser } from 'redux/localStorage';
import { useSnackbar } from 'notistack';
const useStyles = makeStyles(theme => ({
    form: {
        borderWidth: "1px",
        border: "1px solid  #aaaaaa",
        borderRadius: "8px",
        width: "100%",
        padding: "1%"
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
    formControl: {
        marginTop: theme.spacing(0),
        minWidth: 120,
    },
    radio: {
        display: '-webkit-box',
        marginTop: '0px'
    },
    radioLable: {
        color: palette.primary.main,
        display: 'flex'
    },
    radioButton: {
        marginTop: '0px',
        paddingTop: '0px'
    },
    backdrop: {
        zIndex: theme.zIndex.modal + 999,
        color: palette.primary.main,
    },
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(0),
        },
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
    },
}))(InputBase);

const CompanyForm = ({ data, onShowAlert, handleCloseReload = () => { } }) => {
    const classes = useStyles();    
  const { enqueueSnackbar } = useSnackbar();
    const [company, setCompany] = useState(data);
    const [openLoader, setOpenLoader] = useState(false);
    const [empleado, setEmpleado] = useState({
        idPersona: 9,
        cedulaPersona: "",
        nombresPersona: "",
        apellidosPersona: "",
        correoPersona: "",
        fechaNacimientoPersona: new Date(),
        direccionDomicilioPersona: "",
        celularPersona: "",
        estadoVacunacionPersona: "N"
    })

    const [vacuna, setVacuna] = useState({
        fechaVacuna: new Date(),
        numDosisVacuna: 0,
        tipoVacuna: ""
    })
    const existError = () => { }

    const handleSave = async () => {
        setOpenLoader(true);
        let response = obtenerObjeto();
        console.log(response)
        await clientLocal.put(API_PUT_LOCAL_UPDATE_EMP, response).then(
            response => {
                if (response.status >= 200 && response.status <= 300) {
                    enqueueSnackbar(` Los datos fueron actualizados correctamente`, {
                        variant: "success",
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right",
                        },
                        autoHideDuration: 10000,
                      });
                }
                setOpenLoader(false);
            }
        ).catch(
            exception => {
                if (exception.response) {
                    if (exception.response.status === 400) {
                        enqueueSnackbar(` No se pudo actualizar`, {
                            variant: "error",
                            anchorOrigin: {
                              vertical: "top",
                              horizontal: "right",
                            },
                            autoHideDuration: 10000,
                          });
                        
                    }
                } else {
                    enqueueSnackbar(`Existen problemas en la red. Contáctese con el administrador del Sistema.`, {
                        variant: "error",
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right",
                        },
                        autoHideDuration: 10000,
                      });
                   
                }
                setOpenLoader(false);

            }
        );
    }

    const obtenerEmpleado = async () => {
        setOpenLoader(true);
        await clientLocal.get("/empleados/por-user/"+getIdUser()).then(
            response => {
                if (response.status >= 200 && response.status <= 300) {
                    setEmpleado(response.data)
                    enqueueSnackbar(` Logueo exitoso ${response.data.nombresPersona}`, {
                        variant: "success",
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right",
                        },
                        autoHideDuration: 10000,
                      });
                }
                handleCloseReload()
                setOpenLoader(false);
            }
        ).catch(
            exception => {
                if (exception.response) {
                    if (exception.response.status === 400) {
                        enqueueSnackbar(` Ocurrio un error, no se pudo obtener los datos`, {
                            variant: "error",
                            anchorOrigin: {
                              vertical: "top",
                              horizontal: "right",
                            },
                            autoHideDuration: 10000,
                          });
                        
                    }
                } else {
                    enqueueSnackbar(`Existen problemas en la red. Contáctese con el administrador del Sistema.`, {
                        variant: "error",
                        anchorOrigin: {
                          vertical: "top",
                          horizontal: "right",
                        },
                        autoHideDuration: 10000,
                      });
                    
                }
                setOpenLoader(false);

            }
        );
    }

    const obtenerObjeto = () => {
        if (empleado.estadoVacunacionPersona !== "N") {
            return ({
                empleado: empleado,
                vacuna: vacuna
            })

        } else {
            return ({
                empleado: empleado,
            })
        }
    }

    const { errors, handleSubmit, getObject } = useForm(handleSave, validations.updateCompany, existError);

    useEffect(() => { getObject(data); obtenerEmpleado()  }, []);


    const handleChane = (event) => {
        setEmpleado({
            ...empleado,
            [event.target.name]: event.target.value
        })
        getObject({
            ...empleado,
            [event.target.name]: event.target.value
        });
    }

    

    const handleChangeCheckAgent = event => {
        setEmpleado({
            ...empleado,
            [event.target.name]: event.target.value
        });
        getObject({
            ...empleado,
            [event.target.name]: event.target.value
        });
    }

    const changeVacuna = (event) => {
        event.preventDefault();
        setVacuna({
            ...vacuna,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeNumber = event => {
        event.preventDefault();
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {

            if (event.target.name !== "numDosisVacuna") {
                setEmpleado({
                    ...empleado,
                    [event.target.name]: event.target.value
                })

                getObject({
                    ...empleado,
                    [event.target.name]: event.target.value
                });
            } else {
                setVacuna({
                    ...vacuna,
                    [event.target.name]: event.target.value
                })
            }


        }
    }


    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div class="row form-group">
                    <div class="col-sm-12 mb-1">
                        <label>Los campos marcados con (  <font color={palette.error.main}> *</font> )son obligatorios:</label>
                    </div>
                    <div class="col-sm-4 mb-1">
                        <label>Cédula:</label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.cedulaPersona ? " form-control is-invalid" : "form-control"} type="text"
                            name="cedulaPersona"
                            maxLength="10"
                            value={empleado.cedulaPersona}
                            onChange={handleChangeNumber}
                            autoComplete="off"
                        />
                        {errors.cedulaPersona ? <small style={{ color: palette.error.main }}>{errors.cedulaPersona}</small> : null}
                    </div>
                    <div class="col-sm-4 mb-1">
                        <label>Nombres:  <font color={palette.error.main}> *</font> </label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.nombresPersona ? " form-control is-invalid" : "form-control"} type="text"
                            name="nombresPersona"
                            value={empleado.nombresPersona}
                            onChange={handleChane}
                            autoComplete="off"
                            required
                        />
                        {errors.nombresPersona ? <small style={{ color: palette.error.main }}>{errors.nombresPersona}</small> : null}
                    </div>

                    <div class="col-sm-4 mb-1">
                        <label>Apellido:</label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.apellidosPersona ? " form-control is-invalid" : "form-control"} type="text"
                            name="apellidosPersona"
                            value={empleado.apellidosPersona}
                            onChange={handleChane}
                            autoComplete="off"

                        />
                        {errors.apellidosPersona ? <small style={{ color: palette.error.main }}>{errors.apellidosPersona}</small> : null}
                    </div>
                    <div class="col-sm-4 mb-1">
                        <label>Teléfono:</label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.telefonoPrincipal ? " form-control is-invalid" : "form-control"} type="text"
                            name="celularPersona"
                            maxLength="13"
                            value={empleado.celularPersona}
                            onChange={handleChangeNumber}
                            autoComplete="off"
                        />
                        {errors.telefonoPrincipal ? <small style={{ color: palette.error.main }}>{errors.telefonoPrincipal}</small> : null}
                    </div>

                    <div class="col-sm-4 mb-1">
                        <label>Dirección :  <font color={palette.error.main}> *</font> </label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.direccion ? " form-control is-invalid" : "form-control"} type="text"
                            name="direccionDomicilioPersona"
                            value={empleado.direccionDomicilioPersona}
                            onChange={handleChane}
                            autoComplete="off"
                            required
                        />
                        {errors.direccion ? <small style={{ color: palette.error.main }}>{errors.direccion}</small> : null}
                    </div>

                    <div class="col-sm-4 mb-1">
                        <label>Correo: <font color={palette.error.main}> *</font> :</label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.correoPrincipal ? " form-control is-invalid" : "form-control"} type="email"
                            name="correoPersona"
                            value={empleado.correoPersona}
                            onChange={handleChane}
                            autoComplete="off"
                            required
                        />
                        {errors.correoPrincipal ? <small style={{ color: palette.error.main }}>{errors.correoPrincipal}</small> : null}
                    </div>

                    <div class="col-sm-4 mb-1">
                        <label>Fecha Nacimiento:</label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <input class={errors.fecha ? " form-control is-invalid" : "form-control"} type="date"
                            name="fechaNacimientoPersona"
                            value={empleado.fechaNacimientoPersona}
                            onChange={handleChane}
                            autoComplete="off"
                        />
                        {errors.fecha ? <small style={{ color: palette.error.main }}>{errors.fecha}</small> : null}
                    </div>

                    <div class="col-sm-4 mb-1">
                        <label>Estado Vacunación:</label>
                    </div>
                    <div class="col-sm-8 mb-1">
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                name="estadoVacunacionPersona"
                                className={classes.radio} required
                                value={empleado.estadoVacunacionPersona}
                                onChange={handleChangeCheckAgent}
                            >

                                <FormControlLabel
                                    value="S"
                                    control={<Radio color="primary" className={classes.radioButton} />}
                                    label="Vacunada"
                                    labelPlacement="start"
                                    className={classes.radioLable}
                                />
                                <FormControlLabel
                                    value="N"
                                    control={<Radio color="primary" className={classes.radioButton} />}
                                    label="No Vacunada"
                                    labelPlacement="start"
                                    className={classes.radioLable}
                                />

                            </RadioGroup>
                        </FormControl>
                    </div>

                    {empleado.estadoVacunacionPersona === "S" ?
                        (<>
                            <div class="col-sm-4 mb-1">
                                <label>Fecha Vacunacion: <font color={palette.error.main}> *</font> :</label>
                            </div>
                            <div class="col-sm-8 mb-1">
                                <input class={errors.numeroResolucion ? " form-control is-invalid" : "form-control"} type="date"
                                    name="fechaVacuna"
                                    value={vacuna.fechaVacuna}
                                    onChange={changeVacuna}
                                    autoComplete="off"
                                />
                                {errors.numeroResolucion ? <small style={{ color: palette.error.main }}>{errors.numeroResolucion}</small> : null}
                            </div>

                            <div class="col-sm-4 mb-1">
                                <label>Tipo Vacuna: <font color={palette.error.main}> *</font> :</label>
                            </div>
                            <div class="col-sm-8 mb-1">
                                <FormControl className="form-control">
                                    <NativeSelect
                                        value={vacuna.tipoVacuna}
                                        onChange={(e) => setVacuna({
                                            ...vacuna,
                                            tipoVacuna: e.target.value
                                        })}
                                        input={<BootstrapInput />}
                                    >
                                        <option aria-label="None" value="">
                                            --Seleccione--
                                        </option>
                                        {typeVacuna.map((voucher) => (
                                            <option key={voucher.CODIGO} value={voucher.NOMBRE}>
                                                {voucher.NOMBRE}
                                            </option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </div>


                            <div class="col-sm-4 mb-1">
                                <label>Dosis:</label>
                            </div>
                            <div class="col-sm-8 mb-1">
                                <input class={errors.telefonoPrincipal ? " form-control is-invalid" : "form-control"} type="text"
                                    name="numDosisVacuna"
                                    maxLength="1"
                                    value={vacuna.numDosisVacuna}
                                    onChange={handleChangeNumber}
                                    autoComplete="off"
                                />
                                {errors.telefonoPrincipal ? <small style={{ color: palette.error.main }}>{errors.telefonoPrincipal}</small> : null}
                            </div>

                        </>
                        ) :
                        (<>
                        </>)

                    }

                    <div class="col-sm-12 mb-1" align="center">
                        <button className={classes.button} type="submit">Actualizar Información</button>
                    </div>
                </div>
            </form>
            <Backdrop className={classes.backdrop} open={openLoader} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}

export default CompanyForm;