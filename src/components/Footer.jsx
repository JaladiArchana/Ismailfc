import React from 'react';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_INFO, NAV_LINKS } from '../data/restaurantData';
import { BrandMark } from './BrandMark';
import './Footer.css';

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (event, item) => {
    event.preventDefault();
    navigate(item.path);
    const id = item.href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand-col">
          <BrandMark light />
          <p className="site-footer__tagline">
            Serving restaurant favourites, biryani, bakery treats, cakes,
            pastries, sweets, and snacks in Ongole.
          </p>
          <div className="site-footer__services">
            {BUSINESS_INFO.services.map((service) => (
              <span key={service} className="site-footer__service-pill">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Quick Navigation</h3>
          <ul className="site-footer__links">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className="site-footer__link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Contact Information</h3>
          <ul className="site-footer__meta-list">
            <li>
              <MapPin size={16} className="site-footer__meta-icon" aria-hidden="true" />
              <span>{BUSINESS_INFO.address}</span>
            </li>
            <li>
              <Phone size={16} className="site-footer__meta-icon" aria-hidden="true" />
              <a href={BUSINESS_INFO.phoneHref} className="site-footer__meta-link">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </li>
            <li>
              <Navigation size={16} className="site-footer__meta-icon" aria-hidden="true" />
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__meta-link"
              >
                Directions on Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Opening Hours</h3>
          <div className="site-footer__hours">
            <Clock size={16} className="site-footer__meta-icon" aria-hidden="true" />
            <div>
              <p className="site-footer__hours-days">Monday – Sunday</p>
              <p className="site-footer__hours-time">
                {BUSINESS_INFO.hoursSummary}
              </p>
              <p className="site-footer__hours-note">Open every day</p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="site-footer__location-note">
            Islampet, Gopal Nagar, Ongole, Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
