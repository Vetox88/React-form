import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { CheckBox } from './CheckBox'
import { Space } from './Space'

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Something will be added here!
        </h1>
                <div className='form-inputs'>
                    <label className='form-label'>First Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='firstName'
                        placeholder='Enter your name'
                        value={values.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Last Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='lastName'
                        placeholder='Enter your last name'
                        value={values.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>


                <div className='form-inputs' placeholder="Select a fruit" onValueChange={value => alert(value)}>

                    <select id="select_id">
                        <option value="Empty">-</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>

                    </select>

                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Phone Number</label>
                    <input
                        className='form-input'
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter your phone number'
                        value={values.phoneNumber}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <CheckBox>
                    <h1>Subscribe To Offers</h1>
                    <Space />
                    <input
                        type="checkbox"
                        id="id-newsLetter"
                        name="newsLetter"
                        value="newsLetter"
                        checked={isChecked}
                        onChange={handleOnChange}
                    />
                </CheckBox>
                <button className='form-input-btn' type='submit'>Submit</button>

            </form>
        </div>
    );
};

export default FormSignup;