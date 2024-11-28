"use client"

import { useFormStatus } from "react-dom"


export default function ButtonInsideInput({label}: {label: string})
{
    const {pending} = useFormStatus();
    return (
        <button disabled={pending} className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 disabled:bg-gray-400">
            {label}
        </button>
    )
}