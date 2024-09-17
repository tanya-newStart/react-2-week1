import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>React-2 exercises.</li>
          <li>Advanced Routing.</li>
        </ol>
      </main>
    </div>
  );
}
