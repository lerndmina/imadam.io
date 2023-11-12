const C=document.querySelectorAll("[data-navLink]");C.forEach(t=>{t.getAttribute("href")===window.location.pathname&&t.classList.add("nav-link-selected")});document.querySelector("#copyright").textContent=new Date().getFullYear().toString();const M=window.chrome,R=window.matchMedia("(hover: none)").matches;function v(){if(!M&&!R){const t="userHasSeenChromeCheck",e=sessionStorage.getItem(t),n=window.location.hostname==="localhost";if(e&&!n)return;sessionStorage.setItem(t,"true"),document.querySelector("#chrome-check").classList.remove("hidden")}}document.addEventListener("astro:page-load",()=>{v()},{once:!0});document.addEventListener("astro:after-swap",()=>{v()});const $=t=>history.state&&history.replaceState(t,""),E=!!document.startViewTransition,g=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),T=t=>location.pathname===t.pathname&&location.search===t.search,k=t=>document.dispatchEvent(new Event(t)),x=()=>k("astro:page-load"),F=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.setAttribute("style","position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px"),document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},h="data-astro-transition-persist";let S,p=0;history.state?(p=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):g()&&history.replaceState({index:p,scrollX,scrollY,intraPage:!1},"");const I=(t,e)=>{let n=!1,o=!1;return(...i)=>{if(n){o=!0;return}t(...i),n=!0,setTimeout(()=>{o&&(o=!1,t(...i)),n=!1},e)}};async function Y(t){try{const e=await fetch(t),n=e.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await e.text(),redirected:e.redirected?e.url:void 0,mediaType:n}}catch{return null}}function L(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function q(){for(const t of document.scripts)t.dataset.astroExec=""}function X(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=document.createElement("script");n.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const i=new Promise(u=>{n.onload=u});t=t.then(()=>i)}n.setAttribute(o.name,o.value)}n.dataset.astroExec="",e.replaceWith(n)}return t}function K(t){const e=t.effect;return!e||!(e instanceof KeyframeEffect)||!e.target?!1:window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount==="infinite"}const H=(t,e,n)=>{const o=!T(t);let i=!1;t.href!==location.href&&(e?history.replaceState({...history.state},"",t.href):(history.replaceState({...history.state,intraPage:n},""),history.pushState({index:++p,scrollX:0,scrollY:0},"",t.href)),o&&(scrollTo({left:0,top:0,behavior:"instant"}),i=!0)),t.hash?location.href=t.href:i||scrollTo({left:0,top:0,behavior:"instant"})};async function A(t,e,n,o,i){const u=r=>{const a=r.getAttribute(h),c=a&&t.head.querySelector(`[${h}="${a}"]`);if(c)return c;if(r.matches("link[rel=stylesheet]")){const f=r.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${f}"]`)}return null},d=()=>{const r=document.activeElement;if(r?.closest("[data-astro-transition-persist]")){if(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement){const a=r.selectionStart,c=r.selectionEnd;return{activeElement:r,start:a,end:c}}return{activeElement:r}}else return{activeElement:null}},m=({activeElement:r,start:a,end:c})=>{r&&(r.focus(),(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement)&&(r.selectionStart=a,r.selectionEnd=c))},y=()=>{const r=document.documentElement,a=[...r.attributes].filter(({name:s})=>(r.removeAttribute(s),s.startsWith("data-astro-")));[...t.documentElement.attributes,...a].forEach(({name:s,value:l})=>r.setAttribute(s,l));for(const s of document.scripts)for(const l of t.scripts)if(!s.src&&s.textContent===l.textContent||s.src&&s.type===l.type&&s.src===l.src){l.dataset.astroExec="";break}for(const s of Array.from(document.head.children)){const l=u(s);l?l.remove():s.remove()}document.head.append(...t.head.children);const c=document.body,f=d();document.body.replaceWith(t.body);for(const s of c.querySelectorAll(`[${h}]`)){const l=s.getAttribute(h),b=document.querySelector(`[${h}="${l}"]`);b&&b.replaceWith(s)}m(f),o?scrollTo(o.scrollX,o.scrollY):H(e,n.history==="replace",!1),k("astro:after-swap")},w=[];for(const r of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${h}="${r.getAttribute(h)}"], link[rel=stylesheet][href="${r.getAttribute("href")}"]`)){const a=document.createElement("link");a.setAttribute("rel","preload"),a.setAttribute("as","style"),a.setAttribute("href",r.getAttribute("href")),w.push(new Promise(c=>{["load","error"].forEach(f=>a.addEventListener(f,c)),document.head.append(a)}))}if(w.length&&await Promise.all(w),i==="animate"){const r=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const a=document.getAnimations().filter(s=>!r.includes(s)&&!K(s)),c=Promise.all(a.map(s=>s.finished)),f=()=>{y(),document.documentElement.dataset.astroTransitionFallback="new"};await c,f()}else y()}async function P(t,e,n,o){let i;const u=e.href,d=await Y(u);if(d===null){location.href=u;return}d.redirected&&(e=new URL(d.redirected)),S??=new DOMParser;const m=S.parseFromString(d.html,d.mediaType);if(m.querySelectorAll("noscript").forEach(y=>y.remove()),!m.querySelector('[name="astro-view-transitions-enabled"]')){location.href=u;return}o||history.replaceState({...history.state,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=t,E?i=document.startViewTransition(()=>A(m,e,n,o)).finished:i=A(m,e,n,o,L());try{await i}finally{await X(),q(),x(),F()}}function W(t,e){if(!g()){location.href=t;return}const n=new URL(t,location.href);location.origin===n.origin&&T(n)?H(n,e?.history==="replace",!0):P("forward",n,e??{})}function O(t){if(!g()&&t.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(t.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const e=history.state;if(e.intraPage)scrollTo(e.scrollX,e.scrollY);else{const n=e.index,o=n>p?"forward":"back";p=n,P(o,new URL(location.href),{},e)}}if(E||L()!=="none"){addEventListener("popstate",O),addEventListener("load",x);const t=()=>{$({...history.state,scrollX,scrollY})};"onscrollend"in window?addEventListener("scrollend",t):addEventListener("scroll",I(t,300)),q()}function U(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function V(t){if(document.querySelector(`link[rel=prefetch][href="${t}"]`))return;if(navigator.connection){let n=navigator.connection;if(n.saveData||/(2|3)g/.test(n.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",t),document.head.append(e)}(E||U()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;e instanceof Element&&e.tagName!=="A"&&(e=e.closest("a")),!(!e||!(e instanceof HTMLAnchorElement)||e.dataset.astroReload!==void 0||e.hasAttribute("download")||!e.href||e.target&&e.target!=="_self"||e.origin!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented)&&(t.preventDefault(),W(e.href,{history:e.dataset.astroHistory==="replace"?"replace":"auto"}))}),["mouseenter","touchstart","focus"].forEach(t=>{document.addEventListener(t,e=>{if(e.target instanceof HTMLAnchorElement){let n=e.target;n.origin===location.origin&&n.pathname!==location.pathname&&g()&&V(n.pathname)}},{passive:!0,capture:!0})}));
