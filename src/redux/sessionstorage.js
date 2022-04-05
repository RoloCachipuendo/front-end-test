import Crypto from "crypto-js";
import {getKy} from "./localStorage"

const keywordsSessionStorage = {
  menu: "mn",
  notifications: "nt",
  flag_firstRenderHome: "f_render_h",
  flag_RenderDialogCertificate: "render_d_c",
  tmpTK: "tmp_tk"
};

export const getNotifications = () => {
  const notifications = sessionStorage.getItem(
    keywordsSessionStorage.notifications
  );
  const ky = getKy();
  if (notifications === null || ky === "") {
    return undefined;
  }

  try {
    return { notifications: JSON.parse(Crypto.AES.decrypt(notifications, ky).toString(Crypto.enc.Utf8) ) };
  } catch (error) {
    return undefined;
  }
};

export const setNotifications = (notifications) => {
  sessionStorage.setItem(
    keywordsSessionStorage.notifications,
    Crypto.AES.encrypt(JSON.stringify(notifications), getKy()).toString()
  );
};

export const getCreditNote = () => {
  const creditNote = sessionStorage.getItem("cn");
  if (creditNote === null) {
    return undefined;
  }
  return { creditNote: JSON.parse(creditNote) };
};

export const setCreditNote = (creditNote) => {
  sessionStorage.setItem("cn", JSON.stringify(creditNote));
};

export const isFirstRenderHome = () => {
  const flag_firstRender = sessionStorage.getItem(
    keywordsSessionStorage.flag_firstRenderHome
  );

  if (flag_firstRender === null) {
    return true;
  }
  return false;
};

export const setFlagRenderHome = (value = "N") => {
  let flag = value;
  if (typeof value !== "string") {
    flag = "N";
  }
  sessionStorage.setItem(keywordsSessionStorage.flag_firstRenderHome, flag);
};

export const getFlagShowDialogCertificate = () => {
  const flag_firstRender = sessionStorage.getItem(
    keywordsSessionStorage.flag_RenderDialogCertificate
  );

  if (flag_firstRender === null) {
    return true;
  }
  return false;
};

export const setFlagShowDialogCertificate = (value = "") => {
  let flag = value;
  if (typeof value !== "string") {
    flag = "N";
  }
  sessionStorage.setItem(
    keywordsSessionStorage.flag_RenderDialogCertificate,
    flag
  );
};


export const setTkTmp = (tk) => {
  sessionStorage.setItem(
    keywordsSessionStorage.tmpTK,
    Crypto.AES.encrypt(JSON.stringify(tk), getKy()).toString()
  );
}

export const getTkTmp = () => {
  const tktmp = sessionStorage.getItem(
    keywordsSessionStorage.tmpTK
  );
  const ky = getKy();
  if (tktmp === null || ky === "") {
    return undefined;
  }

  try {
    return JSON.parse(Crypto.AES.decrypt(tktmp, ky).toString(Crypto.enc.Utf8) );
  } catch (error) {
    return undefined;
  }
};


export const removeTKTmp = () => {
  sessionStorage.removeItem(keywordsSessionStorage.tmpTK);
}