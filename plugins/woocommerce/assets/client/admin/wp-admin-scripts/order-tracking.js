!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),window.wp.i18n;var t=window.wc.data,o=window.wp.data;window.wc.navigation;const n="customer-effort-score-exit-page";let r=!1;const c=(0,o.resolveSelect)(t.OPTIONS_STORE_NAME).getOption("woocommerce_allow_tracking").then((e=>{r="yes"===e})),i={},a=(e,t)=>{i[e]=()=>{t()&&(async e=>{if(await c,!window.localStorage||!r)return;let t=(()=>{if(!window.localStorage)return[];const e=window.localStorage.getItem(n),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]})();t.find((t=>t===e))||t.push(e),t=t.slice(-10),window.localStorage.setItem(n,JSON.stringify(t))})(e)},window.addEventListener("unload",i[e])};function s(e){const t=e.querySelectorAll("input, select, textarea"),o={};for(const e of t){const t=e.name||e.id;if("button"!==e.type&&"image"!==e.type&&"submit"!==e.type&&"hidden"!==e.type&&t)switch(e.type){case"checkbox":o[t]=+e.checked;break;case"radio":void 0===o[t]&&(o[t]=""),e.checked&&(o[t]=e.value);break;case"select-multiple":const n=[];for(const t of e.options)t.selected&&n.push(t.value);o[t]=n;break;default:o[t]=e.value}}return o}const d=document.forms;if(null!=d&&d.post){let e=!1;const t=document.querySelector(".save_order"),o=document.querySelector(".submitdelete");t&&t.addEventListener("click",(()=>{e=!0})),o&&o.addEventListener("click",(()=>{e=!0}));const n=s(d.post);a("shop_order_update",(()=>{if(e)return!1;const t=d.post?s(d.post):{};for(const e of Object.keys(n))if(("object"==typeof n[e]?JSON.stringify(n[e]):n[e])!==("object"==typeof t[e]?JSON.stringify(t[e]):t[e]))return!0;return!1}))}(window.wc=window.wc||{}).orderTracking=e}();