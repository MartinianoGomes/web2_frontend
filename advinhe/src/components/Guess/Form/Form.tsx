import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import formStyle from "./form.module.css"

export function Form(){
    return <div className={formStyle.form}>
        <Input/>
        <Button/>
    </div>
}