import { SecretLetter } from "./SecretLetter/SecretLetter"
import secretWord from "./secretword.module.css"
import { WORDS } from "../../utils/words"

export const randomWord = Math.trunc(Math.random() * WORDS.length);
export const arrayLetters = Array.from(WORDS[randomWord].word);

export function SecretWord  () {
    return <div className={secretWord.secretword}>
        {arrayLetters && arrayLetters.map((letter, index) => {
            return <SecretLetter key={index} letter={letter} />
        })}
    </div>
}