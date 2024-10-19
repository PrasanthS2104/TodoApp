import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer completed={completed} totalTodos={totalTodos} />
    </div>
  );
}
