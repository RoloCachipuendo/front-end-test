

/**
 * @author {Rolando_Cachipuendo}
 * @param {string} cedula 
 * @returns {boolean} 
 * - false: Cédula inválida.  
 * - true: Cédula válida.  
 */
export const validarCedula = (cedula) => {
    let esValido = true;
    let digitoVerificador = Number(cedula.substring(9, 10));
    let pares = 0;
    let impares = 0;
    if(cedula.length === 10){
        for (let index = 1; index < 10; index++) {
            if (index % 2 === 0) {
                pares = pares + Number(cedula.substring(index - 1, index));
            } else {
                ((Number(cedula.substring(index - 1, index)) * 2) > 9) ?
                    impares = impares + ((Number(cedula.substring(index - 1, index)) * 2) - 9)
                    :
                    impares = impares + Number(cedula.substring(index - 1, index)) * 2;
            }
        }
        let verificadorFinal = ((Math.trunc((impares + pares) / 10) + 1) * 10) - (pares + impares);
        if (verificadorFinal === 10) {
            verificadorFinal = 0;
            if (digitoVerificador !== 0) {
                esValido = false;
            }
        } else if (digitoVerificador !== ((Math.trunc((impares + pares) / 10) + 1) * 10) - (pares + impares)) {
            esValido = false;
        }
    }else{
        esValido = false;
    }
    
    return esValido;

}


/**
 * @author {Rolando_Cachipuendo}
 * @param {string} cedula 
 * @returns {boolean} 
 * - false: Código Establecimiento inválido.  
**/
const ejecMod11 = (digitosIniciales, digitoVerificador, tipo) => {
    let coefArray = [];
    let resultado = true;
    switch (tipo) {
        case 3:
            coefArray = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            break;
        case 4:
            coefArray = [3, 2, 7, 6, 5, 4, 3, 2];
            break;
        default:
            resultado = false;
            break;
    }
    let tmpDigIniciales = [];
    for (let index = 0; index < digitosIniciales.length; index++) {
        const valPos = Number(digitosIniciales[index]);
        tmpDigIniciales.push(valPos);

    }
    let total = 0;
    let key = 0;
    for (let index = 0; index < tmpDigIniciales.length; index++) {
        if (key < coefArray.length) {
            const valPos = (tmpDigIniciales[key]) * coefArray[key];
            total = total + valPos;
        }
        key = key + 1;
    }

    let residuo = total % 11;
    let valor;

    if (residuo === 0) {
        valor = 0;
    } else {
        valor = (11 - residuo);
    }

    if (valor !== digitoVerificador) {
        resultado = false;
    }

    return resultado;
}



/**
 * @author {Rolando_Cachipuendo}
 */
const checkDocuments = {
    /**
     * @author {Rolando_Cachipuendo}
     * @param {string} cedula 
     * @returns {boolean} 
     * - false: Cédula inválida.  
     * - true: Cédula válida.  
     */
    validarCedula: validarCedula,

}

export default checkDocuments;