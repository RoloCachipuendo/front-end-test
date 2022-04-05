import checkDocument from "../../../utils/checkDocument";
import checkInputs from "../../../utils/checkInputs";

const validations = {
  editCostumer: function validationEditUser(updatedCostumer) {
    const errors = {};
    if (!checkInputs.notNull(updatedCostumer.nombresPersona)) {
      errors.nombresPersona = "Es necesario.";
    } else if (!checkInputs.onlyLetters(updatedCostumer.nombresPersona)) {
      errors.nombresPersona = "Los nombres solo deben contener letras.";
    } else if (updatedCostumer.nombresPersona.length > 100) {
      errors.nombresPersona = "No ingrese más de 100 caracteres.";
    }

    if (updatedCostumer.celularPersona) {
      if (!checkInputs.isNumeric(updatedCostumer.celularPersona)) {
        errors.celularPersona = "El teléfono solo puede contener números.";
      } else if (
        updatedCostumer.celularPersona.length < 7 ||
        updatedCostumer.celularPersona.length > 10
      ) {
        errors.celularPersona =
          "La cantidad de dígitos debe estar entre 7 (convencionales) a 10 (teléfonos celulares).";
      } else if (updatedCostumer.celularPersona.length > 300) {
        errors.celularPersona = "No ingrese más de 300 caracteres.";
      }
    }

    if (updatedCostumer.direccionDomicilioPersona) {
      if (!checkInputs.isAlphanumeric(updatedCostumer.direccionDomicilioPersona)) {
        errors.direccionDomicilioPersona =
          "Solo ingrese: letras, números, '#', '.' o paréntesis";
      } else if (updatedCostumer.direccionDomicilioPersona.length > 300) {
        errors.direccionDomicilioPersona = "No ingrese más de 300 caracteres.";
      }
    }

    if (!checkInputs.notNull(updatedCostumer.correoPersona)) {
      errors.correoPersona = "El correo es necesario.";
    } else if (!checkInputs.validationEmail(updatedCostumer.correoPersona)) {
      errors.correoPersona =
        "El correo es incorrecto. Debe contener el usuario, @ y el dominio.";
    } else if (updatedCostumer.correoPersona.length > 300) {
      errors.correoPersona = "No ingrese más de 300 caracteres.";
    }
    return errors;
  },
  addCostumer: function validationAddCostumer(newCostumer) {
    const errors = {};

    if (!checkInputs.notNull(newCostumer.cedulaPersona)) {
      errors.cedulaPersona = "La identificación es necesario.";
    } else if (newCostumer.cedulaPersona.length < 10 || !checkDocument.validarCedula(newCostumer.cedulaPersona)) {
      errors.cedulaPersona = "Cédula o RUC inválido.";
    }

    if (!checkInputs.notNull(newCostumer.nombresPersona)) {
      errors.nombresPersona = "El nombre es necesario.";
    } else if (!checkInputs.onlyLetters(newCostumer.nombresPersona)) {
      errors.nombresPersona = "Ingrese únicamente letras.";
    } else if (newCostumer.nombresPersona.length > 300) {
      errors.nombresPersona = "No ingrese más de 300 caracteres.";
    }

    if (!checkInputs.notNull(newCostumer.apellidosPersona)) {
      errors.apellidosPersona = "El apellido es necesario.";
    } else if (!checkInputs.onlyLetters(newCostumer.apellidosPersona)) {
      errors.apellidosPersona = "Ingrese únicamente letras.";
    } else if (newCostumer.apellidosPersona.length > 300) {
      errors.apellidosPersona = "No ingrese más de 300 caracteres.";
    }

    if (!checkInputs.notNull(newCostumer.correoPersona)) {
      errors.correoPersona = "El correo del usuario es necesario.";
    } else if (!checkInputs.notNull(newCostumer.correoPersona)) {
      errors.correoPersona = "El correo del usuario es necesario.";
    } else if (!checkInputs.validationEmail(newCostumer.correoPersona)) {
      errors.correoPersona =
        "El correo del usuario es erroneo. Ingrese un correo con el formato user@ejemplo.com";
    } else if (newCostumer.correoPersona.length > 100) {
      errors.correoPersona = "No ingrese más de 300 caracteres.";
    }

    return errors;
  },
};

export default validations;
