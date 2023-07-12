'use client'

import React, {useCallback, useState} from 'react';
import {useForm,SubmitHandler,FieldValues} from "react-hook-form";

function AuthForm() {
    const [variant, setVariant] = useState('LOGIN');
    const [isLoading, setIsLoading] = useState(false);


    const toogleVariant = useCallback(
        () => {
            if (variant === 'LOGIN') {
                setVariant('REGISTER')
            } else {
                setVariant("LOGIN")
            }
        },
        [variant],
    );

    const {
        register,handleSubmit,formState:{errors}
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password:''
        }
    })

    const onSumbit = (data) => {
        setIsLoading(true)

        if (variant === 'REGISTER') {
            // axios register
        }
        if (variant === 'LOGIN') {
            // nextAuth signIn
        }
    }

    const socialAction = (action) => {
        setIsLoading(true)
        // NextAuth
    }



    return (
        <div className={"mt-8 mx-auto w-full max-w-md "}>
            <div className={"px-4 py-8 shadow rounded-lg bg-red-500 md:px-4"}>
                <form className={"scroll-y-6 "}
                onSubmit={handleSubmit(onSumbit)}
                >

                </form>
                <h1>AuthForm2</h1>
            </div>
        </div>
    );
}

export default AuthForm;