import BodyGameStyles from "../BodyGame/bodygame.module.css"
import { Header } from "../Header/Header"
import { SecretWord } from "../SecretWord/SecretWord"

export function BodyGame() {
    return <div className={BodyGameStyles.bodyGame}>
        <Header />
        <SecretWord />
    </div>
}