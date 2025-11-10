import "./global.css"

import { BodyGame } from "./components/BodyGame/BodyGame"

export default function app(){
  return(
    <div className="app">
      <BodyGame />
    </div>
  )
}