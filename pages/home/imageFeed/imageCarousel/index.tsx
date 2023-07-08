import React, { useState } from "react";
import { Characters } from "../../../../Interface";

import { Grid } from "@mui/material";
import Character from "@/pages/components/character";
import styles from "@/styles/imageCarousel.module.css";
const ImageCarousel: React.FC<Characters> = ({ characters }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id, name, image } = characters[currentIndex];
  const limit = characters.length;
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? limit - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === limit - 1 ? 0 : prev + 1));
  };
  return (
    <div className={styles.carousel}>
      <button className={styles.control} onClick={handlePrev}>
        prev
      </button>
      <div className={styles.carouselSlide}>
        <img src={image} alt={name} />
        <p>{name} </p>
      </div>
      <button className={styles.control} onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default ImageCarousel;
