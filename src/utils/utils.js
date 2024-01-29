export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", { timeZone: "UTC" });
}

export function formatBlogPosts(posts, { filterOutDrafts = true, filterOutFuturePosts = true, sortByDate = true, limit = undefined } = {}) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.data;
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc;

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to acc
    acc.push(post);

    return acc;
  }, []);

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}

export function getCopyrightYear() {
  return new Date().getFullYear().toString();
}

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

export const popupCenter = ({ url, title, w, h }) => {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
    scrollbars=yes,
    width=${w / systemZoom}, 
    height=${h / systemZoom}, 
    top=${top}, 
    left=${left}
    `
  );

  if (window.focus) newWindow.focus();
};
