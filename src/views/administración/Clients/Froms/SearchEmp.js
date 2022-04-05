import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  FormControl,
  NativeSelect,
  InputBase,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PageviewIcon from "@material-ui/icons/Pageview";
import { palette, useStylesGlobal } from "configurations/styles/theme";
import Swal from "sweetalert2";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { estadoVacuna, typeVacuna } from "configurations/typeVoucher";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "0.5%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    color: palette.primary.menuHeader,
  },
  accordionSumary: {
    backgroundColor: palette.primary.light,
  },
  margin: {
    margin: theme.spacing(0),
    width: "100%",
    marginBottom: "1%",
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

export default function SearcEmp({
  backupParam,
  sendData
}) {
  //export default function SearcVoucher({ update, setUpdate, requestConfigSeacrh, setfoundVouchers }) {

  const classes = useStyles();
  const classesGlobal = useStylesGlobal();
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [sequential, setSequential] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [type, setType] = useState("");
  const [estado, setEstado] = useState("");
  //Para utilizar la fecha

  const validationInputs = () => {
    //setParamSearch("");
    let cadena = "";
    if (
      dateStart.trim() === "" &&
      dateEnd.trim() === "" &&
      estado.trim() === "" &&
      identifier.trim() === "" &&
      type.trim() === ""
    ) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Ingrese al menos un parámetro",
        showConfirmButton: false,
        timer: 3500,
      });
    } else {
      if (dateStart.trim() !== "" && dateEnd.trim() !== "") {
        cadena = `${cadena}&fechaInicial=${dateStart}&fechaFinal=${dateEnd}`;
      }
      if (estado.trim() !== "") {
        cadena = `${cadena}&estadoVacuna=${estado}`;
      }

      if (type.trim() !== "") {
        cadena = `${cadena}&tipoVacuna=${type}`;
      }
    }

    
    sendData(cadena);
  };

  const cleanInputs = () => {
    setDateStart("");
    setDateEnd("");
    setEstado("");
    setIdentifier("");
    setType("");
    //setUpdate(2);
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <label className={classesGlobal.titleCard}>Búsqueda avanzada: </label>
          <label className={classesGlobal.click}><label>{" "}</label> (Clic Aquí)</label>
        </AccordionSummary>
        <AccordionDetails>
          <from style={{ width: "100%" }}>
            <Grid container spacing={1} justify="center">
              <Grid item xs={2}>
                <label>Fecha Inicial: </label>
              </Grid>
              <Grid item xs={4}>
                <input
                  type="date"
                  className="form-control"
                  name="dateStart"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}>
                <label>Fecha Final:</label>
              </Grid>
              <Grid item xs={4}>
                <input
                  type="date"
                  className="form-control"
                  name="dateEnd"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </Grid>



              <Grid item xs={2}>
                <label>Estado Vacuna:</label>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="form-control">
                  <NativeSelect
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    input={<BootstrapInput />}
                  >
                    <option aria-label="None" value="">
                      --Seleccione--
                    </option>
                    {estadoVacuna.map((voucher) => (
                      <option key={voucher.CODIGO} value={voucher.ESTADO}>
                        {voucher.NOMBRE}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>

              <Grid item xs={2}>
                <label>Tipo Vacuna:</label>
              </Grid>
              <Grid item xs={4}>
                <FormControl className="form-control">
                  <NativeSelect
                    value={type}
                    onChange={(e) => setType(e.target.value)}
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
              </Grid>

              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  align="center"
                  startIcon={<PageviewIcon />}
                  onClick={() => validationInputs()}
                >
                  {" "}
                  Buscar
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  align="center"
                  startIcon={<ClearAllIcon />}
                  onClick={() => cleanInputs()}
                >
                  {" "}
                  Limpiar / Mostrar Todos
                </Button>
              </Grid>
            </Grid>
          </from>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
