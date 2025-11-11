import { Form } from "./Form/Form";
import { GuessInfo } from "./GuessInfo/GuessInfo";
import guessStyle from "./guess.module.css"

export function Guess() {
    return <div className={guessStyle.guess}>
        <GuessInfo />
        <Form />
    </div>
}