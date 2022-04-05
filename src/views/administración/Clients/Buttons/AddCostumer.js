import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Backdrop,
  CircularProgress,
  Divider,
  Checkbox,
} from "@material-ui/core";
//Notificacion errores https://iamhosseindhv.com/notistack/demos#variants
import { useSnackbar } from "notistack";
//componentes del sistema
import { palette, useStylesGlobal } from "configurations/styles/theme";
import { useSelector } from "react-redux";
import { getRUCEmpresa } from "redux/actions/userActions";
import clientBackend, { clientLocal } from "configurations/axios";
import Alert from "widgets/alert";
import useForm from "hooks/useFrom";
import validations from "../validations";
import { API_LOCAL_SAVE_EMP, API_POST_SAVE_COSTUMERS, API_POST_SAVE_PROVAIDER } from "../apis";
import { useStylesApp } from "hooks/useStyles";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(0),
    minWidth: 120,
  },
  radio: {
    display: "-webkit-box",
    marginTop: "0px",
  },
  radioLable: {
    color: palette.primary.main,
    display: "flex",
  },
  radioButton: {
    marginTop: "0px",
    paddingTop: "0px",
  },
  divForm: {
    marginBottom: "1%",
  },
  divInput: {
    marginBottom: "1%",
    paddingRight: "1%",
    paddingLeft: "0.5%",
  },
  divButton: {
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  backdrop: {
    zIndex: theme.zIndex.modal + 999,
    color: palette.primary.main,
  },
}));

const AddUserBtn = ({ updateView }) => {
  const classes = useStyles();
  const classesApp = useStylesApp();
  const classesGlobal = useStylesGlobal();
  const [openLoader, setOpenLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [pasaporteCheck, setPasaporteCheck] = useState("C");
  const userToken = useSelector((state) => state.user.tk);
  const [msgError, setMsg] = useState({ show: false, msg: null, type: null });
  const { enqueueSnackbar } = useSnackbar();
  const [costumer, setCostumer] = useState({
    idEmpresa: userToken ? getRUCEmpresa(userToken) : "0",
  });
  const [isProvaider, setIsProvaider] = useState(false);

  const existError = () => {
    setOpenLoader(false);
  };

 /* const handleSave = async () => {
    await clientBackend
      .post(API_POST_SAVE_COSTUMERS, costumer)
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar(`${costumer.nombresPersona} agregado como empleado.`, {
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
            setMsg({ show: true, msg: "No se pudo almacenar el empleado." });
          } else if (exception.response.status === 404) {
            setMsg({
              show: true,
              msg:
                "No se encontró la empresa enviada para relacionarla con el empleado. ",
            });
          } else if (exception.response.status === 409) {
            setMsg({ show: true, msg: "El empleado ya existe." });
          } else {
            setMsg({
              show: true,
              msg:
                "Error al registrar el empleado. Contáctese con el administrador del Sistema.",
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

      
  };*/

  const handleSave = async () => {
    await clientLocal
      .post(API_LOCAL_SAVE_EMP, costumer)
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          enqueueSnackbar(`${costumer.nombresPersona} agregado como empleado.`, {
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
            setMsg({ show: true, msg: "No se pudo almacenar el empleado." });
          } else if (exception.response.status === 404) {
            setMsg({
              show: true,
              msg:
                "No se encontró la empresa enviada para relacionarla con el empleado. ",
            });
          } else if (exception.response.status === 409) {
            setMsg({ show: true, msg: "El empleado ya existe." });
          } else {
            setMsg({
              show: true,
              msg:
                "Error al registrar el empleado. Contáctese con el administrador del Sistema.",
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
    validations.addCostumer,
    existError
  );

  function closeAlert() {
    setMsg({ show: false });
  }

  const handleClickOpen = () => {
    setOpen(true);
    setCostumer({ idEmpresa: getRUCEmpresa(userToken) });
    setMsg({ show: false, msg: null, type: null });
    errors.cedulaPersona = null;
    errors.nombresPersona = null;
    errors.apellidosPersona = null;
    errors.correoPersona = null;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeCheck = (event) => {
    setPasaporteCheck(event.target.value);
    getObject({
      ...costumer,
      typeDocument: event.target.value,
    });
  };

  const handleChange = (event) => {
    setCostumer({
      ...costumer,
      [event.target.name]: event.target.value,
    });
    getObject({
      ...costumer,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickIsProvaider = event => {
    setIsProvaider(event.target.checked)
  }

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <PersonAddIcon
          style={{ color: palette.primary.contrastText, paddingRight: "3%" }}
          fontSize="small"
        />{" "}
        Agregar Empleado
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle id="max-width-dialog-title">Nuevo Empleado</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(event) => {
              setOpenLoader(true);
              handleSubmit(event);
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item md={12} xs={12}>
                <label>
                  Los campos marcados con ({" "}
                  <font color={palette.error.main}> *</font> ) son obligatorios:
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
              <Grid item md={2} xs={12} className={classes.divForm}>
                <label>
                  Identificación:{" "}
                  <font color={palette.error.main}>*</font>
                </label>
              </Grid>
              <Grid item md={4} xs={12} className={classes.divInput}>
                <input
                  type="text"
                  className={
                    errors.cedulaPersona
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Ej. 1234567890"
                  name="cedulaPersona"
                  value={costumer.cedulaPersona}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.cedulaPersona ? (
                  <p className={classesApp.errorLetters}>
                    {errors.cedulaPersona}
                  </p>
                ) : null}
              </Grid>
              
              <Grid item md={1} xs={12} className={classes.divForm}>
                <label>
                  Nombre: <font color={palette.error.main}>*</font>
                </label>
              </Grid>
              <Grid item md={5} xs={12} className={classes.divInput}>
                <input
                  type="text"
                  className={
                    errors.nombresPersona
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Ej. Juan Mauricio Pérez Calle"
                  name="nombresPersona"
                  value={costumer.nombresPersona}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.nombresPersona ? (
                  <p className={classesApp.errorLetters}>
                    {errors.nombresPersona}
                  </p>
                ) : null}
              </Grid>

              <Grid item md={1} xs={12} className={classes.divForm}>
                <label>
                  Apellido: <font color={palette.error.main}>*</font>
                </label>
              </Grid>
              <Grid item md={5} xs={12} className={classes.divInput}>
                <input
                  type="text"
                  className={
                    errors.apellidosPersona
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Ej. Juan Mauricio Pérez Calle"
                  name="apellidosPersona"
                  value={costumer.apellidosPersona}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.apellidosPersona ? (
                  <p className={classesApp.errorLetters}>
                    {errors.apellidosPersona}
                  </p>
                ) : null}
              </Grid>


              <Grid item md={1} xs={12} className={classes.divForm}>
                <label>
                  Correo: <font color={palette.error.main}>*</font>
                </label>
              </Grid>
              <Grid item md={5} xs={12} className={classes.divInput}>
                <input
                  type="email"
                  className={
                    errors.correoPersona
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Ej. user@ejemplo.com"
                  name="correoPersona"
                  value={costumer.correoPersona}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.correoPersona ? (
                  <p className={classesApp.errorLetters}>
                    {errors.correoPersona}
                  </p>
                ) : null}
              </Grid>
              
              <Grid container spacing={3} justify="center">
                <Grid item md={12} xs={12}>
                  <Divider></Divider>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classesGlobal.marginButton}
                >
                  Agregar
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

export default AddUserBtn;
