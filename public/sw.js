if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let t=Promise.resolve();return s[e]||(t=new Promise(async t=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=t}else importScripts(e),t()})),t.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},t=(t,s)=>{Promise.all(t.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(t)};self.define=(t,r,i)=>{s[t]||(s[t]=Promise.resolve().then(()=>{let s={};const a={uri:location.origin+t.slice(1)};return Promise.all(r.map(t=>{switch(t){case"exports":return s;case"module":return a;default:return e(t)}})).then(e=>{const t=i(...e);return s.default||(s.default=t),s})}))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WrJSzy-BtqtGWONmv0_HL/_buildManifest.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/WrJSzy-BtqtGWONmv0_HL/_ssgManifest.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/638ab949006b80895543f8d0739c3717b3356391.4be72300872c89088f16.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/ac95f5cad6cb0a9e42283534a3e553642c78d5f8.282811b9c2c0f86c310f.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/commons.6746dd603edca6197229.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/framework.346745947b137d923aa8.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/main-0879be2ab9d0e8c4ed1b.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/_app-e5f602f78a3a54c222e2.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/_error-843725984d13a6596141.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/characters-09afc7258e83383e2a70.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/characters/%5Bid%5D-e01fc5a8e250d9b4a26a.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/comics-3028adbf87c46ce51503.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/comics/%5Bid%5D-6899dd1381b3b197dfc9.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/index-ad069fccf0aa2ac8ac0c.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/stories-03bad65d6c95a3b07f89.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/pages/stories/%5Bid%5D-1ed7c64d69eb2c92de29.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/polyfills-e5012cf49fbb0a2642db.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/_next/static/css/60f304a3930bbc454873.css",revision:"WrJSzy-BtqtGWONmv0_HL"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/Metropolis-Black.ttf",revision:"764dbfe7212f7933f6be1a4f687ed1ad"},{url:"/fonts/Metropolis-BlackItalic.ttf",revision:"e27ce37493d98797c82262ecb636aa3b"},{url:"/fonts/Metropolis-Bold.ttf",revision:"e46d1ff3bbd7865b7bdfbd2bc74fafdf"},{url:"/fonts/Metropolis-BoldItalic.ttf",revision:"ef0992ecf851aedff825e09e867ea791"},{url:"/fonts/Metropolis-ExtraBold.ttf",revision:"aba0929595c2e6843b555517f9d409b5"},{url:"/fonts/Metropolis-ExtraBoldItalic.ttf",revision:"dd38cdf4aaab5fcc6ffebceb81daa16a"},{url:"/fonts/Metropolis-ExtraLight.ttf",revision:"c6105950fe43b9f3f2f87fb2631dd422"},{url:"/fonts/Metropolis-ExtraLightItalic.ttf",revision:"46a8072ca9f8c940f0dcba08e170b6cb"},{url:"/fonts/Metropolis-Light.ttf",revision:"619d27806834a9d53a79e74c34c3ea55"},{url:"/fonts/Metropolis-LightItalic.ttf",revision:"fc832ced70c98709397f1d2a18360d61"},{url:"/fonts/Metropolis-Medium.ttf",revision:"1f05958f614d4e1a9c554365a79d5fe5"},{url:"/fonts/Metropolis-MediumItalic.ttf",revision:"38592556c01ff5b36875939cc86f33db"},{url:"/fonts/Metropolis-Regular.ttf",revision:"8e113ffbceb397a8af63536cc74969c6"},{url:"/fonts/Metropolis-RegularItalic.ttf",revision:"650b69114602ff058e997c55e39b4e9a"},{url:"/fonts/Metropolis-SemiBold.ttf",revision:"f0f17e57a6bff586bd9168e48c693354"},{url:"/fonts/Metropolis-SemiBoldItalic.ttf",revision:"f9cabfef3cae059867f0512806ba3abd"},{url:"/fonts/Metropolis-Thin.ttf",revision:"cc3f4bab1db6330dc05a48b610d828bb"},{url:"/fonts/Metropolis-ThinItalic.ttf",revision:"f438ce4183bfa352b8869afa6efdac91"},{url:"/images/background.png",revision:"14c9fe9ca4afdb8797852dd075b6bdbf"},{url:"/images/characters.png",revision:"707b67e82d7df4a73a14d3524f65efda"},{url:"/images/comics.png",revision:"d148bb56195bdadc2ea6a9911f2ddc18"},{url:"/images/stories.png",revision:"fac89637383a1ce65e712b9323f8557e"},{url:"/logo-black.png",revision:"5ce6d810b83d298b18d7fcb1700fd47b"},{url:"/logo.png",revision:"2f599a7d406202a8aa25ebf9c8bcbcb3"},{url:"/manifest.json",revision:"eff393b0fd9ef3eb43c55b263d70b362"},{url:"/marvel_left.png",revision:"4570dc7702afe5667481aa543e91837a"},{url:"/marvel_right.png",revision:"507269f4cd76317cc0d2767d9670f00a"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
