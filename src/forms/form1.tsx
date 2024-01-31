import React, {FormEvent} from 'react';

const Form1 = () => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log("generate payload!")
    }
    return (
        <form className='form1-container' onSubmit={onSubmit}>
            <p className='form1-title'>Регистрация</p>
            <input type="text"/>
        </form>
    );
};

export default Form1;