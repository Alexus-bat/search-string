(this["webpackJsonpsearch-string"]=this["webpackJsonpsearch-string"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c,r=n(1),s=n.n(r),a=n(5),i=n.n(a),u=(n(11),n(4)),o=n.n(u),j=n(6),l=n(2),b=(n(13),n(0));!function(e){e[e.Length=0]="Length",e[e.String=1]="String"}(c||(c={}));var h=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),u=i[0],h=i[1],O=Object(r.useState)(!1),d=Object(l.a)(O,2),f=d[0],x=d[1],g=Object(r.useState)([]),p=Object(l.a)(g,2),v=p[0],m=p[1],k=Object(r.useState)(!1),S=Object(l.a)(k,2),C=S[0],w=S[1];Object(r.useEffect)((function(){L()}),[]);var L=Object(r.useCallback)(Object(j.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.data,s(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[]),N=function(e,t){var r,s;e.preventDefault(),t===c.Length&&Number(u)>=0?m((r=n,s=Number(u),r.filter((function(e){return e.length>s})))):t===c.String&&u&&m(function(e,t,n){return n?e.filter((function(e){return e.includes(t)})):e.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())}))}(n,u,f)),w(!0),h("")};return Object(b.jsxs)("main",{children:[Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u043e\u043a\u0443...",value:u,onChange:function(e){return h(e.target.value)},checked:f}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox",id:"checkbox",onChange:function(){return x((function(e){return!e}))}}),Object(b.jsx)("label",{htmlFor:"checkbox",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440"})]}),Object(b.jsxs)("div",{className:"action",children:[Object(b.jsx)("button",{onClick:function(e){N(e,c.Length)},children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0434\u043b\u0438\u043d\u0435"}),Object(b.jsx)("button",{onClick:function(e){N(e,c.String)},children:"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0435"})]})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h2",{children:"\u0412\u044b\u0432\u043e\u0434:"}),C&&(v.length>0?Object(b.jsx)("ul",{className:"content__list",children:v.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))}):Object(b.jsx)("h3",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}))]})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.97fa8ef4.chunk.js.map