import { palette } from "./theme";

const stylesTags = {
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100 %",
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    textAlign: "center",
    height: " 28px",
  },
  header: {
    position: "fixed",
    zIndex: 1000,
    background:'#fff',
    paddingTop: "0%",
    minHeight: "20px",
    width: "100%",
    maxHeight: "50px",
    borderBottom: "1px solid #fcfafa ",
    paddingRight: "2%",
    paddingBottom: "20px",
    borderBottom: "rgb(205 197 197) solid 1px",
    boxShadow: '1px 1px 1px #888888'
  },
  h2_Title: {
    color: palette.primary.contrastText,
  },
};

export default stylesTags;
