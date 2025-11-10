import headerStyles from "./header.module.css";
import logo from "../../assets/logo.png"
import { Info } from "./Info/Info";

export function Header () {
    return <div className={headerStyles.header}>
        <img src={logo}  className={headerStyles.logoHeader} alt="Logo" />

        <Info />
    </div>
}