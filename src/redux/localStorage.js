import Crypto from 'crypto-js';
import uuid from "react-uuid";


const keywordsSessionStorage = {
  token: "tk",
  menu: "mn",
  ky: "ky",
  company: "cp",
  user: ""
};

export const getTokenStorage = () => {
  let tokenStorage = localStorage.getItem(keywordsSessionStorage.token);
  const ky = getKy();
  if (tokenStorage === null || tokenStorage === "null" || ky === "") {
    return undefined;
  }

  try {
    tokenStorage = Crypto.AES.decrypt(tokenStorage, ky).toString(Crypto.enc.Utf8)
    return {
      user: JSON.parse(tokenStorage),
    };
  } catch (error) {
    return undefined;
  }

};

export const setIdUser = (idUser) => {
  localStorage.setItem(keywordsSessionStorage.user, idUser);
};

export const getIdUser = () => {
  return localStorage.getItem(keywordsSessionStorage.user);
};

export const setTokenStorage = (token) => {
  localStorage.setItem(keywordsSessionStorage.token, Crypto.AES.encrypt(JSON.stringify(token), getKy()).toString());
};

export const getMenuStorage = () => {
  let menuStorage = sessionStorage.getItem(keywordsSessionStorage.menu);
  const ky = getKy();
  if (menuStorage === null || ky === "") {
    return undefined;
  }

  try {
    menuStorage = Crypto.AES.decrypt(menuStorage, ky).toString(Crypto.enc.Utf8);
    return { resources: JSON.parse(menuStorage) };
  } catch (error) {
    return undefined;
  }


};

export const setMenuStore = (resources) => {
  sessionStorage.setItem(keywordsSessionStorage.menu, Crypto.AES.encrypt(JSON.stringify(resources), getKy()).toString());
};

export const getCompanyStorage = () => {
  let company = localStorage.getItem(keywordsSessionStorage.company);
  const ky = getKy();
  if (company === null || ky === "") {
    return undefined;
  }

  try {
    company = Crypto.AES.decrypt(company, ky).toString(Crypto.enc.Utf8);
    return { company: JSON.parse(company) };
  } catch (error) {
    return undefined;
  }


};

export const setCompanyStore = (company) => {

  localStorage.setItem(keywordsSessionStorage.company, Crypto.AES.encrypt(JSON.stringify(company), getKy()).toString());
};

export const newKy = () => {
  const ky = uuid();
  localStorage.setItem(keywordsSessionStorage.ky, ky);
}

export const getKy = () => {
  const ky = localStorage.getItem(keywordsSessionStorage.ky);
  if (ky === null) {
    return "";
  }
  return ky;
}


export const clearAll = () => {
  localStorage.clear();
  sessionStorage.clear();
}
