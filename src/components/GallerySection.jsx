import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import './GallerySection.css';

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((prev) =>
      prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const activeItem =
    selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  return (
    <section
      id="gallery"
      className="section gallery"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <div className="gallery__header">
          <div>
            <span className="section-eyebrow">Visual Tour</span>
            <h2 id="gallery-heading" className="section-title">
              Atmosphere, Kitchen &amp; Bakery Gallery
            </h2>
          </div>
          <p className="section-subtitle gallery__sub">
            A glimpse into our dining atmosphere, aromatic biryanis, bakery
            displays, celebration cakes, and freshly prepared platters.
          </p>
        </div>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`gallery__item gallery__item--${item.span}`}
              onClick={() => openLightbox(idx)}
              aria-label={`View larger image: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <div>
                  <span className="gallery__cat">{item.category}</span>
                  <span className="gallery__title">{item.title}</span>
                </div>
                <span className="gallery__zoom" aria-hidden="true">
                  <Expand size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div className="lightbox__backdrop" onClick={closeLightbox} />
          <div className="lightbox__content">
            <button
              type="button"
              className="lightbox__close"
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <figure className="lightbox__figure">
              <img
                src={activeItem.image}
                alt={activeItem.alt}
                className="lightbox__img"
              />
              <figcaption className="lightbox__caption">
                <span>{activeItem.category}</span>
                <strong>{activeItem.title}</strong>
              </figcaption>
            </figure>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={showNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
