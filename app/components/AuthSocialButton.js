import {Button} from "@mui/material";
import {FcGoogle} from "react-icons/fc";


function AuthSocialButton({onClick}) {
    return (
        <Button onClick={onClick}
                className={"flex ring-1 ring-inset ring-gray-400 flex-row gap-8 py-2 font-semibold  justify-center items-center w-full text-gray-500 "}>
            <FcGoogle className={"text-2xl"}/><div className={"text-sm"}>
            Continue with google
        </div>
        </Button>
    );
}

export default AuthSocialButton;