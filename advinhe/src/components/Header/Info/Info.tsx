import infoStyles from "./info.module.css"
import icon1 from "../../../assets/restart.svg"

function reloadPage() {
    window.location.reload();
}

export function Info () {
    return <div className={infoStyles.info}>
        <p><span>5</span> de 10 tentativas</p>
        <img src={icon1} onClick={reloadPage} alt="Restart icon" />
    </div>
}