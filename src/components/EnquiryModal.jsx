import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import {
  BUSINESS_INFO,
  MENU_CATEGORIES,
  createWhatsAppUrl,
} from '../data/restaurantData';
import './EnquiryModal.css';

export function EnquiryModal({ isOpen, initialCategory, onClose }) {
  const [serviceType, setServiceType] = useState('Dine-in');
  const [category, setCategory] = useState(initialCategory || 'Biryani');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categoryOptions = [
    ...MENU_CATEGORIES.map((c) => c.name),
    'Bakery Products',
    'Cakes',
    'Pastries',
    'General Enquiry',
  ].filter((value, index, self) => self.indexOf(value) === index);

  const composedMessage = `Hello Ismail Food Court, I would like to make a ${serviceType} enquiry regarding ${category}.${
    notes.trim() ? ` Details: ${notes.trim()}` : ''
  }`;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    window.open(createWhatsAppUrl(composedMessage), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="enquiry-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="enquiry-modal__backdrop" onClick={onClose} />
      <div className="enquiry-modal__dialog">
        <div className="enquiry-modal__header">
          <div>
            <span className="enquiry-modal__eyebrow">Direct Connection</span>
            <h2 id="enquiry-modal-title" className="enquiry-modal__title">
              Order or Enquire
            </h2>
          </div>
          <button
            type="button"
            className="enquiry-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="enquiry-modal__form">
          <div className="enquiry-modal__field">
            <span className="enquiry-modal__label">Service Preference</span>
            <div className="enquiry-modal__pills" role="group" aria-label="Service preference">
              {BUSINESS_INFO.services.map((srv) => (
                <button
                  key={srv}
                  type="button"
                  className={`enquiry-modal__pill ${
                    serviceType === srv ? 'is-active' : ''
                  }`}
                  onClick={() => setServiceType(srv)}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          <div className="enquiry-modal__field">
            <label htmlFor="enquiry-category" className="enquiry-modal__label">
              Category of Interest
            </label>
            <select
              id="enquiry-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="enquiry-modal__input"
            >
              {categoryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="enquiry-modal__field">
            <label htmlFor="enquiry-notes" className="enquiry-modal__label">
              Optional Note (Party size, timing, or item enquiry)
            </label>
            <textarea
              id="enquiry-notes"
              rows="3"
              placeholder="e.g., Enquiring about biryani availability, cake pre-order, or table timing..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="enquiry-modal__input enquiry-modal__textarea"
            />
          </div>

          <div className="enquiry-modal__actions">
            <button type="submit" className="btn btn--gold enquiry-modal__submit">
              <MessageCircle size={17} aria-hidden="true" />
              <span>Send on WhatsApp</span>
            </button>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="btn btn--outline-dark enquiry-modal__call"
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          <p className="enquiry-modal__footnote">
            Open daily {BUSINESS_INFO.hoursSummary} · Gopal Nagar, Ongole
          </p>
        </form>
      </div>
    </div>
  );
}
