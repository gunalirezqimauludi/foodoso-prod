var serviceWorkerOption = {
  "assets": [
    "/assets/data/food-data.json",
    "/assets/data/menu-data.json",
    "/assets/fonts/lato-v16-latin-300.eot",
    "/assets/fonts/lato-v16-latin-300.svg",
    "/assets/fonts/lato-v16-latin-300.ttf",
    "/assets/fonts/lato-v16-latin-300.woff",
    "/assets/fonts/lato-v16-latin-300.woff2",
    "/assets/fonts/lato-v16-latin-700.eot",
    "/assets/fonts/lato-v16-latin-700.svg",
    "/assets/fonts/lato-v16-latin-700.ttf",
    "/assets/fonts/lato-v16-latin-700.woff",
    "/assets/fonts/lato-v16-latin-700.woff2",
    "/assets/fonts/lato-v16-latin-regular.eot",
    "/assets/fonts/lato-v16-latin-regular.svg",
    "/assets/fonts/lato-v16-latin-regular.ttf",
    "/assets/fonts/lato-v16-latin-regular.woff",
    "/assets/fonts/lato-v16-latin-regular.woff2",
    "/assets/images/app-icon.png",
    "/assets/images/app-logo.png",
    "/assets/images/avatar-image.png",
    "/assets/images/empty-favorite.png",
    "/assets/images/loading.gif",
    "/assets/icons/icon-flat/contrass-alt2.svg",
    "/assets/icons/icon-flat/favourite.svg",
    "/assets/icons/icon-flat/home-alt2.svg",
    "/assets/icons/icon-flat/more-circle-vertical.svg",
    "/assets/icons/icon-flat/settings.svg",
    "/assets/icons/icon-flat/warning.svg",
    "/assets/icons/icon-line/cross.svg",
    "/assets/icons/icon-line/menu.svg",
    "/assets/icons/icon-line/search.svg",
    "/main~25018730.bundle.js",
    "/main~29d6ecf2.bundle.js",
    "/main~3d9b8e9e.bundle.js",
    "/main~61a230ae.bundle.js",
    "/vendors~main~678f84af.bundle.js",
    "/vendors~main~d939e436.bundle.js",
    "/vendors~main~ec8c427e.bundle.js",
    "/manifest.json",
    "/assets/images/icons/icon_512x512.png",
    "/assets/images/icons/icon_384x384.png",
    "/assets/images/icons/icon_256x256.png",
    "/assets/images/icons/icon_192x192.png",
    "/assets/images/icons/icon_128x128.png",
    "/assets/images/icons/icon_96x96.png",
    "/app-icon.png",
    "/index.html"
  ]
};
        
        !function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,r){"use strict";var n="Foodoso-V1";function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return r(t),0}c.done?e(u):Promise.resolve(u).then(n,o)}function o(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}}var i={cachingAppShell:function(e){var r=this;return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._openCache();case 2:t.sent.addAll(e);case 4:case"end":return t.stop()}},t)}))()},deleteOldCache:function(){return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter(function(t){return t!==n}).map(function(t){return caches.delete(t)});case 4:case"end":return t.stop()}},t)}))()},revalidateCache:function(r){var n=this;return o(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.match(r);case 2:if(e=t.sent)return t.abrupt("return",e);t.next=5;break;case 5:return t.abrupt("return",n._fetchRequest(r));case 6:case"end":return t.stop()}},t)}))()},_openCache:function(){return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(n));case 1:case"end":return t.stop()}},t)}))()},_fetchRequest:function(r){var n=this;return o(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(r);case 2:if((e=t.sent)&&200===e.status){t.next=5;break}return t.abrupt("return",e);case 5:return t.next=7,n._addCache(r);case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}},t)}))()},_addCache:function(e){var r=this;return o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._openCache();case 2:t.sent.add(e);case 4:case"end":return t.stop()}},t)}))()}};e.a=i},function(t,e,o){"use strict";o.r(e),function(t){o(3);var e=o(0);function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n=t.serviceWorkerOption.assets;self.addEventListener("install",function(t){t.waitUntil(e.a.cachingAppShell([].concat(function(t){if(Array.isArray(t))return r(t)}(t=n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t){if(t){if("string"==typeof t)return r(t,void 0);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,void 0):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["./","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","https://code.jquery.com/jquery-3.5.1.min.js"])))}),self.addEventListener("activate",function(t){t.waitUntil(e.a.deleteOldCache())}),self.addEventListener("fetch",function(t){t.respondWith(e.a.revalidateCache(t.request))})}.call(this,o(2))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){(function(t){function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(a){"use strict";var t=Object.prototype,u=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(a){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof l?e:l,e=Object.create(e.prototype),n=new b(n||[]);return e._invoke=(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return j()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){var n=function t(e,r){var n=e.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}n=f(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var n=n.arg;return n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}(r,a);if(n){if(n===s)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";n=f(o,i,a);if("normal"===n.type){if(c=a.done?"completed":"suspendedYield",n.arg===s)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(c="completed",a.method="throw",a.arg=n.arg)}}),e}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var s={};function l(){}function h(){}function p(){}var d={};d[n]=function(){return this};e=Object.getPrototypeOf,e=e&&e(e(x([])));e&&e!==t&&u.call(e,n)&&(d=e);var y=p.prototype=l.prototype=Object.create(d);function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){t=f(a[t],a,r);if("throw"!==t.type){var i=t.arg,r=i.value;return r&&"object"===L(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)})}o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return t.next=t}}return{next:j}}function j(){return{value:void 0,done:!0}}return((h.prototype=y.constructor=p).constructor=h).displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(y),t},a.awrap=function(t){return{__await:t}},v(m.prototype),m.prototype[r]=function(){return this},a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(y),i(y,o,"Generator"),y[n]=function(){return this},y.toString=function(){return"[object Generator]"},a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n,o=r.completion;return"throw"===o.type&&(n=o.arg,w(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},a}("object"===L(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,r(4)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);