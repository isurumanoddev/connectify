'use client'

import React, {useCallback, useState} from 'react';


import Input from "@/app/components/Input";
import {useForm} from "react-hook-form";
import Buttons from "@/app/components/Buttons";
import AuthSocialButton from "@/app/components/AuthSocialButton";
import {Link} from "@mui/material";


function AuthForm(label) {
    // const [variant, setVariant] = useState('LOGIN');
    const [variant, setVariant] = useState('REGISTER');
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
        handleSubmit, register, formState: {errors}
    } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })

    const socialAction = (action) => {
        setIsLoading(true)
        // NextAuth
    }


    return (
        <div className={"mt-8 mx-auto w-full max-w-lg "}>
            <div className={"px-6 md:px-12 py-8 shadow-md rounded-lg bg-white "}>
                <form className={"flex flex-col space-y-4  "}
                      onSubmit={handleSubmit(onSumbit)}

                >
                    {
                        variant === 'REGISTER' && (
                            <Input id={"username"} labelName={"Username"} type={"text"} register={register}
                                   errors={errors}/>
                        )
                    }

                    <Input id={"email"} labelName={"Email"} type={"email"} register={register} errors={errors}/>
                    <Input id={"password"} labelName={"Password"} type={"password"} register={register}
                           errors={errors}/>

                    <div>
                        {
                            variant === 'LOGIN'
                                ? <Buttons fullwidth label={"Sign-In"}/> :
                                <Buttons fullwidth label={"Sign-Up"}/>

                        }


                    </div>

                </form>
                <div className={"mt-6 "}>
                    <div className={"relative "}>
                        <div className={" inset-0 flex items-center"}>
                            <div className={"w-full border-t border-gray-300"}/>


                            <div className={"flex flex-row px-4 text-sm text-gray-500 "}>Continue
                            </div>
                            <div className={"w-full border-t border-gray-300 "}/>

                        </div>


                    </div>
                    <div className={"mt-6 flex gap-2"}>
                        <AuthSocialButton onClick={() => socialAction('google')}/>
                    </div>
                    <div className={" mt-6 w-full border-t border-gray-300"}/>
                    <div className={" mt-6 flex flex-row items-center justify-center"}>
                        <div className={" flex flex-row px-2 text-sm text-gray-500 justify-center "}>
                            {variant === "LOGIN" ? "New to Connectify ?" : "Already Registred ?"}
                        </div>
                        <Link onClick={toogleVariant} className={"cursor-pointer underline  flex flex-row text-sm text-gray-500 justify-center "}>
                            {variant === "LOGIN" ? "Register " : "Login "}
                        </Link>

                    </div>


                </div>


            </div>
        </div>
    );
}

export default AuthForm;