'use client'
import React from 'react';

import {Button} from "@mui/material";

import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";

function Page() {

    const router = useRouter()
    const userLogOut = async () => {
        try {
            await signOut()
            console.log("logout")
            // router.push("/")
        } catch (e) {
            console.log("error ",e)

        }


    }
    return (
        <div>
            <h1 className={"text-5xl"}>Welcome to the messenger</h1>
            <Button onClick={userLogOut} variant={'outlined'}>Logout</Button>
        </div>
    );
}

export default Page;