import scrollToHash from '../utils/scroll';
import './Button.css';

export default function Button({ children, to, href, onClick, variant = 'primary', size = 'md', type = 'button' }) {
  const className = `btn btn--${variant} btn--${size}`;

  // `to` now always points at an in-page section, e.g. "#contact"
  if (to) {
    return (
      <a
        href={to}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          scrollToHash(to);
        }}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
