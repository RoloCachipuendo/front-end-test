//Libreria para los calculos
import bigDecimal from "js-big-decimal";
import {notNull  } from "./checkInputs";
import { numDecimales } from "configurations/constant";
/**
 * @author Rolando_Cachipuendo
 * @param {*} value string
 * @returns value as number
 */
export const stringToNumber = (value) => {
  if (typeof value === "string") {
    value = Number(value.replace(/[^0-9.]/gi, ""));
  }
  return value;
};

/**
 * @author Rolando_Cachipuendo
 * @param {*} value
 */
export const roundTwoDecimal = (value) => {
  if(notNull(value)){
    if (typeof value === "string") {
      value = stringToNumber(value);
    }
  
    value = bigDecimal.round(value, 2, bigDecimal.RoundingModes.HALF_UP);
    return value;
  }else{
    return "0.00";
  }
  
};

/**
 * @author Rolando_Cachipuendo
 * @param {*} value
 */
export const roundSixDecimal = (value) => {
  if(notNull(value)){
    if (typeof value === "string") {
      value = stringToNumber(value);
    }
  
    value = bigDecimal.round(value, numDecimales, bigDecimal.RoundingModes.HALF_UP);
    return value;
  }else{
    return "0.00";
  }
  
};

export const parseAnyToNumber = (num) => {
  if (
    typeof num !== "number" &&
    typeof num !== "bigint" &&
    typeof num !== "string"
  ) {
    return 0;
  } else {
    return stringToNumber(num);
  }
};
