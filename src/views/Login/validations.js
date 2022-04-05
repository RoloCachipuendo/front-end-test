import checkInputs from "utils/checkInputs";

const validations = {
  
    updatePassword: function updatePassword(data) {
        const errors = {};
        if (!checkInputs.notNull(data.currentPass)) {
            errors.currentPass = "Ingrese la contraseña actual."
        } else if (!checkInputs.isCorrectPassword(data.currentPass)) {
            errors.currentPass  = "No ingrese los caracteres '<' 0 '>'."
        } else if (data.currentPass.length < 8) {
            errors.currentPass  = "La contraseña debe tener al menos 8 caracteres."
        }


        if (!checkInputs.notNull(data.newPass)) {
            errors.newPass = "Ingrese la contraseña nueva."
        } else if (!checkInputs.isCorrectPassword(data.newPass)) {
            errors.newPass  = "No ingrese los caracteres '<' 0 '>'."
        } else if (data.newPass.length < 8) {
            errors.newPass  = "La contraseña debe tener al menos 8 caracteres."
        }


        if (!checkInputs.notNull(data.confirmPass)) {
            errors.confirmPass = "Confirme la contraseña nueva."
        } else if (!checkInputs.isCorrectPassword(data.confirmPass)) {
            errors.confirmPass  = "No ingrese los caracteres '<' 0 '>'."
        } else if (data.confirmPass.length < 8) {
            errors.confirmPass  = "La contraseña debe tener al menos 8 caracteres."
        }

        if(checkInputs.notNull(data.confirmPass) && checkInputs.notNull(data.newPass)){
            if(data.confirmPass !== data.newPass){
                errors.confirmPass  = "Las contraseñas no coinciden."
                errors.newPass  = "Las contraseñas no coinciden."
            }
        }
        return errors;
    }
}

export default validations;