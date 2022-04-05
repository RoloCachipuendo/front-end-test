
import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "2%",
    },
    registro: {
        textAlign: "center",
        justifyContent: "space-around",
    },
    formLogin: {
        padding: "1%",
        justifyContent: "center",
        display: "flex",
    },
    btnResetPass: {
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    buttonLogin: {
        borderRadius: "20px",
        backgroundColor: "#00e676",
        color: "white",
        marginBottom: "20px",
    },
    titleLogin: {
        color: "black",
        fontFamily: "Arial",
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
    },
    large: {
        width: "200px",
        height: "55px",
    },
    card: {
        padding: "2%",
        borderRadius: "0px 0px 0px 25px",
        width: "320px",
        height: "530px",
    },
    inputLogin: {
        borderRadius: "5%",
        width: "100%",
        marginBottom: "15px",
    },
    link: {
        fontSize: "13px",
        marginBottom: "20px",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
    },
    questionLogin: {
        marginTop: "20px",
        textAlign: "center",
    },
    media: {
        height: 75,
    },
    input: {
        //position: 'relative',
        borderRadius: "10px",
        width: "100%",
        marginBottom: "15px",
    },
    butonRecovery: {
        marginBottom: "10px",
        marginTop: "15px",
    },
    rootCard: {
        maxWidth: 345,
    },
    rootImage: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    }, 
    backdrop: {
        zIndex: theme.zIndex.modal + 999,
        color: '#fff',
    },
}));