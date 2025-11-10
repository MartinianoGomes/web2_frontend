import "./global.css"

import { BodyGame } from "./components/BodyGame/BodyGame"
import { Tip } from "./components/Tip/Tip"

export default function app(){
  return(
    <div className="app">
      <BodyGame />
      {/* <Tip /> */}
    </div>
  )
}