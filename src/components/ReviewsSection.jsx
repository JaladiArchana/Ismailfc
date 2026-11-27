import React from 'react';
import {
  Clock,
  ExternalLink,
  Smile,
  Sparkles,
  Star,
  Utensils,
  Wallet,
} from 'lucide-react';
import { BUSINESS_INFO, REVIEW_THEMES } from '../data/restaurantData';
import './ReviewsSection.css';

const ICON_MAP = {
  Utensils,
  Wallet,
  Smile,
  Clock,
  Sparkles,
};

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="section reviews"
      aria-labelledby="reviews-heading"
    >
      <div className="container reviews__layout">
        <div className="reviews__summary">
          <span className="section-eyebrow">Customer Experience</span>
          <h2 id="reviews-heading" className="section-title">
            What Guests Appreciate Most
          </h2>
          <p className="section-subtitle">
            Feedback highlights gathered from guests dining at Ismail Food Court
            in Ongole.
          </p>

          <div className="rating-card">
            <div className="rating-card__score-row">
              <span className="rating-card__number">{BUSINESS_INFO.rating}</span>
              <span className="rating-card__denom">
                /{BUSINESS_INFO.ratingMax}
              </span>
            </div>

            <div
              className="rating-card__stars"
              aria-label={`Rated ${BUSINESS_INFO.rating} out of ${BUSINESS_INFO.ratingMax} stars`}
            >
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  size={20}
                  fill="currentColor"
                  className="rating-card__star-filled"
                  aria-hidden="true"
                />
              ))}
              <Star
                size={20}
                className="rating-card__star-empty"
                aria-hidden="true"
              />
            </div>

            <p className="rating-card__caption">
              <strong>{BUSINESS_INFO.rating}/5</strong> based on{' '}
              <strong>{BUSINESS_INFO.reviewCount} Google reviews</strong>
            </p>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rating-card__link"
            >
              <span>View on Google Maps</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="reviews__themes" aria-label="Common guest review themes">
          {REVIEW_THEMES.map((theme) => {
            const IconComponent = ICON_MAP[theme.icon] || Sparkles;
            return (
              <article key={theme.id} className="theme-card">
                <div className="theme-card__icon" aria-hidden="true">
                  <IconComponent size={20} />
                </div>
                <div className="theme-card__body">
                  <h3 className="theme-card__title">{theme.title}</h3>
                  <p className="theme-card__text">{theme.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
