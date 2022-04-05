import { setKey } from "redux/actions/userActions";
import Crypto from 'crypto-js';

export const savetk = (tk) => (typeof tk === "string") ? Crypto.AES.encrypt(tk, setKey(tk)).toString() : "";


export const descTK = (msg, key) => {
  
      let resul = null;
      try {
         const descr = Crypto.AES.decrypt(msg, key).toString(Crypto.enc.Utf8)
         resul = descr;
      } catch (error) {
         console.error(error);
      }
      return resul;
}

   export function sessionTimeOut(exp = 0) {
      if (typeof exp !== 'number') {
         return 0;
      }

      const expDate = new Date(0);
      expDate.setSeconds(exp);
      const iatDate = new Date();
      return expDate.getTime() - iatDate.getTime();
   }

   export function totalTimeSession(exp = 0, iat = 0) {
      if (typeof exp !== 'number' || typeof iat !== 'number') {
         return 0;
      }
      const expDate = new Date(0);
      expDate.setSeconds(exp);
      const iatDate = new Date(0);
      iatDate.setSeconds(iat);
      return expDate.getTime() - iatDate.getTime();
   }
