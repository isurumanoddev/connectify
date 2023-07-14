import {Button} from "@mui/material";
import {FcGoogle} from "react-icons/fc";


function AuthSocialButton({onClick}) {
    return (
        <Button onClick={onClick}
                className={"flex shadow font-bold capitalize ring-1 ring-inset ring-gray-300 flex-row gap-4 py-2   justify-center items-center w-full text-gray-500 "}>
            <FcGoogle className={"text-3xl"}/><div className={"text-sm"}>
           Google
        </div>
        </Button>
    );
}

export default AuthSocialButton;