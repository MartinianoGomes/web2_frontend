import "./global.css"
import styles from "./app.module.css"

import { useState, useEffect } from "react";

import { Button } from "./components/button"

export function App() {
  let [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prevState) => prevState + 1);
  }

  useEffect(() => {
    if (count > 0) console.log("O valor mudou para " + count);
  }, [count])

  function handleRemove() {
    if (count > 0) setCount((prevState) => prevState - 1);
  }

  return (
    <div className={styles.container}>
      <Button
        name="Adicionar"
        onClick={handleAdd}
      />

      <span>{count}</span>

      <Button
        name="Subtrair"
        onClick={handleRemove}
      />
    </div>
  )
}