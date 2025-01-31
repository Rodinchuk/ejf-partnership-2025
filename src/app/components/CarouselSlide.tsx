"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import about1 from '../../../public/images/about1.png';
import about2 from '../../../public/images/about2.png';
import about3 from '../../../public/images/about3.png';
import about4 from '../../../public/images/about4.png';
import './Carousel.css';

const images = [
  about1,
  about2,
  about3,
  about4,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.div
              key={image.src}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1 }}
              className="carousel-slide"
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="carousel-slide"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      </div>
  );
};

export default Carousel;