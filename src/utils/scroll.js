// Height of the sticky navbar (kept in sync with --navbar-height in variables.css)
// used so anchored sections don't end up hidden underneath it.
const getNavbarOffset = () => {
  const root = getComputedStyle(document.documentElement);
  const value = root.getPropertyValue('--navbar-height').trim();
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? 84 : parsed;
};

/**
 * Smooth-scrolls the page to the element with the given hash id (e.g. "#about").
 * Falls back gracefully (no-op) if the target doesn't exist.
 */
export function scrollToHash(hash) {
  if (!hash || !hash.startsWith('#')) return;
  const id = hash.slice(1);
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.pageYOffset - getNavbarOffset() + 1;
  window.scrollTo({ top, behavior: 'smooth' });

  // Keep the URL shareable/bookmarkable without triggering a jump.
  if (window.history && window.history.pushState) {
    window.history.pushState(null, '', hash);
  }
}

export default scrollToHash;
