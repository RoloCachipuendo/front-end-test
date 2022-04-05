import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import {
  BtnDialog,
  DialogNotification,
  EnumErrorsNotifications,
} from "widgets/Notifications";
import {isFirstRenderHome,setFlagRenderHome, getFlagShowDialogCertificate,} from "redux/sessionstorage";
import UploadCertificateDialog from "widgets/UploadCertificateDialog";

import { palette } from "configurations/styles/theme";
import typesAlert from "widgets/alert/types";
import { getRUCEmpresa } from "redux/actions/userActions";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    padding: "2%",
    display: "flex",
    alignItems: "center",
  },
  cardError: {
    minWidth: "90%",
    maxWidth: "100%",
    display: "flex",
    backgroundColor: palette.warning.light,
    alignItems: "center",
  },
  cardWarning: {
    minWidth: "90%",
    maxWidth: "100%",
    display: "flex",
    backgroundColor: palette.warning.light,
    alignItems: "center",
    padding: "10px",
  },
  cardInfo: {
    minWidth: "90%",
    maxWidth: "100%",
    display: "flex",
    backgroundColor: palette.warning.light,
    alignItems: "center",
  },
  cardSuccess: {
    minWidth: "90%",
    maxWidth: "100%",
    display: "flex",
    backgroundColor: palette.warning.light,
    alignItems: "center",
  },
  numNotifications: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: "5px",
  },
}));

const checkIfFirstRender = (lstNotifications = []) => {
  return isFirstRenderHome() && lstNotifications.length > 0;
};

const getNotificationsByType = (lstNotifications, type) => {
  return lstNotifications.filter((item) => item.type === type);
};

const Notifications = () => {
  const classes = useStyles();
  const tokenUser = useSelector((state) => state.user.tk);
  const { lstNotifications, stateUser } = useSelector(
    (state) => state.notifications
  );
  const [openDialog, setOpen] = useState(checkIfFirstRender(lstNotifications));
  const noticationWarn = getNotificationsByType(
    lstNotifications,
    typesAlert.warning
  );

  const noticationError = getNotificationsByType(
    lstNotifications,
    typesAlert.error
  );

  const noticationInfo = getNotificationsByType(
    lstNotifications,
    typesAlert.info
  );

  const noticationSuccess = getNotificationsByType(
    lstNotifications,
    typesAlert.success
  );

  const handleCloseDialog = () => {
    setOpen(false);
    setFlagRenderHome("N");
  };

  let openDialogCertificate = getFlagShowDialogCertificate();
  const errorCertificate = lstNotifications.find(
    (item) => item.keyword === EnumErrorsNotifications.sinCertificado
  );
  


  if (
    stateUser === "PRI" &&
    openDialogCertificate &&
    errorCertificate !== null
  ) {
    
    return (
      <UploadCertificateDialog
        openDialog={openDialogCertificate}
        idempresa={tokenUser ? getRUCEmpresa(tokenUser) : ""}
      />
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
      className={classes.root}
    >
      {noticationError.length > 0 ? (
        <Grid item xs={6} sm={6} md={2}>
          <BtnDialog
            titleBtn={`Alertas ${noticationError.length}`}
            typeNotification={typesAlert.error}
          />
        </Grid>
      ) : null}

      {noticationWarn.length > 0 ? (
        <Grid item xs={6} sm={6} md={2}>
          <BtnDialog
            titleBtn={`Advertencias ${noticationWarn.length}`}
            typeNotification={typesAlert.warning}
          />
        </Grid>
      ) : null}

      {noticationInfo.length > 0 ? (
        <Grid item xs={6} sm={6} md={2}>
          <BtnDialog
            titleBtn={`Eventos ${noticationInfo.length}`}
            typeNotification={typesAlert.info}
          />
        </Grid>
      ) : null}

      {noticationSuccess.length > 0 ? (
        <Grid item xs={6} sm={6} md={2}>
          <BtnDialog
            titleBtn={`Noticias ${noticationInfo.length}`}
            typeNotification={typesAlert.info}
          />
        </Grid>
      ) : null}
      <DialogNotification
        open={openDialog}
        onClose={handleCloseDialog}
        notifications={lstNotifications}
      />
    </Grid>
  );
};

export default React.memo(Notifications);
