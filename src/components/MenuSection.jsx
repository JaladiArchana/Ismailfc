import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/restaurantData';
import './MenuSection.css';

export function MenuSection({ onEnquireCategory }) {
  const featuredCategories = MENU_CATEGORIES.filter((cat) => cat.featured);
  const secondaryCategories = MENU_CATEGORIES.filter((cat) => !cat.featured);

  return (
    <section id="menu" className="section menu-section" aria-labelledby="menu-heading">
      <div className="container">
        <div className="menu-section__header">
          <div>
            <span className="section-eyebrow">Our Offerings</span>
            <h2 id="menu-heading" className="section-title">
              Explore Our Food Categories
            </h2>
            <p className="section-subtitle">
              From hearty kitchen biryanis and classic main courses to oven-fresh
              bakery treats, sweets, and savoury snacks.
            </p>
          </div>

          <div className="menu-section__notice" role="note">
            <Info size={16} className="menu-section__notice-icon" aria-hidden="true" />
            <p>
              <strong>Sample Category Guide:</strong> Specific dish listings and
              daily pricing are available directly at the restaurant or via phone
              &amp; WhatsApp enquiry.
            </p>
          </div>
        </div>

        {/* Two Primary Signature Categories */}
        <div className="menu-featured-grid">
          {featuredCategories.map((category) => (
            <article key={category.id} className="menu-featured-card">
              <div className="menu-featured-card__media">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="menu-featured-card__img"
                  loading="lazy"
                />
                <span className="menu-featured-card__badge">{category.tagline}</span>
              </div>

              <div className="menu-featured-card__body">
                <div className="menu-featured-card__top">
                  <h3 className="menu-featured-card__title">{category.name}</h3>
                  <span className="sample-tag">Sample Overview</span>
                </div>
                <p className="menu-featured-card__desc">{category.description}</p>
                <p className="menu-featured-card__sample-note">{category.sampleNote}</p>

                <div className="menu-featured-card__footer">
                  <span className="menu-featured-card__avail">
                    {category.availability}
                  </span>
                  <button
                    type="button"
                    className="menu-card__action"
                    onClick={() => onEnquireCategory(category.name)}
                  >
                    <span>Enquire Menu</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Four Complementary Bakery, Sweet & Snack Categories */}
        <div className="menu-secondary-grid">
          {secondaryCategories.map((category) => (
            <article key={category.id} className="menu-compact-card">
              <div className="menu-compact-card__media">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="menu-compact-card__img"
                  loading="lazy"
                />
              </div>

              <div className="menu-compact-card__body">
                <span className="menu-compact-card__eyebrow">
                  {category.tagline} · Sample
                </span>
                <h3 className="menu-compact-card__title">{category.name}</h3>
                <p className="menu-compact-card__desc">{category.description}</p>

                <button
                  type="button"
                  className="menu-card__action menu-compact-card__btn"
                  onClick={() => onEnquireCategory(category.name)}
                >
                  <span>Ask Availability</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
