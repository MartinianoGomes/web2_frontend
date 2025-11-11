import BodyGameStyles from "../BodyGame/bodygame.module.css"
import { Header } from "../Header/Header"
import { SecretWord } from "../SecretWord/SecretWord"
import { Tip } from "../Tip/Tip"

export function BodyGame() {
    return <div className={BodyGameStyles.bodyGame}>
        <Header />
        <Tip />
        <SecretWord />
        
    </div>
}