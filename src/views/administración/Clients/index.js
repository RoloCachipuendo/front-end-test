import React, { useState, useEffect } from "react";
import { Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { getRUCEmpresa } from "redux/actions/userActions";
//componentes del sistema
import TablePaginated from "widgets/Tables/TablePaginated";
import TableSimple from "widgets/Tables/TableSimple";
import { API_GET_ALL_COSTUMER, API_GET_SEARCH_COSTUMERS, API_LOCAL_GET_ALL_EMP, API_LOCAL_GET_BUSCAR } from "./apis";
import clientBackend, { clientLocal } from "configurations/axios";
import tableStyle from "configurations/styles/table";
import AddCostumerBtn from "./Buttons/AddCostumer";
import EditCostumerBtn from "./Buttons/EditCostumer";
import { CardGeneric } from "../components/CardGeneric";
import AltaCustomer from "./Buttons/AltaCustomer";
import SearcEmp from "./Froms/SearchEmp";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "35px",
    paddingBottom: "7%",
    flexGrow: 1,
    paddingLeft: "3%",
    paddingRight: "3%",
  },
  headerBottons: {
    padding: "0.5%",
  },
  loader:{
    display:"flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "300px"
  }
}));

const Home = () => {
  const tokenUser = useSelector((state) => state.user.tk);

  const classesView = useStyles();
  const [update, setUpdate] = useState(0);
  const [foundCostumers, setFoundCostumers] = useState([]);
  const [paramSearch, setParamSearch] = useState("");
  const columns = [
    {
      title: "Identificación",
      field: "cedulaPersona",
      cellStyle: tableStyle.cellTable,
      width: "8%",
    },
    {
      title: "Nombres",
      field: "nombresPersona",
      cellStyle: tableStyle.cellLeft,
      width: "25%",
    },
    {
      title: "Apellidos",
      field: "apellidosPersona",
      cellStyle: tableStyle.cellTable,
      width: "7%",
    },
      
    {
      title: "Correo",
      field: "correoPersona",
      cellStyle: tableStyle.cellLeft,
      width: "17%",
    },
    {
      title: "Editar",
      cellStyle: tableStyle.cellTable,
      width: "3%",
      render: (rowData) => (
        <EditCostumerBtn costumer={rowData} updateView={reload} />
      ),
    },
    {
      title: "Dar Alta",
      cellStyle: tableStyle.cellTable,
      width: "3%",
      render: (rowData) => (
        <AltaCustomer costumer={rowData} updateView={reload} />
      ),
    },
  ];

  const getParam = (data) => {
    setParamSearch(data);
    if (data.length > 0) {
      searchCostumer(data);
    } else {
      reload();
    }
  };

  const requestConfig = {
    uri: API_LOCAL_GET_ALL_EMP,
    metodo: "get",
    body: null,
    page: 0,
    elementos: 15,
    sort: "fechaRegistro,desc",
  };

  const reload = () => {
    setUpdate(1);
  };

  useEffect(() => {
    if (update === 1) {
      setUpdate(0);
    }
  }, [update]);

  const searchCostumer = async (param) => {
    setUpdate(3);
    await clientLocal
      .get(
        API_LOCAL_GET_BUSCAR +
          param
      )
      .then((response) => {
        if (response.status === 200) {
          setFoundCostumers(response.data);
          setUpdate(2);
        }
      })
      .catch((exception) => {
        console.error({ exception });
      });
  };

  

  const renderTable = () => {
    switch (update) {
      case 0:
        return (
          <TablePaginated
            title=""
            columns={columns}
            requestConfig={requestConfig}
          />
        );

      case 1:
      case 3:
        return (
          <div className={classesView.loader}>
            <CircularProgress />
          </div>
        );
      case 2:
        return (
          <TableSimple
            columns={columns}
            data={foundCostumers}
            title=""
            numberRowsPerPage={15}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className={classesView.root}>
      <CardGeneric>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <AddCostumerBtn updateView={reload} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} md={9} className={classesView.headerBottons}>
            <SearcEmp backupParam={paramSearch} sendData={getParam} />
          </Grid>
        </Grid>
      </CardGeneric>
      {renderTable()}
    </div>
  );
};

export default Home;
