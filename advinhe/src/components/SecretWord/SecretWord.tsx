import { SecretLetter } from "./SecretLetter/SecretLetter"
import secretWord from "./secretword.module.css"
import { WORDS } from "../../utils/words"

export function SecretWord  () {
    
    /*const numberRandom = () => (Math.random() * 10);
    const wordChanged = () => {
        for (const i = numberRandom; i <){}
    }*/

    return <div className={secretWord.secretword}>
        <SecretLetter />
    </div>
}