import React from 'react';
import { ArrowRight, Clock, MapPin, Star, UtensilsCrossed } from 'lucide-react';
import { BUSINESS_INFO, HERO_MEDIA } from '../data/restaurantData';
import './Hero.css';

export function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero" aria-label="Welcome to Ismail Food Court">
      <div className="hero__media">
        <img
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          className="hero__image"
          fetchPriority="high"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow animate-hero">
            <MapPin size={14} aria-hidden="true" />
            <span>Gopal Nagar, Ongole · Andhra Pradesh</span>
          </p>

          <h1 className="hero__title animate-hero-delay-1">
            Good Food.
            <br />
            <span className="hero__title-accent">Great Moments.</span>
          </h1>

          <p className="hero__subtitle animate-hero-delay-2">
            Discover delicious food, freshly prepared favourites and delightful
            bakery treats at Ismail Food Court.
          </p>

          <div className="hero__actions animate-hero-delay-3">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('menu');
              }}
              className="btn btn--gold"
            >
              <span>Explore Our Menu</span>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn btn--outline-light"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__footer-strip">
        <div className="container hero__strip-grid">
          <div className="hero__strip-item">
            <UtensilsCrossed size={16} className="hero__strip-icon" aria-hidden="true" />
            <div>
              <span className="hero__strip-label">Services</span>
              <span className="hero__strip-value">
                {BUSINESS_INFO.services.join(' · ')}
              </span>
            </div>
          </div>

          <div className="hero__strip-item">
            <Clock size={16} className="hero__strip-icon" aria-hidden="true" />
            <div>
              <span className="hero__strip-label">Opening Hours</span>
              <span className="hero__strip-value">{BUSINESS_INFO.hoursDetail}</span>
            </div>
          </div>

          <a href="#reviews" className="hero__strip-item hero__strip-item--link">
            <Star size={16} className="hero__strip-icon" fill="currentColor" aria-hidden="true" />
            <div>
              <span className="hero__strip-label">Google Rating</span>
              <span className="hero__strip-value">
                {BUSINESS_INFO.rating}/{BUSINESS_INFO.ratingMax} ({BUSINESS_INFO.reviewCount} reviews)
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
