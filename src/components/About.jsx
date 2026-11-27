import React from 'react';
import { Check, Clock, MapPin } from 'lucide-react';
import { ABOUT_DATA, BUSINESS_INFO } from '../data/restaurantData';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container about__layout">
        <div className="about__content">
          <span className="section-eyebrow">{ABOUT_DATA.eyebrow}</span>
          <h2 id="about-heading" className="section-title">
            {ABOUT_DATA.heading}
          </h2>

          <div className="about__prose">
            {ABOUT_DATA.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="about__pillars">
            {ABOUT_DATA.highlights.map((item) => (
              <div key={item.title} className="about__pillar">
                <span className="about__pillar-icon" aria-hidden="true">
                  <Check size={15} />
                </span>
                <div>
                  <h3 className="about__pillar-title">{item.title}</h3>
                  <p className="about__pillar-text">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about__footer-note">
            <span className="about__meta-chip">
              <MapPin size={14} aria-hidden="true" />
              Islampet, Gopal Nagar, Ongole
            </span>
            <span className="about__meta-chip">
              <Clock size={14} aria-hidden="true" />
              {BUSINESS_INFO.hoursSummary}
            </span>
          </div>
        </div>

        <div className="about__visual">
          <div className="about__frame">
            <img
              src={ABOUT_DATA.image}
              alt={ABOUT_DATA.imageAlt}
              className="about__image"
              loading="lazy"
            />
          </div>

          <aside className="about__caption-card" aria-label="Kitchen and bakery summary">
            <span className="about__caption-eyebrow">Under One Roof</span>
            <p className="about__caption-text">
              Aromatic biryani, restaurant main courses, oven-fresh bakery items,
              cakes, pastries, traditional sweets, and evening snacks.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
