// @ts-ckeck
// see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
/**
 * @jest-environment jsdom
 */
/**
 *
 * @param {Function} callback
 * @param {Object} options
 * @returns IntersectionObserver
 */
function createObserver (callback, options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01
}) {
  // eslint-disable-next-line no-undef
  return new IntersectionObserver(callback, options)
}

export default createObserver
