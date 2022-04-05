import checkInputs from "utils/checkInputs";

const validations = {
    updateCompany: function updateCompany(company) {
        const errors = {};

        if (checkInputs.notNull(company.nombresPersona)) {
            if (!checkInputs.isAlphanumeric(company.nombresPersona)) {
                errors.nombresPersona = "No ingrese caracteres especiales."
            } else if (company.nombresPersona.length > 300) {
                errors.nombresPersona = "No puede tener más de 300 caracteres."
            }
        }

        if (!checkInputs.notNull(company.apellidosPersona)) {
            errors.apellidosPersona = "La razón social es necesaria."
        } else if (!checkInputs.isAlphanumeric(company.apellidosPersona)) {
            errors.apellidosPersona = "No ingrese caracteres especiales."
        } else if (company.apellidosPersona.length > 300) {
            errors.apellidosPersona = "No puede tener más de 300 caracteres."
        }

        if (!checkInputs.notNull(company.direccionDomicilioPersona)) {
            errors.direccion = "La dirección es necesaria."
        } else if (company.direccionDomicilioPersona.length > 300) {
            errors.direccion = "No puede tener más de 300 caracteres."
        }

        if (!checkInputs.notNull(company.correoPersona)) {
            errors.correoPrincipal = "El correo es necesario."
        } else if (!checkInputs.validationEmail(company.correoPersona)) {
            errors.correoPrincipal = "Formato incorrecto. El correo debe tener el formato: usuario@ejemplo.com";
        } else if (company.correoPersona.length > 100) {
            errors.correoPrincipal = "No puede tener más de 300 caracteres.";
        }

        if (!checkInputs.notNull(company.celularPersona)) {
            errors.telefonoPrincipal = "El teléfono es necesario."
        }else if (!checkInputs.isNumeric(company.celularPersona)) {
            errors.telefonoPrincipal = "Solo ingrese números."
        } else if (company.celularPersona.length < 7 || company.celularPersona.length > 13) {
            errors.telefonoPrincipal = "La cantidad de dígitos debe estar entre 7 (convencionales) a 10 (teléfonos celulares)."
        }


        if (!checkInputs.notNull(company.fechaNacimientoPersona)) {
            errors.fecha = "La fecha de nacimiento es necesario."
        }
        if (!checkInputs.isNumeric(company.cedulaPersona)) {
            errors.cedulaPersona = "Solo ingrese números."
        } else if (company.cedulaPersona.length > 10) {
            errors.cedulaPersona = "No ingrese más de 10 dígitos."
        }

        return errors;
    },
    updatePassword: function updatePassword(data) {
        const errors = {};
        if (!checkInputs.notNull(data.currentPass)) {
            errors.currentPass = "Ingrese la contraseña actual."
        } else if (!checkInputs.isCorrectPassword(data.currentPass)) {
            errors.currentPass = "No ingrese los caracteres '<' 0 '>'."
        } else if (data.currentPass.length < 8) {
            errors.currentPass = "La contraseña debe tener al menos 8 caracteres."
        }


        if (!checkInputs.notNull(data.newPass)) {
            errors.newPass = "Ingrese la contraseña nueva."
        } else if (!checkInputs.isCorrectPassword(data.newPass)) {
            errors.newPass = "No ingrese los caracteres '<' 0 '>'."
        } else if (data.newPass.length < 8) {
            errors.newPass = "La contraseña debe tener al menos 8 caracteres."
        }


        if (!checkInputs.notNull(data.confirmPass)) {
            errors.confirmPass = "Confirme la contraseña nueva."
        } else if (!checkInputs.isCorrectPassword(data.confirmPass)) {
            errors.confirmPass = "No ingrese los caracteres '<' 0 '>'."
        } else if (data.confirmPass.length < 8) {
            errors.confirmPass = "La contraseña debe tener al menos 8 caracteres."
        }

        if (checkInputs.notNull(data.confirmPass) && checkInputs.notNull(data.newPass)) {
            if (data.confirmPass !== data.newPass) {
                errors.confirmPass = "Las contraseñas no coinciden."
                errors.newPass = "Las contraseñas no coinciden."
            }
        }
        return errors;
    }
}

export default validations;