
import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        gender: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [gender, setGender] = useState("");


    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {

        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);


    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var urlencoded = new URLSearchParams();
                urlencoded.append("firstName", values.firstName);
                urlencoded.append("lastName", values.lastName);
                urlencoded.append("gender", gender);
                urlencoded.append("phone", values.phoneNumber);
                urlencoded.append("email", values.email);
                urlencoded.append("subscribe", isChecked);

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: urlencoded,
                };

                fetch("https://reqres.in/api/users", requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));

            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, handleOnChange, setGender, values, errors };
};

export default useForm;