import { useState } from 'react';
import PageHero from '../components/PageHero';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Button from '../components/Button';
import CTAPanel from '../components/CTAPanel';
import { floorPlans } from '../data/siteData';
import './FloorPlans.css';

export default function FloorPlans() {
  const [active, setActive] = useState(floorPlans[0].id);
  const current = floorPlans.find((f) => f.id === active);

  return (
    <>
      <PageHero
        eyebrow="Floor Plans"
        title="Thoughtfully Designed"
        accent="Homes for Modern Living"
        description="Choose between 1 BHK and 2 BHK layouts, each planned for cross-ventilation, natural light, and a sense of space rarely found at this price point."
        bgImage="/images/FloorPlanOverview.png"
      />

      <section className="section floorplans-section">
        <div className="container">
          <div className="floorplans-tabs" role="tablist" aria-label="Select floor plan type">
            {floorPlans.map((fp) => (
              <button
                key={fp.id}
                type="button"
                role="tab"
                aria-selected={active === fp.id}
                className={`floorplans-tab ${active === fp.id ? 'is-active' : ''}`}
                onClick={() => setActive(fp.id)}
              >
                {fp.type}
              </button>
            ))}
          </div>

          <div className="floorplans-detail" key={current.id}>
            <div className="floorplans-detail__image">
              <ImagePlaceholder
                label={`${current.type} — Layout`}
                src={current.image}
                alt={`${current.type} floor plan layout`}
                ratio="4/3"
              />
            </div>
            <div className="floorplans-detail__specs">
              <h2>{current.type}</h2>
              <p className="floorplans-detail__config">{current.configuration}</p>
              <div className="floorplans-detail__row">
                <span>Carpet Area</span>
                <strong>{current.carpetArea}</strong>
              </div>
              <div className="floorplans-detail__row">
                <span>Price</span>
                <strong>{current.price}</strong>
              </div>
              <div className="floorplans-detail__row">
                <span>Possession</span>
                <strong>Dec 2028</strong>
              </div>
              <Button to="#contact" variant="primary">Request Full Layout &amp; Pricing</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section floorplans-master">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Master Plan</span>
            <h2>Tower Layout &amp; Unit Distribution</h2>
          </div>
          <ImagePlaceholder label="Master Floor Plate — All Units" src="/images/FloorPlanOverview.png" ratio="21/9" />
        </div>
      </section>

      <div className="container">
        <CTAPanel
          title="Get the Complete Floor Plan Brochure"
          description="Download detailed layouts, carpet area breakdowns, and pricing for every configuration."
          primaryLabel="Request Brochure"
        />
      </div>
    </>
  );
}