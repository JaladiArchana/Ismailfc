import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BAKERY_HIGHLIGHTS } from '../data/restaurantData';
import './BakerySection.css';

export function BakerySection({ onEnquireBakery }) {
  const [activeId, setActiveId] = useState(BAKERY_HIGHLIGHTS[0].id);
  const current =
    BAKERY_HIGHLIGHTS.find((item) => item.id === activeId) || BAKERY_HIGHLIGHTS[0];

  return (
    <section id="bakery" className="section bakery" aria-labelledby="bakery-heading">
      <div className="container">
        <div className="bakery__top">
          <div>
            <span className="section-eyebrow">The Bakery &amp; Sweet Counter</span>
            <h2 id="bakery-heading" className="section-title">
              Fresh Cakes, Pastries, Bakes &amp; Sweets
            </h2>
            <p className="section-subtitle">
              Alongside our restaurant kitchen, Ismail Food Court features an
              everyday bakery and mithai counter—perfect for afternoon tea,
              celebrations, and family takeaway boxes.
            </p>
          </div>
        </div>

        {/* Interactive Category Switcher */}
        <div className="bakery__showcase">
          <div className="bakery__tabs" role="tablist" aria-label="Bakery categories">
            {BAKERY_HIGHLIGHTS.map((item) => {
              const isSelected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`bakery__tab ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className="bakery__tab-sub">{item.subtitle}</span>
                  <span className="bakery__tab-title">{item.title}</span>
                </button>
              );
            })}
          </div>

          <div className="bakery__panel" role="tabpanel">
            <div className="bakery__panel-media">
              <img
                src={current.image}
                alt={current.imageAlt}
                className="bakery__panel-img"
              />
            </div>

            <div className="bakery__panel-body">
              <span className="bakery__panel-eyebrow">{current.subtitle}</span>
              <h3 className="bakery__panel-title">{current.title}</h3>
              <p className="bakery__panel-desc">{current.description}</p>

              <ul className="bakery__points">
                {current.points.map((point) => (
                  <li key={point} className="bakery__point">
                    <CheckCircle2
                      size={16}
                      className="bakery__point-icon"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="bakery__panel-actions">
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => onEnquireBakery(current.title)}
                >
                  <span>Enquire About {current.title}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Strip Showing All 4 Highlights at a Glance */}
        <div className="bakery__strip">
          {BAKERY_HIGHLIGHTS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`bakery__mini-card ${
                item.id === activeId ? 'is-active' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="bakery__mini-img"
                loading="lazy"
              />
              <div className="bakery__mini-text">
                <span className="bakery__mini-sub">{item.subtitle}</span>
                <span className="bakery__mini-title">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
