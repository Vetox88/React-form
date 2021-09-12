import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { CheckBox } from './CheckBox'
import { Space } from './Space'

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors, handleOnChange, setGender } = useForm(
        submitForm,
        validate
    );
    const [isChecked, setIsChecked] = useState(false);


    return (
        <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                    Welcome to Apple Event 2021!
        </h1>
                <div className='form-inputs'>
                    <label className='form-label'>First Name</label>
                    <input
                        className='form-input'
                        type='text'
                        id='id-firstName'
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
                        id='id-lastName'
                        name='lastName'
                        placeholder='Enter your last name'
                        value={values.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                </div>


                <div className='form-inputs' name='selectGender' placeholder="Select Gender" onValueChange={value => alert(value)}>
                    <label className='form-label'>Select Gender</label>
                    <Space />

                    <select id="select_id" onChange={(e) => setGender(e.target.value)}>
                        <option value="Empty">-</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>

                    </select>

                </div>

                <div className='form-inputs'>
                    <label className='form-label'>Phone Number</label>
                    <input
                        className='form-input'
                        required="not-required"
                        type='text'
                        id='id-phoneNumber'
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
                        id='id-email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <CheckBox onChange={(e) => setIsChecked(e.target.checked)} >
                    <h1 style={{ marginRight: "10px" }}>Subscribe To Offers</h1>

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