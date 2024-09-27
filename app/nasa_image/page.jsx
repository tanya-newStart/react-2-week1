import Link from "next/link";
import styles from "./page.module.css";

export default function EpicImageHome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>No date provided</h1>
      <p>Please select a date to view the NASA image.</p>
      <p className={styles.info}>
        For example, to view the image for October 31, 2015, navigate to:
        <br />
        <code>http://localhost:3000/nasa_image/2015-10-31</code>{" "}
      </p>

      <p className={styles.info}>
        You can also click the link below to view the NASA image for that date:
      </p>
      <Link href="/nasa_image/2015-10-31">
        View NASA image for October 31, 2015
      </Link>
    </div>
  );
}
