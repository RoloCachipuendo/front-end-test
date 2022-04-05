import { parseAnyToNumber } from "./parseInput";

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: contiene caracteres que no sean números.
 * - true: solo contiene números
 */
export const isNumeric = (value) => {
  if (/[^0-9]/i.test(value.replace(/ /g, ""))) {
    return false;
  } else {
    return true;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: contiene caracteres que no sean números.
 * - true: solo contiene números y un punto.
 */
export const isDecimal = (value) => {
  let data = value;
  if (typeof value !== "string") {
    data = String(value);
  }
  if (/[^0-9 .]/i.test(data.replace(/ /g, ""))) {
    return false;
  } else {
    let numPoints = 0;
    for (let index = 0; index < data.length; index++) {
      if (data.charAt(index) === ".") {
        numPoints++;
      }
    }

    return numPoints <= 1;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: no tiene el formato de un precio, (un número con dos decimales)
 * - true: si tiene el formato de un precio, (un número con dos decimales)
 */
export const isPriceWithTwoDecimals = (value) => {
  const re = /^[0-9\b.]+$/;
  if (re.test(value)) {
    return true;
  }

  return false;
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: contiene caracteres que no sean números o letras.
 * - true: solo contiene números o letras.
 */
export const isAlphanumeric = (value) => {
  if (/[ `<>?]/i.test(value.replace(/ /g, ""))) {
    return false;
  } else {
    return true;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: contiene caracteres '<' o '>'.
 * - true: contiene caracteres validos
 */
export const isCorrectPassword = (value) => {
  if (/[]/i.test(value.replace(/ /g, ""))) {
    return false;
  } else {
    return true;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: contiene caracteres que no sean números, letras, numeral o parentesis.
 * - true: solo contiene números, letras, numeral o parentesis.
 */
export const isAlphanumericNumeralParentesis = (value) => {
  if (/[ `!@$%^*_+={};'"|<>?~]/i.test(value.replace(/ /g, ""))) {
    return false;
  } else {
    return true;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: contiene caracteres que no sean letras.
 * - true: solo contiene letras.
 */
export const onlyLetters = (value) => {
  if (/[^a-zA-ZñÑáéíóúÁÉÍÓÚÀÈÌÒÙ .0-9]/i.test(value.replace(/ /g, ""))) {
    return false;
  } else {
    return true;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - false: El formato no es user@dominio
 * - true: tiene el formato user@dominio
 */
export const validationEmail = (email) => {
  ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email.replace(/ /g, ""))
  ) {
    return false;
  } else {
    return true;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - true: el valor recibido no es nulo.
 * - false: el valor recibido es nulo.
 */
export const notNull = (value) => {
  if (typeof value === "undefined" || value === null) {
    return false;
  } else {
    let data = value;
    if (typeof value !== "string") {
      data = String(value);
    }
    //elimina espacios en blanco
    data = data.replace(/ /g, "")
    if (data !== "") {
      //no es nulo
      return true;
    } else {
      return false;
    }
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - numero de decimales
 */
export const countDecimals = (value) => {
  if (value) {
    const num = parseAnyToNumber(value);
    if (isDecimal(value)) {
      return num.toString().split(".")[1]
        ? num.toString().split(".")[1].length
        : 0;
    } else {
      return 0;
    }
  }
  return 0;
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {number}
 * - número de caracteres
 */
export const countLenth = (value) => {
  if (typeof value !== "undefined" && value !== null) {
    return String(value).length;
  }
  return 0;
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value
 * @returns {boolean}
 * - true: el valor solo contiene letras y números
 * - false: el valor no  contiene solo letras y números
 */
export const isAlfanumericStrict = (value) => {
  let data = value;
  if (notNull(data)) {
    if (typeof data === "string") {
      data = String(value);
    }
    if (/[^a-zA-ZñÑáéíóúÁÉÍÓÚÀÈÌÒÙ 0-9]/i.test(data.replace(/ /g, ""))) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value 
 * @returns {number}
 * - return número de dígitos
 * - Fuente: https://www.iteramos.com/pregunta/75773/obtener-el-numero-de-digitos-con-javascript
 */
export const countDigit = (value) => {
  if (typeof value === 'undefined' || value.toString() === '') {
    return 0;
  }
  else {
    return value.toString().match(/\d/g).length;
  }
}

/**
 * @author {Rolando_Cachipuendo}
 * @param {any} value 
 * @returns {boolean} 
 * - true: el valor solo contiene letras y números
 * - false: el valor no  contiene solo letras y números
 */
export const isAlfanumericNonSpace = (value) => {
  //if (notNull(value)) {
  if (/[^a-zA-ZñÑáéíóúÁÉÍÓÚÀÈÌÒÙ0-9]/i.test(value.toString().replace(/ /g, ""))) {
    return false;
  } else {
    return true;
  }
  //texto.replace(/\s+/g, '')   
  /*} else {
    return false;
  }*/
}

/**
 * @author {Rolando_Cachipuendo}
 */
const checkInputs = {
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - true: el valor recibido no es nulo.
   * - false: el valor recibido es nulo.
   */
  notNull: notNull,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: El formato no es user@dominio
   * - true: tiene el formato user@dominio
   */
  validationEmail: validationEmail,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: contiene caracteres que no sean letras.
   * - true: solo contiene letras.
   */
  onlyLetters: onlyLetters,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: contiene caracteres que no sean números, letras, numeral o parentesis.
   * - true: solo contiene números, letras, numeral o parentesis.
   */
  isNumeric: isNumeric,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: contiene caracteres que no sean números.
   * - true: solo contiene números y un punto.
   */
  isDecimal: isDecimal,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: contiene caracteres que no sean números o letras.
   * - true: solo contiene números o letras.
   */
  isAlphanumeric: isAlphanumeric,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: contiene caracteres '<' o '>'.
   * - true: contiene caracteres validos
   */
  isCorrectPassword: isCorrectPassword,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - numero de decimales
   */
  countDecimals: countDecimals,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - false: no tiene el formato de un precio, (un número con dos decimales)
   * - true: si tiene el formato de un precio, (un número con dos decimales)
   */
  isPriceWithTwoDecimals,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {number}
   * - número de caracteres
   */
  countLenth,
  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value
   * @returns {boolean}
   * - true: el valor solo contiene letras y números
   * - false: el valor no  contiene solo letras y números
   */
  isAlfanumericStrict,
  /**
 * @author {Rolando_Cachipuendo}
 * @param {any} value 
 * @returns {number}
 * - return número de dígitos
 * - Fuente: https://www.iteramos.com/pregunta/75773/obtener-el-numero-de-digitos-con-javascript
 */
  countDigit,

  /**
   * @author {Rolando_Cachipuendo}
   * @param {any} value 
   * @returns {boolean} 
   * - true: el valor solo contiene letras y números
   * - false: el valor no  contiene solo letras y números
   */
  isAlfanumericNonSpace,
};

export default checkInputs;
