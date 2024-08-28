import React, { useState } from 'react';
import styles from './PhotoCarousel.module.css';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prevPhoto}>&lt;</button>
      <div className={styles.imageContainer}>
        <image
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          className={styles.image}
        />
      </div>
      <button className={styles.arrow} onClick={nextPhoto}>&gt;</button>
      <div className={styles.indicators}>
        {photos.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;