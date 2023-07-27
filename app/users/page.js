import React from 'react';

import {Button} from "@mui/material";
import {signout} from "next-auth/core/routes";
import {useRouter} from "next/navigation";

function Page() {

    const router = useRouter()
    const userlogOut =async () => {
       await signout()
        router.push("/")

    }
    return (
        <div>
            <h1 className={"text-5xl"}>Welcome to the messenger</h1>
            <Button onClick={userlogOut} variant={'outlined'}>Logout</Button>
        </div>
    );
}

export default Page;