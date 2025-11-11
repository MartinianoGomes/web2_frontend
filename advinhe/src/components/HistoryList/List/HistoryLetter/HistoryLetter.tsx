import historyLetterStyles from "./historyletter.module.css"
import { GlobalContext } from "../../../GlobalStorage/GlobalStorage";
import type { GlobalType } from "../../../GlobalStorage/GlobalStorage";
import React from "react";

interface historyLetterProps {
    letter: string
}

export function HistoryLetter () {
    const global = React.useContext(GlobalContext) as GlobalType;
    return <div className={historyLetterStyles.historyletter}>
       <h1>{global.input}</h1>
    </div>
}