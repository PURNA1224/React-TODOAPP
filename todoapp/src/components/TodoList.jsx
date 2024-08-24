import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todovars, setTodovars }) {
  const sortedTodos = todovars
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  const emptyDiv = todovars.length === 0 ? styles.divShow : styles.divEmpty;
  return (
    <div className={styles.listComponent}>
      <div className={emptyDiv}>Empty</div>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todovars={todovars}
          setTodovars={setTodovars}
        />
      ))}
    </div>
  );
}
