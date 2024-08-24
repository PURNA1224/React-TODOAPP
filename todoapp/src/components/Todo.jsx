import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import Footer from "./Footer";

export default function Todo() {
  const [todovars, setTodovars] = useState([]);
  const completedCount = todovars.filter((todo) => todo.done === true).length;
  const totalCount = todovars.length;
  return (
    <div>
      <Form todovars={todovars} setTodovars={setTodovars} />
      <TodoList todovars={todovars} setTodovars={setTodovars} />
      <Footer completeCount={completedCount} totalCount={totalCount} />
    </div>
  );
}
