import React, { useState, useEffect } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
//import { palette } from '../../configurations/styles/theme';
import { palette } from "../../configurations/styles/theme";
import TablePaginationActions from "./Pagination";
import { Grid, TablePagination } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerTable:{
    flexGrow: 1,
    width: "100%"
  },
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
  header: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buscador: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  backdrop: {
    marginBottom: "10%",
    marginTop: "10%",
  },
  paginacion: {
    color: palette.primary.main,
  },
  botonesFooter: {
    margin: "1%",
  },
  botonesHeader: {
    marginTop: "0.5%",
    marginLeft: "2%",
  },
}));

const initialContent = (data, numberRowsPerPage) => {
  let pages = [];
  let pageNumber = 0;
  let dataPerPage = [];
  let numberElement = 0;
  for (let i = 0; i < data.length; i++) {
    if (numberElement === numberRowsPerPage) {
      pages.push({
        pageNumber: pageNumber,
        data: dataPerPage,
        numberOfElement: numberElement,
      });
      dataPerPage = [];
      numberElement = 0;
      pageNumber = pageNumber + 1;
    }

    dataPerPage.push(data[i]);
    numberElement = numberElement + 1;

    if (i === data.length - 1) {
      pages.push({
        pageNumber: pageNumber,
        data: dataPerPage,
        numberOfElement: numberElement,
      });
    }
  }
  if (pages.length === 0) {
    return {
      pages: [{ pageNumber: 0, data: [], numberOfElement: 0 }],
      totalPages: 1,
    };
  } else {
    return { pages: pages, totalPages: pageNumber };
  }
};

/**
 * @author Rolando_Cachipuendo
 * @param {Object} Data  [{}]
 * @param {Array} columns [{}]
 * @param {String} title titulo de la tabla (opcional)
 * @param {Boolean} buscar valor por defecto false
 */
export default function TableSimple({
  columns,
  data,
  title,
  buscar = false,
  BotonesFooter,
  BotonesHeader,
  numberRowsPerPage = 10,
}) {
  const classes = useStyles();
  const [content, setContent] = useState(
    initialContent(data, numberRowsPerPage)
  );
  const [updateTable, setUpdateTable] = useState(false);
  const letterColor = palette.primary.main;
  const [rowsPerPage, setRows] = useState(content.pages[0]);

  const handleChangePage = (event, newPage) => {
    setRows(content.pages.filter((item) => item.pageNumber === newPage));
    setUpdateTable(!updateTable);
  };

  const handleChangeRowsPerPage = (event) => {
    setContent(initialContent(data, event.target.value));
  };

  useEffect(() => {
    setRows(content.pages[0]);
  }, [updateTable]);

  return (
    
      <MaterialTable
        title={title}
        columns={columns}
        data={rowsPerPage.data}
        localization={{
          toolbar: {
            addRemoveColumns: "Agregue o elimine columnas",
            nRowsSelected: " Filas Seleccionadas",
            searchTooltip: "Buscar",
            searchPlaceholder: "Buscar ...",
          },
          header: {
            actions: "",
          },
          body: {
            emptyDataSourceMessage: "No existen datos",
            addTooltip: "Agregar ",
            deleteTooltip: "Borrar ",
            editTooltip: "Editar",
            editRow: {
              deleteText: "¿Esta Seguro que deseea eliminarlo?",
              cancelTooltip: "Cancelar",
              saveTooltip: "Aceptar",
            },
          },
        }}
        options={{
          search: buscar,
          sorting: false,
          headerStyle: {
            backgroundColor: letterColor,
            color: "#FFFFFF",
            borderStyle: "solid",
            borderColor: letterColor,
            borderWidth: "1px",
            alignItems: "center",
            textAlign: "center",
            padding: "0px",
          },
          rowStyle: {
            borderStyle: "solid",
            borderColor: letterColor,
            borderWidth: "1px 1px ",
            alignContent: "center",
            textAlign: "center",
          },
        }}
        components={{
          Pagination: (props) => (
            <div>
              <div align="center" aria-label="paginacion">
                <TablePagination
                  rowsPerPageOptions={[3, 5, 10]}
                  colSpan={10}
                  count={rowsPerPage.data.length}
                  rowsPerPage={rowsPerPage.numberOfElement}
                  page={rowsPerPage.pageNumber}
                  totalPages={content.totalPage}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  labelRowsPerPage="Filas por página: "
                  className={classes.paginacion}
                  labelDisplayedRows={({ from, to, count }) =>
                    `${from}-${to} de ${count}`
                  }
                />
              </div>
              <div align="center" className={classes.botonesFooter}>
                {BotonesFooter ? BotonesFooter : null}
              </div>
            </div>
          ),
          Toolbar: (props) =>
            buscar ? (
              <Grid className={classes.header} container spacing={0}>
                <Grid align="left" xs={3} className={classes.botonesHeader}>
                  {BotonesHeader}
                </Grid>
                <Grid xs></Grid>
                <Grid className={classes.buscador} align="right" xs={3}>
                  <MTableToolbar {...props} align="right" />
                </Grid>
              </Grid>
            ) : (
              <Grid className={classes.header} container spacing={0}>
                <Grid align="left" xs={12} className={classes.botonesHeader}>
                  {BotonesHeader ? BotonesHeader() : null}
                </Grid>
              </Grid>
            ),
        }}
      />
  );
}
