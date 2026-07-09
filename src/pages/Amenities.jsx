import { useEffect, useMemo, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CTAPanel from '../components/CTAPanel';
import { amenities } from '../data/siteData';
import './Amenities.css';

const categories = ['All', ...Array.from(new Set(amenities.map((a) => a.category)))];

export default function Amenities() {
  const [active, setActive] = useState('All');
  const gridRef = useRef(null);

  const visible = useMemo(
    () => (active === 'All' ? amenities : amenities.filter((a) => a.category === active)),
    [active]
  );

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const cards = node.querySelectorAll('.amenities-card');

    // Fallback: guarantee visibility even if IntersectionObserver never fires
    const fallback = setTimeout(() => {
      cards.forEach((card) => card.classList.add('is-visible'));
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
    cards.forEach((card) => observer.observe(card));

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, [visible]);

  return (
    <>
      <PageHero
        eyebrow="World-Class Amenities"
        title="Designed for an"
        accent="Elevated Lifestyle"
        description="Elegance Heights offers a thoughtfully curated range of lifestyle amenities that bring comfort, wellness, recreation, and community together — all elevated above the ordinary."
        bgImage="/images/SkylineView.png"
      />

      <section className="section amenities-grid-section">
        <div className="container">
          <div className="amenities-filters" role="tablist" aria-label="Filter amenities by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                className={`amenities-chip ${active === cat ? 'amenities-chip--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="amenities-grid" ref={gridRef} key={active}>
            {visible.map((a, i) => (
              <div
                className={`amenities-card ${a.feature ? 'amenities-card--feature' : ''}`}
                key={a.title}
                style={{ '--i': i }}
              >
                <ImagePlaceholder src={a.image} alt={a.title} ratio={a.feature ? '16/10' : '4/3'} />
                {a.level && <span className="amenities-card__level">{a.level}</span>}
                <div className="amenities-card__overlay">
                  <span className="amenities-card__category">{a.category}</span>
                  <h3>{a.title}</h3>
                  {a.note && <p>{a.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTAPanel
          title="See the Amenity Deck for Yourself"
          description="Photos only tell half the story. Walk the podium and rooftop levels on a guided site visit."
        />
      </div>
    </>
  );
}