import Image from "next/image";
import styles from "./page.module.css";

export default async function ImageNasa() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  let data = await fetch(url);
  let image = await data.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{image.title}</h1>
      <Image
        src={image.url}
        alt=""
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
  );
}
