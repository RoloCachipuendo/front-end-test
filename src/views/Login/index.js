import React, { Fragment, useState } from "react";
import {
  Grid,
  Button,
  Divider,
  Card,
  TextField,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
//componentes de la Vista
//estilos
import "./login.css";
import { useStyles } from "./styles";
import "./login.css";
import useLogin from "./useLogin";
import { API_LOCAL_LOGIN } from "views/administración/Clients/apis";
import { clientLocal } from "configurations/axios";
import { useSnackbar } from "notistack";
import { setIdUser } from "redux/localStorage";

const Login = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const logo =  "../inv.jpg";
  const {
    handleChange,
    error,
    errorInputs,
    user } = useLogin();
  
  const validateCredenciales = () => {
    if (user.username.trim() === "" || user.password.trim() === "") {
      return false;
    } else
      return true;
  }

  const validateLogin = async () => {
    setOpen(true)
    if (validateCredenciales) {
      let request = { nickUsuario: user.username, claveUsuario: user.password }

      await clientLocal
        .post(API_LOCAL_LOGIN, request)
        .then(response => {
          console.log(response)
          setIdUser(response.data.nickUsuario)
          if (response.data.rol === 'EMP') {
            history.push("/user");
          } else {
            history.push("/admin");
          }

          setOpen(false)

        })
        .catch((exception) => {
          enqueueSnackbar("Las credenciales son erroneas", {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            autoHideDuration: 10000,
          });
          setOpen(false)
          console.error({ exception });
        });

    } else {
      enqueueSnackbar("Debe ingresar el usuario y la contraseña ", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 10000,
      });
      setOpen(false)
    }

  };


  return (

    <Fragment>
      {<Backdrop className={classes.backdrop} open={open} >
        <CircularProgress color="primary" />
      </Backdrop>}


      <Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          className={classes.root}
        >
          <Card className={classes.card}>
            <form onSubmit={validateLogin}>
              {errorInputs ? <p>Ingrese todos los campos</p> : null}
              <Grid
                container
                justify="center"
                align="center"
                direction="row"
                spacing={1}
              >
                <img
                  src={logo}
                  alt="logo"
                  className={classes.large}
                />
              </Grid>
              <br></br>
              <br></br>

              <Divider></Divider>
              <br />
              {error ? (
                <div className="alert alert-danger" role="alert">
                  <label> {error}</label>
                </div>
              ) : null}
              <Grid item md={12}>
                <TextField
                  type="text"
                  classes={{
                    root: classes.input,
                  }}
                  onChange={handleChange}
                  required
                  name="username"
                  autoComplete="off"
                  value={user.username}
                  label="Usuario"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  type="password"
                  classes={{
                    root: classes.input,
                  }}
                  onChange={handleChange}
                  required
                  name="password"
                  value={user.password}
                  label="Contraseña"
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonLogin}
                  onClick={validateLogin}
                  fullWidth
                >
                  Ingresar
                </Button>
              </Grid>
            </form>



            
          </Card>
        </Grid>
      </Grid>


    </Fragment>
  );
};

export default Login;
