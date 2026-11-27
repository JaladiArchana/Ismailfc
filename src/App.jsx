import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { SpecialsSection } from './components/SpecialsSection';
import { BakerySection } from './components/BakerySection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

const ROUTE_TO_SECTION = {
  '/': 'home',
  '/about': 'about',
  '/menu': 'menu',
  '/specials': 'specials',
  '/bakery': 'bakery',
  '/gallery': 'gallery',
  '/reviews': 'reviews',
  '/contact': 'contact',
};

const OBSERVED_SECTIONS = [
  'home',
  'about',
  'menu',
  'specials',
  'bakery',
  'gallery',
  'reviews',
  'contact',
];

function RestaurantLandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryCategory, setEnquiryCategory] = useState('Biryani');
  const location = useLocation();

  // Scroll to target section if navigated directly via route (e.g., /menu, /bakery)
  useEffect(() => {
    const targetId = ROUTE_TO_SECTION[location.pathname];
    if (targetId && location.pathname !== '/') {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      }
    }
  }, [location.pathname]);

  // Highlight active nav item based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Map specials & reviews to nearest primary nav section for clean nav state
            if (id === 'specials') {
              setActiveSection('menu');
            } else if (id === 'reviews') {
              setActiveSection('gallery');
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0,
      }
    );

    OBSERVED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenEnquiry = (categoryName = 'Biryani') => {
    setEnquiryCategory(categoryName);
    setEnquiryOpen(true);
  };

  return (
    <div className="app-shell">
      <Navbar
        activeSection={activeSection}
        onOpenEnquiry={() => handleOpenEnquiry('Biryani')}
      />

      <main>
        <Hero />
        <About />
        <MenuSection onEnquireCategory={handleOpenEnquiry} />
        <SpecialsSection />
        <BakerySection onEnquireBakery={handleOpenEnquiry} />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryOpen}
        initialCategory={enquiryCategory}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantLandingPage />} />
      <Route path="/about" element={<RestaurantLandingPage />} />
      <Route path="/menu" element={<RestaurantLandingPage />} />
      <Route path="/specials" element={<RestaurantLandingPage />} />
      <Route path="/bakery" element={<RestaurantLandingPage />} />
      <Route path="/gallery" element={<RestaurantLandingPage />} />
      <Route path="/contact" element={<RestaurantLandingPage />} />
      <Route path="*" element={<RestaurantLandingPage />} />
    </Routes>
  );
}
