import React from "react"
import inputStyle from "./input.module.css"

import { GlobalContext } from "../../../GlobalStorage/GlobalStorage";
import type { GlobalType } from "../../../GlobalStorage/GlobalStorage";


interface childrenProps {
    children: string
}

export function CounterProvider({ children } : childrenProps) {
    const [savedInputs, setSavedInputs] = React.useState(["a","b","c"]);

    /*function saveInput(count){

    }*/
    return

}

export function Input () {
    const global = React.useContext(GlobalContext) as GlobalType;
    return <input className={inputStyle.input} type="text" maxLength={1} onChange={(e) => {
        const inputValue = e.target.value;
        if(!inputValue.trim()) return
        global.setInput([...global.input, e.target.value])
    }}/>
}