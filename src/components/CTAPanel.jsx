import Button from './Button';
import './CTAPanel.css';

export default function CTAPanel({
  title = 'Experience Elegance Heights In Person',
  description = 'Walk through the show flat, meet our sales team, and see why this is Malad East\u2019s most anticipated address.',
  primaryLabel = 'Schedule a Visit',
  primaryTo = '/contact',
  secondaryLabel = 'Call +91 98200 12345',
  secondaryHref = 'tel:+919820012345',
}) {
  return (
    <div className="cta-panel">
      <div className="cta-panel__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cta-panel__actions">
        <Button to={primaryTo} variant="primary">{primaryLabel}</Button>
        <Button href={secondaryHref} variant="outline-light">{secondaryLabel}</Button>
      </div>
    </div>
  );
}
