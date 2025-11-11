import secretLetterStyles from "./secretletter.module.css"

interface secretLetterProps {
    letter: string
}

export function SecretLetter ({letter}: secretLetterProps) {
    return <div className={secretLetterStyles.secretletter}>
        <h1>{letter.toUpperCase()}</h1>
    </div>
}