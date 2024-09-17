"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function RoverPhotos() {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const [roverPhotos, setRoverPhotos] = useState([]);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(url).then((response) =>
        response.json()
      );
      setRoverPhotos(roverPhotoResponse.photos);
    };

    fetchRoverPhotos();
  }, []);
  const limitedPhotos = roverPhotos.slice(0, 6);
  return (
    <div className={styles.container}>
      {limitedPhotos.length > 0 ? (
        limitedPhotos.map((photo) => (
          <div key={photo.id} className={styles.photoContainer}>
            <h2>{photo.rover.name}</h2>
            <img src={photo.img_src} alt="" className={styles.image} />
          </div>
        ))
      ) : (
        <p>No photos available</p>
      )}
    </div>
  );
}
