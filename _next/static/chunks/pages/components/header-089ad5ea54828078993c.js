(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(1689),l=t(2441),i=t(5749),u={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.asPath||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],l=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=a.Children.only(v),E=x&&"object"===typeof x&&x.ref,_=(0,i.useIntersection)({rootMargin:"200px"}),L=r(_,2),m=L[0],w=L[1],j=a.default.useCallback((function(e){m(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,m]);(0,a.useEffect)((function(){var e=w&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,w,g,n,t]);var k={ref:j,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,l,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:l}))}(e,t,d,p,h,y,b,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var M="undefined"!==typeof g?g:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,M,t&&t.locales,t&&t.domainLocales);k.href=C||(0,c.addBasePath)((0,c.addLocale)(p,M,t&&t.defaultLocale))}return a.default.cloneElement(x,k)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),a=t(8391),c="undefined"!==typeof IntersectionObserver;var l=new Map},526:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(1664),a={textDecoration:"none"};n.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.default,{href:"/index",children:(0,r.jsx)("a",{style:a,children:"\u9996\u9875"})}),(0,r.jsx)(o.default,{href:"/about",children:(0,r.jsx)("a",{style:a,children:"\u5173\u4e8e"})}),(0,r.jsx)(o.default,{href:"/tool",children:(0,r.jsx)("a",{style:a,children:"\u5de5\u5177"})}),(0,r.jsx)(o.default,{href:"/exchange",children:(0,r.jsx)("a",{style:a,children:"\u4ea4\u6d41"})})]})}},9813:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/header",function(){return t(526)}])},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=9813,e(e.s=n);var n}));var n=e.O();_N_E=n}]);