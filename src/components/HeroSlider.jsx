import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[index];
  const background = slide.image
    ? `linear-gradient(120deg, rgba(11, 27, 50, 0.85), rgba(36, 82, 143, 0.65)), url(${slide.image})`
    : "linear-gradient(120deg, rgba(11, 27, 50, 0.95), rgba(36, 82, 143, 0.85))";

  return (
    <section className="hero">
      <div className="hero-slide" style={{ backgroundImage: background }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-meta">{slide.subtitle}</div>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link className="button" to={slide.ctaLink}>
                {slide.ctaLabel}
              </Link>
              <Link className="button outline" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hero-controls">
            <button type="button" onClick={() => setIndex((index - 1 + slides.length) % slides.length)}>
              ‹
            </button>
            <button type="button" onClick={() => setIndex((index + 1) % slides.length)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
