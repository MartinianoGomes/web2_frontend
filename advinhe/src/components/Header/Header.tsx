import header from "./header.module.css";
import logo from "../../assets/logo.png"

export function Header () {
    return <div className={header.container}>
        <img src={logo} alt="Logo" />

        <div></div>
    </div>
}