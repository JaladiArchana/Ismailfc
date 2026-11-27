import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SAMPLE_SPECIALS, createWhatsAppUrl } from '../data/restaurantData';
import './SpecialsSection.css';

export function SpecialsSection() {
  return (
    <section
      id="specials"
      className="section specials"
      aria-labelledby="specials-heading"
    >
      <div className="container">
        <div className="specials__header">
          <div>
            <span className="section-eyebrow section-eyebrow--light">
              Featured Highlights
            </span>
            <h2 id="specials-heading" className="section-title section-title--light">
              Popular Kitchen &amp; Bakery Selections
            </h2>
          </div>

          <p className="section-subtitle section-subtitle--light specials__note">
            These cards present sample highlights across our core categories.
            Please call or message us on WhatsApp for today’s exact dishes and
            current prices.
          </p>
        </div>

        <div className="specials__grid">
          {SAMPLE_SPECIALS.map((item) => (
            <article key={item.id} className="special-card">
              <div className="special-card__media">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="special-card__img"
                  loading="lazy"
                />
                <span className="special-card__badge">{item.badge}</span>
              </div>

              <div className="special-card__body">
                <span className="special-card__category">{item.category}</span>
                <h3 className="special-card__title">{item.name}</h3>
                <p className="special-card__desc">{item.description}</p>

                <div className="special-card__footer">
                  <div className="special-card__price-box">
                    <span className="special-card__price-label">Pricing</span>
                    <span className="special-card__price-placeholder">
                      {item.pricePlaceholder}
                    </span>
                  </div>

                  <a
                    href={createWhatsAppUrl(
                      `Hello Ismail Food Court, could you please share current menu options and pricing for ${item.category}?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="special-card__whatsapp"
                    aria-label={`Enquire on WhatsApp about ${item.name}`}
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
