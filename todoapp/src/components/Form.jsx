import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todovars, setTodovars }) {
  const [todovar, setTodovar] = useState({ name: "", done: false });
  var placeholderText = "Enter todo items";
  function handleSubmit(e) {
    e.preventDefault();
    if (todovar.name !== "") {
      setTodovars([...todovars, todovar]);
      setTodovar({ name: "", done: false });
    }
  }
  return (
    <form className={styles.formStyle} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          placeholder={placeholderText}
          onChange={(e) => setTodovar({ name: e.target.value, done: false })}
          type="text"
          value={todovar.name}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
