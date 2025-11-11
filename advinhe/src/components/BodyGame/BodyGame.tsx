import BodyGameStyles from "../BodyGame/bodygame.module.css"
import { GuessInfo } from "../Guess/GuessInfo/GuessInfo"
import { Header } from "../Header/Header"
import { SecretWord } from "../SecretWord/SecretWord"
import { Tip } from "../Tip/Tip"
import { Form } from "../Guess/Form/Form"

export function BodyGame() {
    return <div className={BodyGameStyles.bodyGame}>
        <Header />
        <Tip />
        <SecretWord />
        <GuessInfo />
        <Form />
        
    </div>
}