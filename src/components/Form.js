import React, { useState } from 'react';
import './Form.css';
import FormSignup from '../containers/FormSignup';
import FormSuccess from '../containers/FormSuccess';
import { Logo } from './logo'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <div className='form-content-left'>
                    <Logo />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </div>
        </>
    );
};

export default Form;