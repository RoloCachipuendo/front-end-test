import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { palette } from "configurations/styles/theme";
import { useSelector } from "react-redux";
import { domainSis } from "configurations/constant";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
  },
  divInfo: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: palette.primary.main,
    display: "flex",
    height: "150px",
    borderRadius: "8px",
    justifyContent: "center",
    alignItems: "center",
    "-webkit-box-shadow": "5px 4px 5px 0px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "5px 4px 5px 0px rgba(0,0,0,0.75)",
    boxShadow: "5px 4px 5px 0px rgba(0,0,0,0.75)",
    marginTop: "3%",
    marginBottom: "2%",
    marginLeft: "3%",
    marginRight: "3%",
    backgroundColor: "#FFF",
  },
  title: {
    color: palette.primary.dark,
  },

  card: {
    marginTop: "0%",
    width: "100%",
    padding: "1%",
    //borderRadius: "16px",
    //borderStyle: "solid",
    //borderWidth: "1px",
    //borderColor: palette.primary.main,
  },
  cardCompany: {
    marginTop: "0%",
    width: "100%",
    padding: "1%",
    //borderRadius: "16px",
    borderStyle: "solid",
    borderWidth: "1px",
    //borderColor: palette.primary.main,
  },
  img: {
    width: "auto",
    minHeight: "100px",
    maxHeight: "150px",
    border: "1px solid  #aaaaaa",
    borderRadius: "8px",
    display: "block",
    margin: "0 auto",
  },
  subtitle: {
    display: "block",
    textAlign: "center",
    fontSize: "18px",
  },
  large: {
    width: '250px',
    height: '70px',
  },
  gridFacturar:{
    display: 'flex',
  }
}));

const Content = () => {
  const classes = useStyles();
  //para definir el logo de acuerdo a la empresa
  const logo=window.location.hostname === domainSis ? "../oYmSinFondo.png" : "../facturar12020.png";
  const { information, loadInfo } = useSelector((state) => state.company);
  return (
    <Grid
      container
      direction="row"
      justify="center"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid container xs={11} sm={11} md={6} xl={4} className={classes.divInfo}>
        <Grid item xs={11} sm={6} md={6} className={classes.gridFacturar} >
            <img src={logo} alt="logo" className={classes.large} />
        </Grid>
      </Grid>
      <Grid item xs={11} sm={11} md={6} xl={4}>
        {loadInfo ? null : (
          <Card className={classes.cardCompany}>
            {information.nombreEmpresa ? (
              <strong className={classes.subtitle}>
                {information.nombreEmpresa}{" "}
              </strong>
            ) : null}
            <hr />
            {information.logoEmpresa ? (
              <>
                <img
                  src={`data:image/png;base64, ${information.logoEmpresa}`}
                  alt="Logo Empresa"
                  className={classes.img}
                />
                <hr />
              </>
            ) : null}

            <CardContent>Bienvenido: {information.nombreUsuario}</CardContent>
            <hr />
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default React.memo(Content);
