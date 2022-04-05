import React, { useState } from "react";
//material-table
import MaterialTable from "material-table";
//material-io
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//axios
import clientBackend, { clientLocal } from "configurations/axios";
//componentes del sistema
import { palette } from "configurations/styles/theme";
import Alert from "../alert";
import ConfigTable from "./configTable";
import HeaderTable from "./HeaderTable";
import FooterTabler from "./FooterTable";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
  },
  grid: {
    flexGrow: 1,
  },
  titulo: {
    padding: "1%",
    borderStyle: "solid",
    borderColor: palette.primary.main,
    borderBottomWidth: "2px",
    borderTopWidth: "1px",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    background: palette.primary.main,
  },
  tabla: {
    padding: "0px",
  },
  backdrop: {
    marginBottom: "10%",
    marginTop: "10%",
  },
}));

const initialTableState = {
  pages: [],
  totalPages: 0,
  totalElements: 0,
  currentPage: 0,
};

const dataNotFoundTableState = {
  pages: [
    {
      content: [],
      numberOfElements: 0,
      pageNumber: 0,
    },
  ],
  totalPages: 0,
  totalElements: 0,
  currentPage: 0,
};

/**
 * @author Rolando_Cachipuendo
 * @version 1.1.0
 * @param {Object} requestConfig  {uri: string, metodo: string,  body: Object, page: number,elementos: number, paginasCargadas: [] }
 * @param {Array} columns [{}]
 * @param {String} title titulo de la tabla (opcional)
 * @param {Number} numeroFilas numeros de filas que tendrá la tabla
 * @param {Component} BotonesFooter recibe un componente para colocarlo en el footer
 * @param {Component} BotonesHeader recibe un componente para colocarlo en el header
 * @param {Boolean} seleccion valor por defecto false
 * @param {Boolean} buscar valor por defecto false
 */
const TanlePaginated = ({
  columns,
  requestConfig,
  title,
  BotonesFooter,
  BotonesHeader,
  seleccion = false,
  buscar = false,
}) => {
  const classes = useStyles();
  //contiene todos los datos de la tabla
  const [tabla, setTabla] = useState(initialTableState);
  const [msgError, setMsg] = useState({ show: false, msg: null, type: null });
  const [request, setRequest] = useState(requestConfig);
  const [update, setUpdate] = useState(0);

  const handleChangePage = (event, newPage) => {
    //Se verifica que la pagina solicitada por el usuario no este en el state
    const page = tabla.pages.find((item) => item.pageNumber === newPage);
    if (!page) {
      setRequest({ ...request, page: request.page + 1 });
      setUpdate(0);
    } else {
      setTabla({ ...tabla, currentPage: newPage });
      setUpdate(2);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setTabla(initialTableState);
    setRequest({ ...request, elementos: event.target.value, page: 0 });
    setUpdate(0);
  };

  const insertStateTable = (data) => {
    setTabla({
      pages: [
        ...tabla.pages,
        {
          content: data.content,
          numberOfElements: data.numberOfElements,
          pageNumber: data.number,
        },
      ],
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      currentPage: data.number,
    });
    setUpdate(2);
  };

  function closeAlert() {
    setMsg({ show: false });
  }

  const obtenerDatos = async (query) => {
    if (query.metodo === "get") {
      await clientLocal
        .get(
          query.uri +
            "?page=" +
            query.page +
            "&size=" +
            query.elementos 
        )
        .then((result) => {
          if (result.status === 200) {
            insertStateTable(result.data);
          }
        })
        .catch((error) => {
          const exception = { error };
          if (typeof exception.error.response === "undefined") {
            setMsg({
              show: true,
              msg: "Ocurrio un problema en la red al consultar los datos",
              type: "error",
            });
          }
          setTabla(dataNotFoundTableState);
          setUpdate(2);
        });
    }
  };

  const RenderTable = () => {
    if (update === 0) {
      setUpdate(1);
      obtenerDatos(request);
    }
    switch (update) {
      case 0:
      case 1:
        return (
          <div align="center" className={classes.backdrop}>
            <CircularProgress />
          </div>
        );
      case 2:
        const page = tabla.pages.find(
          (item) => item.pageNumber === tabla.currentPage
        );
        return (
          <MaterialTable
            title=""
            columns={columns}
            data={page.content}
            localization={ConfigTable.localization}
            options={ConfigTable.optionsDefaul(
              page.numberOfElements,
              buscar,
              false,
              seleccion
            )}
            components={{
              Pagination: (props) => (
                <FooterTabler
                  totalElements={tabla.totalElements}
                  rowsPerPage={request.elementos}
                  pageNumber={page.pageNumber}
                  totalPages={tabla.totalPages}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  BotonesFooter={BotonesFooter}
                />
              ),
              Toolbar: (props) => (
                <HeaderTable
                  showInputSearch={buscar}
                  ComponentsHeader={BotonesHeader}
                  props={props}
                />
              ),
            }}
          />
        );
      default:
        return (
          <div align="center" className={classes.backdrop}>
            <CircularProgress />
          </div>
        );
    }
  };

  return (
    <Grid container spacing={0} className={classes.root}>
      {!title ? null : (
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="p"
            align="center"
            className={classes.titulo}
          >
            <font color="#FFFFFF"> {title} </font>
          </Typography>
        </Grid>
      )}
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
      <Grid item xs={12} className={classes.tabla}>
        <RenderTable />
      </Grid>
    </Grid>
  );
};

export default React.memo(TanlePaginated);
