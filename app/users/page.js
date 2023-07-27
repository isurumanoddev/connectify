import React from 'react';
import Buttons from "@/app/components/Buttons";
import {Button} from "@mui/material";
import {signout} from "next-auth/core/routes";
import {useRouter} from "next/navigation";

function Page() {

    const router = useRouter()
    const logOut =async () => {
       await signout()
        router.push("/")

    }
    return (
        <div>
            <h1 className={"text-5xl"}>Welcome to the messenger</h1>
            <Button onClick={logOut} variant={'outlined'}>Logout</Button>
        </div>
    );
}

export default Page;