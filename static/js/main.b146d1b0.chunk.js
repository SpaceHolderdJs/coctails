(this.webpackJsonpcoctails=this.webpackJsonpcoctails||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(12),s=c.n(r),a=(c(19),c(3)),j=(c(20),c(6)),o=c(2),l=c(0),d=function(e){var t=e.drink,c=e.ingredient,i=e.isFull,r=Object(n.useState)(!1),s=Object(a.a)(r,2),o=s[0],d=s[1];if(t){var b=t.idDrink,u=t.strCategory,h=t.strDrink,O=(t.strImageSource,t.strInstructions),x=t.strDrinkThumb,f=Object.keys(t).filter((function(e){return e.includes("strIngredient")&&t[e]})).map((function(e){return t[e]}));return console.log(t),Object(l.jsxs)("div",{className:"column  card drink-card ".concat(i&&"full-card"),children:[Object(l.jsx)("img",{src:x,alt:"drink"}),Object(l.jsxs)("div",{className:"column info-wrapper",children:[Object(l.jsx)("h3",{children:h}),i&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){return d(!o)},children:o?"Hide ingridients":"Show ingridients"}),o&&f.map((function(e){return Object(l.jsx)("span",{children:e})})),Object(l.jsx)("h3",{children:"Instructions"}),Object(l.jsx)("p",{children:O})]}),Object(l.jsx)("span",{children:u}),!i&&Object(l.jsx)(j.b,{to:"/cocktailDetails/".concat(b),children:"More"})]})]})}var m=c.strDescription,p=c.strType;return Object(l.jsxs)("div",{className:"row card ing-card",children:[Object(l.jsxs)("div",{className:"column",children:[Object(l.jsx)("h1",{children:p}),Object(l.jsx)("p",{children:m})]}),Object(l.jsx)("img",{src:"https://www.thecocktaildb.com/images/ingredients/".concat(p.toLowerCase(),".png"),alt:"drink"})]})},b=function(){var e=Object(n.useContext)(f).getData,t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)([]),j=Object(a.a)(s,2),o=j[0],b=j[1];return Object(l.jsxs)("div",{className:"column centered container",children:[Object(l.jsx)("h1",{children:"Cocktail"}),Object(l.jsxs)("div",{className:"row centered",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:i}),Object(l.jsx)("button",{onClick:function(){r(""),e({name:"s",value:i},b)},children:"Search"})]}),Object(l.jsx)("div",{className:"wrapper row",children:(null===o||void 0===o?void 0:o.length)>0&&o.map((function(e){return Object(l.jsx)(d,{drink:e})}))})]})},u=function(){var e=Object(n.useContext)(f).getData,t=Object(n.useState)(""),c=Object(a.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)([]),j=Object(a.a)(s,2),o=j[0],b=j[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Ingridients"}),Object(l.jsxs)("div",{className:"row centered",children:[Object(l.jsx)("input",{type:"text",value:i,onChange:function(e){r(e.target.value)}}),Object(l.jsx)("button",{onClick:function(){r(""),e({name:"i",value:i},b)},children:"Search"})]}),Object(l.jsx)("div",{className:"wrapper row centered",children:(null===o||void 0===o?void 0:o.length)>0&&o.map((function(e){return Object(l.jsx)(d,{ingredient:e})}))})]})},h=function(){var e=Object(o.f)().id,t=Object(n.useState)(),c=Object(a.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e,"&key=1")).then((function(e){return e.json()})).then((function(e){console.log(e),r(e.drinks[0])}))}),[]),Object(l.jsxs)("div",{className:"column centered container",children:[Object(l.jsx)("h1",{children:"Details "}),i&&Object(l.jsx)(d,{drink:i,isFull:!0}),Object(l.jsx)("button",{onClick:function(){return window.history.back()},children:"Back"})]})},O=function(e){var t=e.children,c=e.numberToShow,i=Object(n.useState)(0),r=Object(a.a)(i,2),s=r[0],j=r[1],o=Object(n.useState)(!0),d=Object(a.a)(o,2),b=d[0],u=d[1];return console.log(t),Object(l.jsxs)("div",{className:"column centered slider",children:[Object(l.jsx)("h1",{children:"Slider"}),Object(l.jsxs)("div",{className:"row sl-wrapper centered",children:[Object(l.jsx)("button",{onClick:function(){j(s-1<0?t.length-1:s-1),u(!b)},children:"<"}),Object(l.jsx)("div",{className:"slide row ".concat(b?"append":"fade"),children:t.slice(s,c+s)}),Object(l.jsx)("button",{onClick:function(){j(s+1>t.length-1?0:s+1),u(!b)},children:">"})]})]})},x=function(){var e=Object(n.useContext)(f).getData,t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){e({name:"f",value:"m"},r)}),[]),Object(l.jsxs)("div",{className:"column centered main container",children:[Object(l.jsx)("h1",{children:"Cocktail of the day"}),i.length>0&&Object(l.jsx)(O,{numberToShow:5,children:i.length>0&&i.map((function(e){return Object(l.jsx)(d,{drink:e})}))})]})},f=Object(n.createContext)();var m=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],i=t[1],r=Object(n.useCallback)((function(e,t){i(!0),fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?".concat(e.name,"=").concat(e.value,"&key=1")).then((function(e){return e.json()})).then((function(e){console.log(e),i(!1),t(e.drinks||e.ingredients)}))}),[]);return Object(l.jsx)(j.a,{children:Object(l.jsxs)(f.Provider,{value:{getData:r},children:[Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(j.b,{to:"/",children:"Main"}),Object(l.jsx)(j.b,{to:"/cocktailSearch",children:"Cocktails"}),Object(l.jsx)(j.b,{to:"/searchIngridient",children:"Ingridients"})]}),c&&Object(l.jsx)("h1",{children:"Loading"})]}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,children:Object(l.jsx)(x,{})}),Object(l.jsx)(o.a,{path:"/cocktailSearch",children:Object(l.jsx)(b,{})}),Object(l.jsx)(o.a,{path:"/searchIngridient",children:Object(l.jsx)(u,{})}),Object(l.jsx)(o.a,{path:"/cocktailDetails/:id",children:Object(l.jsx)(h,{})})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.b146d1b0.chunk.js.map