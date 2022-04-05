import {
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  SIGN_OFF_USER,
  AUTH_USER_TMP,
} from "../types/userType";
import cleanStore from "./cleanStore";
import UseSecurity from "security/useSecurity";
import intanceBackend from "configurations/axios";
import store from "redux/store";

export const authTempUserAction = () => ({
  type: AUTH_USER_TMP,
});

export const buildObjAuth = (data) => {
  const { savetk } = UseSecurity();
  return {
    tk: savetk(data.accessToken),
    type: data.tokenType,
    ruc: parseJwt(data.accessToken).ruc || "",
  };
};

export const authUserSuccess = (data) => {
  //const objAuth = buildObjAuth(data);

  return (dispatch) => {
    dispatch({
      type: AUTH_USER_SUCCESS,
      payload: {
        //...objAuth,
      },
    });

  };
};

export const authUserError = (error) => {
  return {
    type: AUTH_USER_ERROR,
    payload: error,
  };
};

export function setKey(params) {
  return parseJwt(params).ruc;
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getJwt(token) {
  const { descTK } = UseSecurity();
  const ruc =
    typeof store.getState().user === "object"
      ? store.getState().user.ruc
      : null;
  let tk = descTK(token, ruc);
  if (tk) {
    const jwt = parseJwt(tk);
    return jwt;
  } else {
    return {};
  }
}

export function getState(token) {
  return getJwt(token).state;
}

export function getUserProfile(token) {
  return getJwt(token).adm;
}

export function getRUCEmpresa(token) {
  return getJwt(token).ruc;
}

export function getA(token) {
  return getJwt(token).ruc;
}

export function getSub(token) {
  return getJwt(token).sub;
}

export function getExp(token) {
  return getJwt(token).exp;
}

export function getIat(token) {
  return getJwt(token).iat;
}

// EXTRACT PERM
export function getPerm(token) {
  return getJwt(token).perm;
}

export const signOffUserAction = () => {
  return (dispatch) => {
    cleanStore(dispatch);
  };
};

export const signoutUser = () => ({
  type: SIGN_OFF_USER,
});

export function updateSessionAction(onRefresh, onError) {
  return async (dispatch) => {
    await intanceBackend
      .get("/refresh")
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          const { savetk } = UseSecurity();
          try {
            const accstk = response.data.accessToken;
            const jwt =
              typeof accstk === "string" ? parseJwt(accstk) : parseJwt("");
            const ruc = typeof jwt === "object" && jwt !== null ? jwt.ruc : "";
            dispatch({
              type: AUTH_USER_SUCCESS,
              payload: {
                tk: savetk(accstk),
                type: response.data.tokenType,
                ruc: ruc,
              },
            });
          } catch (error) {
            console.log(error);
          }
          if (typeof onRefresh === "function") {
            onRefresh();
          }
        }
      })
      .catch((expecion) => {
        let msg = "La sesión fue cerrada por falta de actividad.";
        if (expecion.response) {
          dispatch(authUserError(msg));
        } else {
          msg =
            "Ocurrió un error al renovar el estado de la sesión. Existen problemas en la red. Contáctese con el administrador del Sistema.";
          dispatch(authUserError(msg));
        }
        if (typeof onError === "function") {
          onError(msg);
        }
      });
  };
}
