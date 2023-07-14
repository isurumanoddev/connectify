import React from 'react';


import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

function Input({id, labelName, type, required, register, errors, disabled}) {
    return (
        <div className={""}>
            <label htmlFor={id} className={" block text-gray-900 font-medium text-xs leading-6"}>{labelName}</label>
            <div className={""}>
                <input
                    className={`ring-gray-300 text-sm  form-input shadow-sm ring-1 ring-inset  focus:ring-sky-500 focus:ring-2 focus:ring-inset bg-white font-medium  text-gray-900 w-full outline-none border-none rounded-lg px-2 py-2 ${errors ? "focus:ring-rose-500" : "ring-gray-900"}`}
                    required
                    type={type}
                    id={id}
                    disabled={disabled}
                    {...register(id,{required})}
                />
            </div>
        </div>
    );

}

export default Input;