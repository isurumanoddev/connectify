'use client'

import React, {useCallback, useEffect, useState} from 'react';


import Input from "@/app/components/Input";
import {useForm} from "react-hook-form";
import Buttons from "@/app/components/Buttons";
import AuthSocialButton from "@/app/components/AuthSocialButton";
import {Link} from "@mui/material";
import axios from "axios";

import toast from "react-hot-toast";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


function AuthForm() {

    const router = useRouter()
    const session = useSession()
    const [variant, setVariant] = useState('LOGIN');
    // const [variant, setVariant] = useState('REGISTER');
    const [isLoading, setIsLoading] = useState(false);


    // useEffect(() => {
    //     if (session?.status){
    //         console.log("Authenticated")
    //         router.push("/")
    //
    //     }
    // }, [session?.status,router]);

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
            console.log("Click Register", data)
            axios.post('api/register', data)
                .then(() => {

                    setIsLoading(false)

                })
                .catch(error => {
                    console.log("error ", error)
                    toast.error("Something went wrong")

                })
        }
        if (variant === 'LOGIN') {
            console.log("Login")
            signIn('credentials', {
                ...data,
                redirect: false,

            })
                .then(response => {
                    if (response?.error) {
                        toast.error("Invalid Credentials")
                    }
                    if (response?.ok) {
                        toast.success("Login Success")
                    }
                })
            // toast.error("Invalid Credentials")
        }
    }
    const {
        handleSubmit, register, formState: {errors}
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const socialAction = (action) => {
        setIsLoading(true)

        signIn(action,{redirect:false})
            .then(callback => {
                   if (callback?.error) {
                        toast.error("Invalid Credentials")
                    }
                    if (callback?.ok) {
                        toast.success("Login Success")
                    }
            })
    }
    return (
        <div className={"mt-8 mx-auto w-full max-w-lg "}>
            <div className={"px-6 md:px-12 py-8 shadow-md rounded-lg bg-white "}>
                <form className={"flex flex-col space-y-4  "}
                      onSubmit={handleSubmit(onSumbit)}

                >
                    {
                        variant === 'REGISTER' && (
                            <Input id={"name"} labelName={"Username"} type={"text"} register={register}
                                   errors={errors}/>
                        )
                    }
                    <Input disabled={isLoading} id={"email"} labelName={"Email"} type={"email"} register={register}
                           errors={errors}/>
                    <Input disabled={isLoading} id={"password"} labelName={"Password"} type={"password"}
                           register={register}
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
                        <Link onClick={toogleVariant}
                              className={"cursor-pointer underline  flex flex-row text-sm text-gray-500 justify-center "}>
                            {variant === "LOGIN" ? "Register " : "Login "}
                        </Link>

                    </div>


                </div>


            </div>
        </div>
    );
}

export default AuthForm;