import styles from "./footer.module.css";

export default function Footer({ completeCount, totalCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>complete Todos:{completeCount} </span>
      <span className={styles.item}>Total Todos:{totalCount}</span>
    </div>
  );
}
