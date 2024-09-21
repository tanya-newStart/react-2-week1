"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function EpicImage({ params }) {
  const { date } = params;

  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!date) return;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const url = `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

        const response = await fetch(url, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setImage(data[0]);
        } else {
          setImage(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [date]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!image) {
    return <div>No image found</div>;
  }

  const imgUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replace(
    /-/g,
    "/"
  )}/png/${image.image}.png`;
  console.log("Image URL:", imgUrl);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Picture of the day for {date}</h1>
      <img
        src={imgUrl}
        alt={`Epic image for ${date}`}
        className={styles.image}
      />
      <p>{image.caption}</p>
    </div>
  );
}
