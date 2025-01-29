import React, { useState } from "react";
import "./Carrousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Carrousel = ({ pictures, cover }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <img
        className="carrousel-image"
        src={pictures[currentIndex] || cover}
        alt={`Slide ${currentIndex + 1}`}
      />
      {pictures.length > 1 && (
        <>
          <button className="carrousel-button carrousel-button-prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carrousel-button carrousel-button-next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <div className="carrousel-indicators">
        {pictures.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
