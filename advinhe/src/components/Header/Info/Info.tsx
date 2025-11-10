import infoStyles from "./info.module.css"
import icon1 from "../../../assets/restart.svg"

export function Info () {
    return <div className={infoStyles.info}>
        <p><span>5</span> de 10 tentativas</p>
        <img src={icon1} alt="Restart icon" />
    </div>
}