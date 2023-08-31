const v=document.querySelectorAll("[data-navLink]");v.forEach(n=>{n.getAttribute("href")===window.location.pathname&&n.classList.add("nav-link-selected")});document.querySelector("#copyright").textContent=new Date().getFullYear().toString();const T=window.chrome,x=window.matchMedia("(hover: none)").matches;!T&&!x&&document.querySelector("#chrome-check").classList.remove("invisible");const h=n=>history.replaceState(n,""),g=!!document.startViewTransition,m=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),b=n=>document.dispatchEvent(new Event(n)),S=()=>b("astro:page-load"),u="data-astro-transition-persist";let d=history.state?.index||0;!history.state&&m()&&h({index:d,scrollY:0});const L=(n,e)=>{let t=!1,o=!1;return(...i)=>{if(t){o=!0;return}n(...i),t=!0,setTimeout(()=>{o&&(o=!1,n(...i)),t=!1},e)}};async function q(n){const e=await fetch(n),t=await e.text();return{ok:e.ok,html:t}}function k(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function A(){for(const n of document.scripts)n.dataset.astroExec=""}function P(){let n=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const t=document.createElement("script");t.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const i=new Promise(f=>{t.onload=f});n=n.then(()=>i)}t.setAttribute(o.name,o.value)}t.dataset.astroExec="",e.replaceWith(t)}return n}const Y=new DOMParser;async function w(n,e,t){const o=Y.parseFromString(n,"text/html"),i=a=>{const c=a.getAttribute(u),l=c&&o.head.querySelector(`[${u}="${c}"]`);if(l)return l;if(a.matches("link[rel=stylesheet]")){const r=a.getAttribute("href");return o.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}if(a.tagName==="SCRIPT"){let r=a;for(const s of o.scripts)if(r.textContent&&r.textContent===s.textContent||r.type===s.type&&r.src===s.src)return s}return null},f=()=>{o.querySelectorAll("head noscript").forEach(r=>r.remove());const a=document.documentElement,c=[...a.attributes].filter(({name:r})=>(a.removeAttribute(r),r.startsWith("data-astro-")));[...o.documentElement.attributes,...c].forEach(({name:r,value:s})=>a.setAttribute(r,s));for(const r of Array.from(document.head.children)){const s=i(r);s?s.remove():r.remove()}document.head.append(...o.head.children);const l=document.body;document.body.replaceWith(o.body);for(const r of l.querySelectorAll(`[${u}]`)){const s=r.getAttribute(u),y=document.querySelector(`[${u}="${s}"]`);y&&y.replaceWith(r)}if(scrollTo({left:0,top:0,behavior:"instant"}),e?.scrollY===0&&location.hash){const r=decodeURIComponent(location.hash.slice(1)),s=document.getElementById(r);s&&(e.scrollY=s.offsetTop,h(e),s.scrollIntoView())}else e&&e.scrollY!==0&&scrollTo(0,e.scrollY);b("astro:after-swap")},p=[];for(const a of o.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${u}="${a.getAttribute(u)}"], link[rel=stylesheet]`)){const c=document.createElement("link");c.setAttribute("rel","preload"),c.setAttribute("as","style"),c.setAttribute("href",a.getAttribute("href")),p.push(new Promise(l=>{["load","error"].forEach(r=>c.addEventListener(r,l)),document.head.append(c)}))}if(p.length&&await Promise.all(p),t==="animate"){document.documentElement.dataset.astroTransitionFallback="old";const a=Promise.all(document.getAnimations().map(l=>l.finished)),c=()=>{f(),document.documentElement.dataset.astroTransitionFallback="new"};await a,c()}else f()}async function E(n,e,t){let o;const{html:i,ok:f}=await q(e);if(!f){location.href=e;return}document.documentElement.dataset.astroTransition=n,g?o=document.startViewTransition(()=>w(i,t)).finished:o=w(i,t,k());try{await o}finally{await P(),A(),S()}}function C(n){if(document.querySelector(`link[rel=prefetch][href="${n}"]`))return;if(navigator.connection){let t=navigator.connection;if(t.saveData||/(2|3)g/.test(t.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",n),document.head.append(e)}if(g||k()!=="none"){A(),document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&t.tagName!=="A"&&(t=t.closest("a")),!t||!(t instanceof HTMLAnchorElement)||t.dataset.astroReload!==void 0||!t.href||t.target&&t.target!=="_self"||t.origin!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||!m())return;if(location.pathname===t.pathname&&location.search===t.search){if(t.hash)return;if(e.preventDefault(),h({...history.state,scrollY}),scrollTo({left:0,top:0,behavior:"instant"}),location.hash){const i={index:++d,scrollY:0};history.pushState(i,"",t.href)}return}e.preventDefault(),E("forward",t.href,{index:++d,scrollY:0});const o={index:d,scrollY};h({index:d-1,scrollY}),history.pushState(o,"",t.href)}),addEventListener("popstate",e=>{if(!m()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t?.index??d+1,i=o>d?"forward":"back";E(i,location.href,t),d=o}),["mouseenter","touchstart","focus"].forEach(e=>{document.addEventListener(e,t=>{if(t.target instanceof HTMLAnchorElement){let o=t.target;o.origin===location.origin&&o.pathname!==location.pathname&&m()&&C(o.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",S);const n=()=>{history.state&&h({...history.state,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",L(n,300))}