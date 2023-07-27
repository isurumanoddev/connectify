'use client'
import {Button} from "@mui/material";
import clsx from "clsx";

function Buttons({label, color, fullwidth,disabled,secondary,danger}) {
    return (
        // <Button type={'submit'} className={`bg-sky-500 font-semibold leading-6 text-white hover:bg-sky-400 w-full mt-2`}>{label}</Button>
        <Button
            type={'submit'}
            className={`
            ${fullwidth && "w-full"} 
            ${disabled && "opacity-50 cursor-default"} 
            ${danger && "bg-rose-500 hover:bg-rose-600" } 
            ${!secondary && !danger && "bg-sky-500 hover:bg-sky-600"}
              py-2 font-semibold text-center  border-none text-white  transition flex justify-center`}>
            {label}
        </Button>
    );
}

export default Buttons;