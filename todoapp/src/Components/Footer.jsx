import styles from "./Footer.module.css";

export default function Footer({ completed, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        <h1>Completed Todos:{completed}</h1>
      </span>
      <span className={styles.item}>
        <h1>totalTodos :{totalTodos}</h1>
      </span>
    </div>
  );
}
