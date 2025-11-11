import inputStyle from "./input.module.css"

export function Input () {
    return <input className={inputStyle.input} type="text" maxLength={1} />
}