export default function validateInfo(values) {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = 'Username required';
    }
    if (!values.lastName) {
        errors.lastName = 'Username required';
    }

    if (!/^([4][2])\d{6}$/ && !null(values.phoneNumber)) {
        errors.phoneNumber = 'Not a Danish number';
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    return errors;
}