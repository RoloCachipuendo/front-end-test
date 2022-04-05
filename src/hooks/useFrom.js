import { useState, useEffect } from 'react';


const UseForm = (isValid, validate, existError) => {
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [objValores, setObjValores] = useState({})

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            isValid();
        } else {
            existError();
        }
    }, [errors]);

    const getObject = (obj) => {
        setObjValores(obj)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const  errores = validate(objValores);
        setErrors(errores);
        setIsSubmitting(true);
    };

    return {
        getObject,
        handleSubmit,
        errors,
    }

}

export default UseForm;