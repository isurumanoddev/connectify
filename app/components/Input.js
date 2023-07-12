import React from 'react';


import {FieldErrors,FieldValues,UseFormRegister} from "react-hook-form";

function Input({id, labelName, type, required, register, errors, disabled}) {
    return (
        <div className={""}>
            <label htmlFor={id} className={" block text-gray-900 font-medium text-sm leading-6"}>{labelName}</label>
            <div className={"mt-3"}>
                <input className={ `ring-gray-300  form-input shadow-sm ring-1 ring-inset  focus:ring-sky-300 focus:ring-2 focus:ring-inset bg-white font-medium text-lg text-gray-900 w-full outline-none border-none rounded px-2 py-2 ${errors ? "focus:ring-rose-500" : "ring-gray-900"}`}

                />
            </div>
        </div>
    );

}

export default Input;