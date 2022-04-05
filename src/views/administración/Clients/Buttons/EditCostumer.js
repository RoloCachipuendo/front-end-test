import React, { Fragment, useState } from "react";
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
import EditIcon from "@material-ui/icons/Edit";

//Notificacion errores https://iamhosseindhv.com/notistack/demos#variants
import { useSnackbar } from "notistack";
//componentes del sistema
import { palette, useStylesGlobal } from "configurations/styles/theme";
import clientBackend, { clientLocal } from "configurations/axios";
import { API_PUT_LOCAL_UPDATE_EMP, API_PUT_UPDATE_COSTUMERS } from "../apis";
import Alert from "widgets/alert";
import useForm from "hooks/useFrom";
import validations from "../validations";
import { useStylesApp } from "hooks/useStyles";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import esLocale from "date-fns/locale/es";

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

/**
 * @author {Rolando_Cachipuendo}
 * @param {Object} costumer
 */
const EditUserBtn = ({ costumer, updateView }) => {
  const [open, setOpen] = useState(false);
  const classesGlobal = useStylesGlobal();
  const [updateCostumer, serUpdateCostumer] = useState(costumer);
  const [vacuna, setVacuna] = useState({
    fechaVacuna: "2022-04-04T13:35:53.767Z",
    idVacuna: 0,
    numDosisVacuna: 0,
    tipoVacuna: ""
  })
  const [openLoader, setOpenLoader] = useState(false);
  const classes = useStyles();
  const classesApp = useStylesApp();
  const { enqueueSnackbar } = useSnackbar();
  const [msgError, setMsg] = useState({ show: false, msg: null, type: null });

  const [fechaNacimientoPersona, setFechaNacimientoPersona] = useState(new Date());

  const existError = () => { };

  const handleSave = async () => {
    setOpenLoader(true);
    let request = generarObjetoUpdate();
    await clientLocal
      .put(
        API_PUT_LOCAL_UPDATE_EMP,
        request
      )
      .then((response) => {
        if (response.status >= 200 && response.status <= 301) {
          enqueueSnackbar("empleado editado.", {
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
            setMsg({ show: true, msg: "No se pudo actualizar el cliente." });
          } else if (exception.response.status === 404) {
            setMsg({
              show: true,
              msg: "No se encontró el cliente a actualizar.",
            });
          } else {
            setMsg({
              show: true,
              msg:
                "Error al registrar el usuario. Contáctese con el administrador del Sistema.",
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

  const { errors, handleSubmit, getObject } = useForm(
    handleSave,
    validations.editCostumer,
    existError
  );


  const handleClickOpen = () => {
    setOpen(true);
    serUpdateCostumer(costumer);
    getObject(costumer);
    cleanErrors();
  };

  const cleanErrors = () => {
    errors.nombresPersona = null;
    errors.correoPersona = null;
    errors.celularPersona = null;
    errors.direccionDomicilioPersona = null;
  };

  const handleClose = () => {
    setOpen(false);
  };

  function closeAlert() {
    setMsg({ show: false });
  }

  const handleChangeUser = (event) => {
    serUpdateCostumer({
      ...updateCostumer,
      [event.target.name]: event.target.value,
    });

    getObject({
      ...updateCostumer,
      [event.target.name]: event.target.value,
    });
  };

  const generarObjetoUpdate = () => {
    if (updateCostumer.estadoVacunacionPersona) {
      return ({
        empleado: updateCostumer,
        vacuna: vacuna
      })
    } else {
      return ({
        empleado: updateCostumer
      })
    }
  }

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
        <DialogTitle id="max-width-dialog-title">Editar Empleado</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <label>
                  Los campos marcados con (
                  <font color={palette.error.main}> *</font> ) son obligatorios:
                </label>
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
              </Grid>
              <Grid item xs={12} md={3}>
                Identificación:
              </Grid>
              <Grid item xs={12} md={4}>
                <input
                  value={updateCostumer.cedulaPersona}
                  className="form-control is-valid"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={3}>
                Nombre: <font color={palette.error.main}>*</font>
              </Grid>
              <Grid item xs={12} md={4} className={classes.divInfoUser}>
                <input
                  type="text"
                  className={
                    errors.nombresPersona ? "form-control is-invalid" : "form-control"
                  }
                  value={updateCostumer.nombresPersona}
                  name="nombresPersona"
                  onChange={handleChangeUser}
                  autoComplete="off"
                />
                {errors.nombresPersona ? (
                  <p className={classesApp.errorLetters}>{errors.nombresPersona}</p>
                ) : null}
              </Grid>
              <Grid item xs={12} md={1} className={classes.divlabel}>
                Correo: <font color={palette.error.main}>*</font>
              </Grid>
              <Grid item xs={12} md={4} className={classes.divInfoUser}>
                <input
                  type="text"
                  className={
                    errors.correoPersona ? "form-control is-invalid" : "form-control"
                  }
                  value={updateCostumer.correoPersona}
                  name="correoPersona"
                  onChange={handleChangeUser}
                  autoComplete="off"
                />
                {errors.correoPersona ? (
                  <p className={classesApp.errorLetters}>{errors.correoPersona}</p>
                ) : null}
              </Grid>
              <Grid item sx={12} md={3} className={classes.divlabel}>
                Dirección:
              </Grid>
              <Grid item sx={12} md={4} className={classes.divInfoUser}>
                <input
                  type="text"
                  className={
                    errors.direccionDomicilioPersona
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={updateCostumer.direccionDomicilioPersona}
                  name="direccionDomicilioPersona"
                  onChange={handleChangeUser}
                  autoComplete="off"
                />
                {errors.direccionDomicilioPersona ? (
                  <p className={classesApp.errorLetters}>{errors.direccionDomicilioPersona}</p>
                ) : null}
              </Grid>
              <Grid item sx={12} md={1}>
                Teléfono:
              </Grid>
              <Grid item sx={12} md={4}>
                <input
                  type="number"
                  className={
                    errors.celularPersona ? "form-control is-invalid" : "form-control"
                  }
                  value={updateCostumer.celularPersona}
                  name="celularPersona"
                  onChange={handleChangeUser}
                  autoComplete="off"
                />
                {errors.celularPersona ? (
                  <p className={classesApp.errorLetters}>{errors.celularPersona}</p>
                ) : null}
              </Grid>
              <Grid item xs={12} md={4} className={classes.divForm}>
                <label>Fecha de Nacimiento: <font color={palette.error.main}>*</font></label>
              </Grid>
              <Grid item xs={12} md={8} >
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                  <DatePicker
                    className={fechaNacimientoPersona ? "form-control  is-valid" : "form-control "}
                    disableToolbar
                    autoOk
                    disableFuture
                    //minDate={minDate1}
                    InputAdornmentProps={{ position: "start" }}
                    variant="dialog"
                    inputVariant="outlined"
                    cancelLabel="Cancelar"
                    okLabel="Seleccionar"
                    invalidDateMessage="Formato inválido."
                    format='dd-MM-yyyy'
                    name='fechaNacimientoPersona'
                    value={fechaNacimientoPersona}
                    onChange={setFechaNacimientoPersona}
                  />
                </MuiPickersUtilsProvider>
                {errors.fechaNacimientoPersona === true ?
                  null
                  :
                  <p className={classesApp.errorLetters}>seleccione la fecha</p>
                }
              </Grid>

              <Grid container spacing={3} justify="center">
                <Grid item md={12} xs={12}>
                  <Divider />
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classesGlobal.marginButton}
                >
                  Guardar
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
};

export default EditUserBtn;
