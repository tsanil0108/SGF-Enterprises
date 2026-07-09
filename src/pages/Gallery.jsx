import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CTAPanel from '../components/CTAPanel';
import { galleryImages } from '../data/siteData';
import './Gallery.css';

const categories = ['All', 'Exterior', 'Interior', 'Amenity'];
const ratioCycle = ['4/3', '3/4', '1/1', '4/3'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const gridRef = useRef(null);

  const filtered = useMemo(
    () => (filter === 'All' ? galleryImages : galleryImages.filter((g) => g.category === filter)),
    [filter]
  );

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const items = node.querySelectorAll('.gallery-item');

    const fallback = setTimeout(() => {
      items.forEach((el) => el.classList.add('is-visible'));
    }, 400);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    items.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [filtered]);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Elegance in"
        accent="Every Frame"
        description="A closer look at the facade, interiors, and amenity spaces that make Elegance Heights feel like home from the first walkthrough."
        bgImage="/images/SkylineView.png"
      />

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-filters" role="tablist" aria-label="Filter gallery by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                className={`gallery-filter ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid" ref={gridRef} key={filter}>
            {filtered.map((img, i) => (
              <button
                type="button"
                className="gallery-item"
                key={img.id}
                style={{ '--i': i }}
                onClick={() => openLightbox(i)}
                aria-label={`View ${img.caption} full size`}
              >
                <ImagePlaceholder src={img.image} alt={img.caption} ratio={ratioCycle[i % ratioCycle.length]} />
                <div className="gallery-item__caption">
                  <span className="gallery-item__category">{img.category}</span>
                  <span>{img.caption}</span>
                </div>
                <span className="gallery-item__expand" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3H4a1 1 0 0 0-1 1v5M15 3h5a1 1 0 0 1 1 1v5M9 21H4a1 1 0 0 1-1-1v-5M15 21h5a1 1 0 0 0 1-1v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous photo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.image} alt={activeImage.caption} className="lightbox__img" />
            <div className="lightbox__caption">
              <span className="gallery-item__category">{activeImage.category}</span>
              <p>{activeImage.caption}</p>
              <span className="lightbox__count">{lightboxIndex + 1} / {filtered.length}</span>
            </div>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next photo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}

      <div className="container">
        <CTAPanel />
      </div>
    </>
  );
}