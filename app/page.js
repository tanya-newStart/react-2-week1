import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Advanced Routing</h1>
        <ol>
          <li>
            <Link href="/render_ssr">
              NASA Image of the day - Server Side Rendering
            </Link>
          </li>
          <li>
            <Link href="/rover_photos">
              Rover Photos - Render using useEffect()
            </Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
