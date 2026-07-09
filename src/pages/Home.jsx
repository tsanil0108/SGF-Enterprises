import { useEffect } from 'react';
import Button from '../components/Button';
import ImagePlaceholder from '../components/ImagePlaceholder';
import StatStrip from '../components/StatStrip';
import Icon from '../components/Icon';
import { heroStats } from '../data/siteData';
import './Home.css';

// Lifestyle strip — add/remove images here anytime, the marquee adapts automatically
const lifestyleImages = [
  { label: 'Facade', src: '/images/Facade.png' },
  { label: 'Lobby', src: '/images/Lobby.png' },
  { label: 'Pool Deck', src: '/images/InfinityPool.png' },
  { label: 'Living Room', src: '/images/LivingRoom.png' },
  { label: 'Garden', src: '/images/Garden.png' },
];

// The single-page hero: full-bleed intro + trust stats + a lifestyle teaser
// marquee. Detailed content (About, Project, Amenities, Floor Plans, Gallery,
// Location, Contact) each live in their own full section further down this
// same page — no route changes, just smooth-scrolling anchors.
export default function Home() {
  // Scroll-reveal: fade/slide in any element with class "reveal" once it enters the viewport
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img src="/images/building.png" alt="Elegance Heights Tower" />
        </div>

        <div className="home-hero__overlay" />

        <div className="container home-hero__inner">
          <div className="home-hero__text">
            <span className="eyebrow hero-anim hero-anim--1">SGF Enterprises Presents</span>

            <h1 className="hero-anim hero-anim--2">
              Your Spacious New Abode <br />
              in the <span className="text-accent">Suburbs</span>
            </h1>

            <p className="hero-anim hero-anim--3">
              Elegance Heights brings affordable 1 &amp; 2 BHK homes to Malad East,
              designed for families who want more room to breathe without leaving
              the city behind.
            </p>

            <div className="home-hero__actions hero-anim hero-anim--4">
              <Button to="#floor-plans" variant="primary" size="lg">
                View Floor Plans
              </Button>
              <Button to="#contact" variant="outline" size="lg">
                Book a Site Visit
              </Button>
            </div>
          </div>

          <div className="home-hero__floating-card hero-anim hero-anim--card">
            <strong>Project Highlights</strong>
            <span>
              <Icon name="home" size={16} />
              1 &amp; 2 BHK Residences
            </span>
            <span>
              <Icon name="lift" size={16} />
              G+32 Storeys
            </span>
            <span>
              <Icon name="floorplan" size={16} />
              288 Homes
            </span>
            <span>
              <Icon name="pin" size={16} />
              Malad East, Mumbai
            </span>
          </div>
        </div>
      </section>

      <div className="container home-stats">
        <StatStrip stats={heroStats} />
      </div>

      {/* Lifestyle Strip — continuous auto-scrolling marquee */}
      <section className="section home-strip">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Designed for an Elevated Lifestyle</span>
            <h2>A Home That Grows With Every Season of Life</h2>
          </div>
        </div>

        <div className="home-strip__marquee">
          <div className="home-strip__track">
            {[...lifestyleImages, ...lifestyleImages].map((item, i) => (
              <div className="home-strip__cell" key={`${item.label}-${i}`}>
                <ImagePlaceholder label={item.label} src={item.src} ratio="3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
