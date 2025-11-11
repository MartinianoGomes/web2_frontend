import buttonStyles from "./button.module.css"
import { ButtonInfo } from "./ButtonInfo/ButtonInfo"

export function Button () {
  return (
    <button className={buttonStyles.button} type="button">
      <ButtonInfo />
    </button>
  )
}