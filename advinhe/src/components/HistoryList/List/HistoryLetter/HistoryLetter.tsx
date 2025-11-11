import historyLetterStyles from "./historyletter.module.css"

interface historyLetterProps {
    letter: string
}

export function HistoryLetter ({letter} : historyLetterProps) {
    return <div className={historyLetterStyles.historyletter}>
        <h1>{letter.toUpperCase()}</h1>
    </div>
}