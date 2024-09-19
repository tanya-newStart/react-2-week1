"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function EpicImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestImage() {
      setLoading(true);
      setError(null);
      try {
        const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0) {
          const latestImage = data[0];
          const latestDate = latestImage.date;

          const detailsUrl = `https://api.nasa.gov/EPIC/api/natural/date/${latestDate}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
          const detailsResponse = await fetch(detailsUrl);
          const detailsData = await detailsResponse.json();

          if (detailsData && detailsData.length > 0) {
            setImage(detailsData[0]);
          } else {
            setImage(null);
          }
        } else {
          setImage(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestImage();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!image) {
    return <div>No image found</div>;
  }

  const date = image.date.split(" ")[0];
  console.log(date);

  const baseUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replace(
    /-/g,
    "/"
  )}`;
  const cleanedUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const pngUrl = `${cleanedUrl}/png/${image.image}.png`;
  const jpgUrl = `${cleanedUrl}/jpg/${image.image}.jpg`;
  console.log(pngUrl);
  console.log(jpgUrl);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Picture of the Day</h1>
      <picture>
        <source srcSet={`${pngUrl} 1x`} type="image/png" />
        <source srcSet={`${jpgUrl} 1x`} type="image/jpeg" />
        <img
          src={jpgUrl}
          alt="Latest Picture of the Day"
          className={styles.image}
        />
      </picture>
      <p>{image.caption}</p>
    </div>
  );
}
