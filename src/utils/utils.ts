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
  // @ts-ignore
  if (window.focus) newWindow.focus();
};
export function urlParser(url) {
  if (typeof url !== "string") return null;

  try {
    new URL(url);
    return url;
  } catch (e) {
    try {
      return new URL("https://" + url).toString();
    } catch (e) {
      return null;
    }
  }
}

export async function checkUser(id: string, token: string, endpoint: string = "https://discord.com/api/v10") {
  const USER_ENDPOINT = `${endpoint}/users/@me`;

  const userFetch = await fetch(USER_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (userFetch.status !== 200) {
    console.log("Error fetching user info from discord: " + userFetch.status + " " + userFetch.statusText);
    return false;
  }
  const userJson = await userFetch.json();

  return userJson;
}

export async function isLoggedIn() {
  var userData = JSON.parse(localStorage.getItem("user") || "null");
  console.log("User:", userData ? `"${userData.global_name}" is Authenticated with their saved token` : "Not logged in");
  if (userData) {
    const user = await checkUser(userData.id, userData.token);
    if (!user) {
      localStorage.removeItem("user");
      return false;
    }
    return user;
  } else {
    return false;
  }
}
