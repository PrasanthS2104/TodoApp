import styles from "./Todolist.module.css";
import TodoItem from "./TodoItem";
export default function Todolist({ todos,setTodos }) {
   const sortedTodo = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={styles.list}>
      {sortedTodo.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
