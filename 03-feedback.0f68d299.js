!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var i,o,a,f,u,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,f=e.apply(r,n)}function S(e){return c=e,u=setTimeout(h,t),s?p(e):f}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(j(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return u=void 0,v&&i?p(e):(i=o=void 0,f)}function T(){var e=b(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===u)return S(l);if(d)return u=setTimeout(h,t),p(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=O(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=o=u=void 0},T.flush=function(){return void 0===u?f:w(b())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||u.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form");S.addEventListener("input",e(t)((function(){var e={email:S.email.value,message:S.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));var j=localStorage.getItem("feedback-form-state");if(j){var h=JSON.parse(j),w=h.email,T=h.message;S.email.value=w,S.message.value=T}S.addEventListener("submit",(function(e){e.preventDefault(),S.email.value="",S.message.value="",localStorage.setItem("feedback-form-state",JSON.stringify({email:"",message:""})),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}))}();
//# sourceMappingURL=03-feedback.0f68d299.js.map
