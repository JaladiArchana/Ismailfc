import React from 'react';
import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Utensils,
} from 'lucide-react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../data/restaurantData';
import './ContactSection.css';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact__header">
          <span className="section-eyebrow">Visit or Reach Out</span>
          <h2 id="contact-heading" className="section-title">
            Find Us in Ongole
          </h2>
          <p className="section-subtitle">
            Drop by for a relaxed meal, pick up fresh bakery treats, or connect
            with us directly by phone or WhatsApp.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info-card">
            <div className="contact__brand-block">
              <h3 className="contact__business-name">{BUSINESS_INFO.name}</h3>
              <p className="contact__city">{BUSINESS_INFO.shortCity}</p>
            </div>

            <div className="contact__details">
              <div className="contact__row">
                <span className="contact__icon" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <div>
                  <span className="contact__label">Address</span>
                  <p className="contact__value">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="contact__row">
                <span className="contact__icon" aria-hidden="true">
                  <Phone size={18} />
                </span>
                <div>
                  <span className="contact__label">Phone</span>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="contact__value contact__link"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="contact__row">
                <span className="contact__icon" aria-hidden="true">
                  <Clock size={18} />
                </span>
                <div>
                  <span className="contact__label">Opening Hours</span>
                  <p className="contact__value">{BUSINESS_INFO.hoursDetail}</p>
                </div>
              </div>

              <div className="contact__row">
                <span className="contact__icon" aria-hidden="true">
                  <Utensils size={18} />
                </span>
                <div>
                  <span className="contact__label">Available Services</span>
                  <p className="contact__value">
                    {BUSINESS_INFO.services.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            <div className="contact__actions">
              <a href={BUSINESS_INFO.phoneHref} className="btn btn--primary">
                <Phone size={16} aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-dark"
              >
                <Navigation size={16} aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="contact__map-card">
            <iframe
              title="Ismail Food Court location on Google Maps"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              className="contact__map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact__map-bar">
              <span>
                Islampet, Gopal Nagar · Ongole, Andhra Pradesh 523001
              </span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-open"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
