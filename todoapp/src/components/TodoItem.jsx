import styles from "./todoItem.module.css";
export default function TodoItem({ item, todovars, setTodovars }) {
  function deleteItem(item) {
    setTodovars(todovars.filter((todo) => todo.name != item));
  }
  function strikeItem(name) {
    setTodovars(
      todovars.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todovars);
  }
  const taskCompleted = item.done ? styles.completed : "";
  return (
    <div className={styles.itemComponent}>
      <div className={styles.itemName}>
        <span className={taskCompleted} onClick={() => strikeItem(item.name)}>
          {item.name}
        </span>

        <button
          onClick={() => deleteItem(item.name)}
          className={styles.deleteBtn}
        >
          x
        </button>
      </div>
      <hr />
    </div>
  );
}
