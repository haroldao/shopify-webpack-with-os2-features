!function(){"use strict";!function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,t)})(t)}function r(t,e,n){return(r=c()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&i(r,n.prototype),r}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(s,t);var o,r,f,a,l=(o=s,r=c(),function(){var t,e=u(o);if(r){var c=u(this).constructor;t=Reflect.construct(e,arguments,c)}else t=e.apply(this,arguments);return n(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this)).isActive=!1,Array.from(t.children).forEach((function(e){e.addEventListener("click",(function(){t.changeState(),t.isActive=!1})),e.addEventListener("focus",(function(){t.changeState(),t.isActive=!0}))})),t.addEventListener("keydown",(function(e){"TAB"===e.code.toUpperCase()&&Array.from(t.children).forEach((function(e){var n,o;n=e,(o=document.activeElement)&&o!=document.body?document.querySelector&&(o=document.querySelector(":focus")):o=null,n!==o&&t.changeState(),t.isActive=!1}))})),t}return f=s,(a=[{key:"changeState",value:function(){this.classList.toggle("u-hidden-visually",this.isActive),this.classList.toggle("--active",!this.isActive)}}])&&e(f.prototype,a),s}(o(HTMLElement));customElements.define("c-skip-to-content",f)}()}();