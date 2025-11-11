import TipIcon from "../../assets/tip.svg"
import tipStyles from "../Tip/tip.module.css"
import { WORDS } from "../../utils/words"
import { randomWord } from "../SecretWord/SecretWord"

export function Tip () {
    return <div className={tipStyles.tipContainer}>
        <img src={TipIcon} className={tipStyles.tipIcon} alt="Tip" />

        <div className={tipStyles.tipContent}>
            <h1>Dica</h1>
            <p><span>
                {
                    WORDS[randomWord].tip
                }
                </span></p>
        </div>
    </div>
}