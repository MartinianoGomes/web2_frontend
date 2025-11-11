import TipIcon from "../../assets/tip.svg"
import tipStyles from "../Tip/tip.module.css"

export function Tip () {
    return <div className={tipStyles.tipContainer}>
        <img src={TipIcon} className={tipStyles.tipIcon} alt="Tip" />

        <div className={tipStyles.tipContent}>
            <h1>Dica</h1>
            <p><span>Oi</span></p>
        </div>
    </div>
}