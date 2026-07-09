import PageHero from '../components/PageHero';
import ImagePlaceholder from '../components/ImagePlaceholder';
import CTAPanel from '../components/CTAPanel';
import { connectivity } from '../data/siteData';
import './Location.css';

export default function Location() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Well Connected."
        accent="Perfectly Located."
        description="Elegance Heights sits off Link Road in Malad East — close enough to the highway, the station, and the mall, far enough from the noise."
        imageLabel="Location Map — Malad East"
      />

      <section className="section location-map-section">
        <div className="container">
          <ImagePlaceholder label="Interactive Map — Elegance Heights" ratio="21/9" />
        </div>
      </section>

      <section className="section location-connectivity">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Connectivity</span>
            <h2>Everything Within Reach</h2>
          </div>
          <div className="location-connectivity__grid">
            {connectivity.map((c) => (
              <div className="location-connectivity__item" key={c.place}>
                <span className="location-connectivity__dot" aria-hidden="true" />
                <div>
                  <strong>{c.place}</strong>
                  <span>{c.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <CTAPanel
          title="Best Directions? Ask Our Team."
          description="Share your starting point and we'll help you plan the quickest route to our sales lounge."
        />
      </div>
    </>
  );
}
