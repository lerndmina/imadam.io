import { is } from "./utils";

function isChrome() {
  const isChromium = is.chrome;
  const hasTouchScreen = window.matchMedia("(hover: none)").matches;

  console.log("Hello from isChrome");

  if (!isChromium && !hasTouchScreen) {
    // not chrome
    // Edit chrome-check element
    const userHasSeenKey = "userHasSeenChromeCheck";
    const userHasSeen = sessionStorage.getItem(userHasSeenKey);
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    if (userHasSeen && !isLocalhost) {
      return false;
    }
    sessionStorage.setItem(userHasSeenKey, "true");

    const chromeCheck = document.querySelector("#chrome-check");
    chromeCheck ? chromeCheck.classList.remove("hidden") : null;

    return false;
  }
  return true;
}

document.addEventListener(
  "astro:page-load",
  () => {
    isChrome();
  },
  { once: true }
);

document.addEventListener("astro:after-swap", () => {
  isChrome();
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  isChrome();
});
