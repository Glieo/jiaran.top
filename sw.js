if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>s(e,c),t={module:{uri:c},exports:o,require:d};i[c]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e4da89b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a7373ab4c2ffe52e822b4234e3934693"},{url:"assets/index.45d419e2.js",revision:null},{url:"assets/index.cfcecccd.css",revision:null},{url:"assets/vendor.2ca771fd.js",revision:null},{url:"index.html",revision:"83057edf18748838c450d3c6e7dc16a9"},{url:"favicon.svg",revision:"feabca1e08c7bcb5db7a932cb2db834c"},{url:"favicon.ico",revision:"3ab586fe5d3a3407c3f29c26d033a64a"},{url:"robots.txt",revision:"cd9cd94aaa699e0a16e692b6bb16f672"},{url:"apple-touch-icon.png",revision:"71762f43e5c1950d7beed05876823075"},{url:"pwa-192x192.png",revision:"455ed70856e92b99a509b153efa7dc67"},{url:"pwa-512x512.png",revision:"f5f2afb01fece395a257a98299e79d1e"},{url:"manifest.webmanifest",revision:"9d761994d496220df15139dbe80fec39"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
