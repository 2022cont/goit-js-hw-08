!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),m=Object.prototype.toString,s=Math.max,p=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var r,i,a,u,f,l,c=0,d=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),d?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function O(){var e=y();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return v?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?b(e):(r=i=void 0,u)}function x(){var e=y(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=w(t)||0,g(n)&&(d=!!n.leading,a=(v="maxWait"in n)?s(w(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},x.flush=function(){return void 0===f?u:h(y())},x}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})},window.localStorage.removeItem("videoplayer-current-time");var S,j="feedback-form-state",O={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},h={};(S=localStorage.getItem(j))&&(O.value=JSON.parse(S),O.email.value=O.value.email,O.textarea.value=O.value.message),O.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),window.localStorage.removeItem(j)})),O.form.addEventListener("input",e(t)((function(e){var t=e.target.name,n=e.target.value;h[t]=n,localStorage.setItem(j,JSON.stringify(h))}),500))}();
//# sourceMappingURL=03-feedback.b9719424.js.map
