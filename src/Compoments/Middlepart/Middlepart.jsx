import React, { useState, useEffect } from 'react';
import './Middlepart.css'; // Ensure the path is correct

const Middlepart = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 4) { // Number of slides
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 4;
      }
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("slide_fade");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.opacity = 1;
      dots[slideIndex - 1].className += " active";
    }
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="slide_fade">
          <img src="./assets/I-2.jpg" alt="Image 1" />
        </div>

        <div className="slide_fade">
          <img src="./assets/I-2.jpg" alt="Image 2" />
          <div className='Slide_overlay'>
          <div className="text-overlay">Research & Analysis</div>
          <p>Research analysis for an energy company involves a thorough examination of market trends, technological advancements, and regulatory environments to inform strategic decisions. This process includes evaluating energy consumption patterns, assessing the potential of renewable energy sources, and analyzing the impact of emerging technologies on efficiency and sustainability. By interpreting data from various sources, such as industry reports, consumer behavior studies, and environmental impact assessments, an energy company can optimize operations, forecast future demands, and develop innovative solutions to meet the growing need for sustainable energy. This analysis is crucial for staying competitive in a rapidly evolving sector.</p>
          </div>
          
        </div>

        <div className="slide_fade">
          <img src="./assets/I-2.jpg" alt="Image 3" />
          <div className="text-overlay">Industry Development</div>
        </div>

        <div className="slide_fade">
          <img src="./assets/I-2.jpg" alt="Image 4" />
          <div className='Slide_overlay'>
          <div className="text-overlay">Production Launch</div>
          </div>
          
          
        </div>

        {/* Next and previous buttons */}
        <a className="prev_mid" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next_mid" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>

      <br />

      {/* Dots */}
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
      </div>
    </div>
  );
};

export default Middlepart;
