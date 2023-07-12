'use client'

import React, {useCallback, useState} from 'react';



import Input from "@/app/components/Input";
import {useForm} from "react-hook-form";


function AuthForm(label) {
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



    const onSumbit = (data) => {
        setIsLoading(true)

        if (variant === 'REGISTER') {
            // axios register
        }
        if (variant === 'LOGIN') {
            // nextAuth signIn
        }
    }
    const {
        handleSubmit,register,formState:{errors}
    } = useForm({defaultValues:{
        name:'',
            email:'',
            password:''
        }})

    const socialAction = (action) => {
        setIsLoading(true)
        // NextAuth
    }


    return (
        <div className={"mt-8 mx-auto w-full max-w-lg "}>
            <div className={"px-6 md:px-12 py-8 shadow-md rounded-lg bg-white "}>
                <form className={"flex flex-col space-y-8  "}
                      onSubmit={handleSubmit(onSumbit)}
                >
                    <Input id={"email"} labelName={"Email"} type={"email"} register={register} errors={errors}/>
                    <Input id={"password"} labelName={"Password"} type={"password"} register={register}
                           errors={errors}/>
                    <button
                        className={" w-full rounded py-3 text-lg font-semibold text-center bg-sky-500 border-none text-white hover:bg-sky-400 transition"}>Sign
                        In
                    </button>

                </form>

            </div>
        </div>
    );
}

export default AuthForm;