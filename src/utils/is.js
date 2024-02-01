export const is = {
  ff: window.globalStorage,
  ie: document.all && !window.opera,
  ie6: !window.XMLHttpRequest,
  ie7: document.all && window.XMLHttpRequest && !XDomainRequest && !window.opera,
  ie8: document.documentMode == 8,
  opera: Boolean(window.opera),
  chrome: Boolean(window.chrome),
  safari: window.getComputedStyle && !window.globalStorage && !window.opera,
};
