import React, { useEffect, useState } from 'react';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_INFO, NAV_LINKS } from '../data/restaurantData';
import { BrandMark } from './BrandMark';
import './Navbar.css';

export function Navbar({ activeSection, onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (event, item) => {
    event.preventDefault();
    setMobileOpen(false);
    navigate(item.path, { replace: false });
    const targetId = item.href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a
          href="#home"
          className="site-header__brand"
          aria-label="Ismail Food Court home"
          onClick={(e) => handleNavClick(e, NAV_LINKS[0])}
        >
          <BrandMark light={!scrolled} compact={scrolled} />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="site-nav__list">
            {NAV_LINKS.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`site-nav__link ${isActive ? 'is-active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="site-header__phone"
            aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
          >
            <PhoneCall size={15} aria-hidden="true" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            type="button"
            className="btn btn--gold site-header__cta"
            onClick={() => onOpenEnquiry()}
          >
            <span>Order / Enquire</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="site-header__toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="mobile-drawer__backdrop"
          onClick={() => setMobileOpen(false)}
        />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__top">
            <BrandMark compact />
            <button
              type="button"
              className="mobile-drawer__close"
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="mobile-drawer__list">
              {NAV_LINKS.map((item) => {
                const sectionKey = item.href.replace('#', '');
                const isActive = activeSection === sectionKey;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`mobile-drawer__link ${isActive ? 'is-active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-drawer__footer">
            <button
              type="button"
              className="btn btn--primary mobile-drawer__cta"
              onClick={() => {
                setMobileOpen(false);
                onOpenEnquiry();
              }}
            >
              Order / Enquire
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <div className="mobile-drawer__meta">
              <p>{BUSINESS_INFO.hoursDetail}</p>
              <a href={BUSINESS_INFO.phoneHref}>{BUSINESS_INFO.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
