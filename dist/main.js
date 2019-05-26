/*! For license information please see main.js.LICENSE */
!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){n.exports=r(1)},function(n,e,r){"use strict";r.r(e);r(2),r(7);let t="",o=0,i=0;const a=n=>{document.querySelector(n).style.display="none"},c=n=>{document.querySelector(n).style.display="unset"};function s(n,e){return n.querySelector(".news__picture").style.backgroundImage=`url(${e.urlToImage?e.urlToImage:"img/novost.png"})`,n.querySelector(".news__title").textContent=e.title,n.querySelector(".news__source").textContent=e.source.name,n.querySelector(".news__text").textContent=e.description,n.querySelector(".news__link").setAttribute("href",e.url),n}function u(n,e){const r=document.createDocumentFragment(),t=document.querySelector("#news-item");for(let o=0;o<n;o++){const n=s(t.content?t.content.cloneNode(!0).querySelector(".news__item"):t.querySelector(".news__item").cloneNode(!0),e[o]);r.appendChild(n)}return r}function l(n){a("#error-block");const e="https://newsapi.org/v2/"+n+"apiKey=eeafe868640a463f8550c1c0c88e29f0",r=new Request(e);fetch(r).then(function(n){return n.json()}).then(function(n){const r=document.querySelector("#news");r.innerHTML="";const s=n.articles.length;if(0==s)return c("#error-block"),void a("#load-btn");const l=u(s,n.articles);r.appendChild(l),s<5?a("#load-btn"):c("#load-btn"),t=e,o=2,i=s})}!function(){const n=new Request("https://newsapi.org/v2/sources?apiKey=eeafe868640a463f8550c1c0c88e29f0");fetch(n).then(function(n){return n.json()}).then(function(n){for(let e=0;e<n.sources.length;e++)document.querySelector("#sources").innerHTML+='<button class="btn_sources" id="'+n.sources[e].id+'">'+n.sources[e].name+"</button>"})}(),l("top-headlines?country=ru&pageSize=5&page=1&"),document.querySelector("#load-btn").addEventListener("click",()=>{!function(){t=t.replace(new RegExp("page=.*&"),"page="+o+"&");const n=new Request(t);fetch(n).then(function(n){return n.json()}).then(function(n){const e=n.articles.length;if(0==e)return void a("#load-btn");const r=u(e,n.articles),t=document.querySelector("#news");t.appendChild(r),i+=e,o++,(e<5||40==i)&&a("#load-btn")})}()}),document.querySelector("#filter-btn").addEventListener("click",()=>{const n=document.querySelector("#search-field").value;n.length>0&&l(`everything?q=${n}&pageSize=5&page=1&`)}),document.querySelector("#search-field").addEventListener("keyup",function(n){13===n.keyCode&&document.querySelector("#filter-btn").click()}),document.querySelector("#sources").addEventListener("click",n=>{l(`everything?sources=${n.target.id}&pageSize=5&page=1&`)})},function(n,e,r){var t=r(3);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(5)(t,o);t.locals&&(n.exports=t.locals)},function(n,e,r){(n.exports=r(4)(!1)).push([n.i,"body{\r\n    color: white;\r\n    background-color: white;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .app__header{\r\n    text-align: center;\r\n    padding: 10px;\r\n  }\r\n  \r\n  .app__header-text{\r\n    font-size: 50px;\r\n    font-weight: normal;\r\n    text-shadow: 1px 1px 0 black,\r\n                 1px -1px 0 black,\r\n                 -1px 1px 0 black,\r\n                 -1px -1px 0 black;\r\n  }\r\n  .app__main{\r\n    text-align: center;\r\n  }\r\n  \r\n  .app__main-error{\r\n    font-size: 18px;\r\n    font: 5em 'Century';\r\n    color: #ff3131;\r\n    text-align: center;\r\n  }\r\n  \r\n  .app__main-sources{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    height: 140px;\r\n    overflow: auto;\r\n    align-items: center;\r\n  }\r\n  \r\n  .app__main-sources::-webkit-scrollbar-track\r\n  {\r\n      box-shadow: inset 0 0 6px rgba(226, 223, 223, 0.3);\r\n    background-color: rgb(247, 244, 244);\r\n    \r\n  }\r\n  \r\n\r\n   .app__btn { \r\n    color: black;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    padding: 1em 1em;\r\n    background-repeat: no-repeat;\r\n    background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;\r\n    background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n    box-shadow: rgba(0,0,0,.5) 1px 5px 5px -5px;\r\n    margin: 10em, 10em;\r\n  }\r\n  .app__btn:hover {\r\n    transition: .5s linear;\r\n    background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);\r\n  }\r\n\r\n  .btn__filter{\r\n    padding: 15px 25px;\r\n    margin-left: 20px;\r\n    background-color: white;\r\n    color: black;\r\n  }\r\n  \r\n  .app__main-search{ \r\n    margin: 50px;\r\n  }\r\n  \r\n  .app__footer{\r\n    text-align: center;\r\n    font-family: 'Century', Courier, monospace;\r\n    font-weight: bold;\r\n    margin-top: 90px;\r\n  }\r\n  \r\n  .app__footer-text{\r\n    font-size: 14px;\r\n    color:black;\r\n  }\r\n  \r\n  .app__footer-link{\r\n    text-decoration: none;\r\n    color: white;\r\n  }\r\n  \r\n  .app__main-news{\r\n    max-width: 900px;\r\n    margin: 10px auto;\r\n  }\r\n  \r\n  .news__item{\r\n    display: block;\r\n    border: 4px solid white;\r\n    margin: 50px;\r\n    color: #000000;\r\n  }\r\n  \r\n  .news__picture{\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n  \r\n  .news__img{\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .news__content{\r\n    text-align: left;\r\n  }\r\n  \r\n  .news__title{\r\n    margin: 20px;\r\n    padding: 0;\r\n    color: black;\r\n    font-size: 35px;\r\n  }\r\n  \r\n  .news__source{\r\n    color: #555555;\r\n    margin: 20px;\r\n    padding: 0;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .news__text{\r\n    margin: 20px;\r\n    padding: 0;\r\n    color: #2c2b2b;\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .news__link{\r\n    text-decoration: none;\r\n    color: black;\r\n    margin: 10px;\r\n  }\r\n\r\n  \r\n",""])},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&t[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(n,e,r){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),c=function(n){var e={};return function(n,r){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),s=null,u=0,l=[],p=r(6);function f(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(x(t.parts[a],e))}else{var c=[];for(a=0;a<t.parts.length;a++)c.push(x(t.parts[a],e));i[t.id]={id:t.id,refs:1,parts:c}}}}function d(n,e){for(var r=[],t={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(c):r.push(t[a]={id:a,parts:[c]})}return r}function h(n,e){var r=c(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=l[l.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===n.insertAt)r.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,r);r.insertBefore(e,o)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return r.nc}();t&&(n.attrs.nonce=t)}return m(e,n.attrs),h(n,e),e}function m(n,e){Object.keys(e).forEach(function(r){n.setAttribute(r,e[r])})}function x(n,e){var r,t,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=u++;r=s||(s=g(e)),t=w.bind(null,r,a,!1),o=w.bind(null,r,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),h(n,e),e}(e),t=function(n,e,r){var t=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(t=p(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,r,e),o=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(e),t=function(n,e){var r=e.css,t=e.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){b(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=d(n,e);return f(r,e),function(n){for(var t=[],o=0;o<r.length;o++){var a=r[o];(c=i[a.id]).refs--,t.push(c)}n&&f(d(n,e),e);for(o=0;o<t.length;o++){var c;if(0===(c=t[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var y,v=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,t=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,r){n.exports=r.p+"img/novost.png"}]);