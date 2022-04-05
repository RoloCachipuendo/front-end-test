import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

export const palette = {
  primary: {
    light: "#002071",
    main: "#006BB4",
    dark: "#0d46a0",
    contrastText: "#FFFFFF",
    menuHeader: "#3c3a3a",
    titleCard: "#3c3a3abf",
    borderCell: "rgba(81,81,81,1)",
  },
  secondary: {
    light: "#ff7961",
    main: "#f44336",
    dark: "#ba000d",
    contrastText: "#FFFFFF",
  },
  error: {
    light: "#ffcdd2",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#FFFFFF",
    base: "#ffebee",
  },
  warning: {
    light: "#ffb74d",
    main: "#ff9800",
    dark: "#f57c00",
    contrastText: "#FFFFFF",
    base: "#fffde7",
  },
  info: {
    light: "#bbdefb",
    main: "#1e88e5",
    dark: "#0d47a1",
    contrastText: "#0d47a1",
    base: "#e3f2fd",
  },
  success: {
    light: "#e0f2f1",
    main: "#4caf50",
    dark: "#388e3c",
    contrastText: "#ffffff",
    base: "#e8f5e9",
  },
  base: {
    main: "#E4E4E4",
  },
};

export const colorHeader1 = "rgb(59 58 58)";

export const useStylesGlobal = makeStyles((theme) => ({
  button: {
    width: "25%",
  },
  paperHeader: {
    borderColor: palette.primary.main,
    borderStyle: "solid",
    borderWidth: "0px",
    borderRadius: "6px",
    width: "100%",
    background: "#FFFFFF",
  },
  titleHeader: {
    textAlign: "center",
    color: "black",
    marginTop: "5px",
    fontFamily: "Open Sans",
  },
  cabecera: {
    background: "#006BB4",
    padding: "0px",
    color: "white",
    width: "100%",
    borderRadius: "6px 6px 0px 0px",
    height: "10px",
  },
  containerForm: {
    padding: "10px",
  },
  containerRoot: {
    display: "flex",
    padding: "0px",
    flexGrow: "1px",
    flexWrap: "wrap",
  },
  rootDiv: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "8px",
    boxShadow: "5px 3px 3px #aaaaaa",
    marginTop: "0.5%",
    marginBottom: "1%",
    paddingBottom: "0.5%",
    paddingLeft: "0%",
    marginRight: "1%",
  },
  select: {
    width: "100%",
  },
  itemContainer: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "8px",
    boxShadow: "5px 3px 3px #aaaaaa",
    marginTop: "0.5%",
    marginBottom: "1%",
    paddingBottom: "0.5%",
    margin: "8px",
    paddingLeft: "0%",
  },
  titleCard: {
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(14),
    color: palette.primary.titleCard,
  },
  click: {
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(14),
    color: palette.primary.main,
    cursor: "pointer",
  },
  card: {
    width: "100%",
    marginBottom: "1%",
  },
  marginButton: {
    marginRight: "1%",
    marginLeft: "1%",
    marginBottom: "2%",
  },
  contInput: {
    textAlign: "end",
    display: "block",
    width: "100%",
    height: "calc(1.5em + .75rem + 2px)",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#495057",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  },
  backdrop: {
    zIndex: "9000",
    color: "#fff",
  },
}));

const defaultTheme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    h2: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    h3: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 14,
    },
    h4: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    h5: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    h6: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 16,
    },
    subtitle1: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    subtitle2: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    body1: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
    body2: {
      fontFamily: ["Arial", "sans-serif"].join(","),
      fontSize: 12,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: palette,
  props: {
    MuiButton: {
      size: "medium",
    },
    MuiFilledInput: {
      margin: "dense",
    },
    MuiFormControl: {
      margin: "dense",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: "dense",
    },
    MuiFab: {
      size: "small",
    },
    MuiTable: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
    },
    MuiToolbar: {
      variant: "dense",
    },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        paddingTop: "0px",
        paddingBottom: "0px",
        display: "table-cell",
      },
    },
    MuiIconButton: {
      sizeSmall: {
        // Adjust spacing to reach minimal touch target hitbox
        marginLeft: 4,
        marginRight: 4,
        padding: 12,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "none",
      },
    },
    MuiButton: {
      outlinedPrimary: {
        textTransform: "none",
        "&:hover": {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        },
      },
      containedPrimary: {
        borderWidth: "0px",
        textTransform: "none",
      },
      outlinedSecondary: {
        textTransform: "none",
        "&:hover": {
          backgroundColor: palette.secondary.main,
          color: palette.primary.contrastText,
        },
      },
      containedSecondary: {
        borderWidth: "0px",
        textTransform: "none",
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: "#33b5e5",
        color: palette.primary.contrastText,
        paddingBottom: "1%",
        paddingTop: "1%",
        paddingLeft: "2%",
        paddingRight: "1%",
      },
    },
    MuiTab: {
      textColorPrimary: {
        Mui: {
          selected: {
            color: palette.primary.contrastText,
          },
        },
      },
    },
    MuiCardHeader: {
      title: {
        fontSize: "16px",
        fontSamily: "Arial, sans- serif",
        fontWeight: "400",
        lineHeight: "1.43",
        letterSpacing: " 0.01071em",
      },
      root: {
        textAlign: "center",
      },
    },
    MuiFormControl: {
      marginDense: {
        marginTop: "0px",
        marginBottom: "0px",
      },
    },
    SnackbarItem: {
      variantSuccess: {
        color: palette.success.main,
        borderColor: palette.success.main,
        backgroundColor: "#FFFFFF",
        "&:hover": {
          backgroundColor: palette.success.light,
        },
      },
    },
    MuiSnackbarContent: {
      message: {
        padding: "8px 0",
        display: "flex",
        flex: 3,
      },
    },
    MuiOutlinedInput: {
      root: {
        position: "relative",
        borderRadius: "20px",
      },
    },
    MuiDivider: {
      vertical: {
        width: "1px",
        height: "100%",
        margin: "3%",
      },
    },

  },
});

export default defaultTheme;

export const msmSwalInformacion = (titulo, mensaje) => {
  return Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "info",
    confirmButtonText: "Aceptar ",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
export const msmSwalExito = (titulo, mensaje,
  CancelButton = { show: false, text: "", style: "btn btn-outline-primary ml-2" },
  confirmButton = { show: true, text: "Aceptar", style: "btn btn-primary" }
) => {
  return Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "success",
    customClass: {
      confirmButton: (typeof confirmButton.style === "string") ? confirmButton.style : 'btn btn-primary',
      cancelButton: (typeof CancelButton.style === "string") ? CancelButton.style : 'btn btn-outline-primary ml-2'
    },
    confirmButtonText: (typeof confirmButton.text === "string") ? confirmButton.text : "Aceptar ",
    showConfirmButton: (typeof confirmButton.show === "boolean") ? confirmButton.show : true,
    showCancelButton: (typeof CancelButton.show === "boolean") ? CancelButton.show : false,
    cancelButtonText: (typeof CancelButton.text === "string") ? CancelButton.text : "",
    buttonsStyling: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

export const msmSwalError = (titulo, mensaje) => {
  return Swal.fire({
    icon: "error",
    title: titulo,
    text: mensaje,
    confirmButtonText: "Aceptar ",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
//background-color: rgba(0, 0, 0, 0.5);  arreglar en el menu
export const styleInput = (error, value) => {
  if (value || error) {
    if (error) {
      return "form-control is-invalid";
    } else {
      return "form-control is-valid";
    }
  } else {
    return "form-control";
  }
};
