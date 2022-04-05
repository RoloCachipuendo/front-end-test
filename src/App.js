import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//componentes para eliminar snackbar
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close"; //estilos
import "./assets/css/base.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme, { palette } from "./configurations/styles/theme";
import notificationStyles from "./configurations/styles/notifications";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./views/Login";
import Footer from "./widgets/Footer";
//redux
import store from "./redux/store";
import { Provider } from "react-redux";

//notificaciones
import { SnackbarProvider } from "notistack";
import Home from "views/administración/Clients";
import CompanyForm from "views/administración/UserAccount/Forms/CompanyForm";

const useStyles = makeStyles({
  ...notificationStyles,
});

function App() {
  const classes = useStyles();

  // configuracion de las notificaciones del sistema
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <SnackbarProvider
            maxSnack={15}
            classes={{
              variantSuccess: classes.successNotification,
              variantError: classes.error,
              variantWarning: classes.warning,
              variantInfo: classes.info,
            }}
            ref={notistackRef}
            action={(key) => (
              <IconButton onClick={onClickDismiss(key)}>
                <CloseIcon
                  style={{ color: palette.error.main }}
                  fontSize="small"
                />
              </IconButton>
            )}
          >
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              {<Route exact path="/admin" component={Home} />}
              {<Route exact path="/user" component={CompanyForm} />}
            </Switch>
          </SnackbarProvider>
          <Footer />
        </Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
