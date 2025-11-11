import BodyGameStyles from "../BodyGame/bodygame.module.css"
import { Header } from "../Header/Header"
import { SecretWord } from "../SecretWord/SecretWord"
import { Tip } from "../Tip/Tip"
import { Guess } from "../Guess/Guess"
import { HistoryList } from "../HistoryList/HistoryList"

export function BodyGame() {
    return <div className={BodyGameStyles.bodyGame}>
        <Header />
        <Tip />
        <SecretWord />
        < Guess/>
        < HistoryList/>
    </div>
}