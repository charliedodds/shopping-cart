(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),r=(a(26),a(7)),o=a(8),l=a(2),j=(a(27),a(0)),m=function(e){var t=e.numItems;return Object(j.jsxs)("nav",{className:"Navbar",children:[Object(j.jsx)("figure",{className:"Navbar-logo",children:Object(j.jsx)("i",{className:"fas fa-gamepad"})}),Object(j.jsxs)("ul",{className:"Navbar-links",children:[Object(j.jsx)("li",{className:"Navbar-li",children:Object(j.jsx)(r.c,{exact:!0,to:"/shopping-cart/",className:"Navbar-link",activeClassName:"Navbar-active",children:"Home"})}),Object(j.jsx)("li",{className:"Navbar-li",children:Object(j.jsx)(r.c,{exact:!0,to:"/shopping-cart/shop",className:"Navbar-link",activeClassName:"Navbar-active",children:"Shop"})})]}),Object(j.jsx)(r.c,{exact:!0,to:"/shopping-cart/checkout",activeClassName:"Navbar-active",children:Object(j.jsxs)("button",{className:"Navbar-btn",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsx)("span",{className:"Navbar-num-items",children:t})]})})]})},h=(a(37),function(){return Object(j.jsxs)("section",{className:"Home",children:[Object(j.jsx)("h1",{className:"Home-title",children:"Steam Sale Price Checker"}),Object(j.jsx)("p",{className:"Home-para",children:"This project was built as part of The Odin Project to practice React Router with a couple of routes, but does function relatively well as a Steam sale price checker."}),Object(j.jsx)("figure",{className:"Home-logo",children:Object(j.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png",alt:"steam logo"})}),Object(j.jsx)("p",{className:"Home-para",children:"Head to the Shop tab to see the top 60 current sales (ordered by how good the sale is, not by price or rating)."}),Object(j.jsx)("p",{className:"Home-para disclaimer",children:"This website is not affiliated with Steam in any way shape or form, I just needed an API which displayed images and prices."})]})}),u=a(10),b=a.n(u),d=a(14),p=function(e){return e.replace("capsule_sm_120","header")},x=(a(39),function(e){var t=e.count,a=e.rating;return Object(j.jsx)("p",{className:"rating ".concat(function(e,t){return"0"===e?"":t<=50?"red-text":t<=75?"orange-text":"green-text"}(t,a)),children:"0"===t?"Unrated":a})}),O=(a(40),function(e){var t=e.item,a=p(t.thumb);return Object(j.jsx)(r.b,{to:"/shopping-cart/shop/".concat(t.dealID),className:"Card-link",children:Object(j.jsxs)("article",{className:"Card",children:[Object(j.jsx)("figure",{className:"Card-img-container",children:Object(j.jsx)("img",{className:"Card-img",src:a,alt:"".concat(t.title," thumbnail")})}),Object(j.jsx)("h2",{className:"Card-title",children:t.title}),Object(j.jsxs)("section",{className:"Card-info",children:[Object(j.jsxs)("p",{className:"Card-price",children:["\xa3",t.salePrice]}),Object(j.jsx)(x,{count:t.steamRatingCount,rating:t.steamRatingPercent})]})]})})}),f=(a(41),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(d.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,s(c),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),Object(j.jsxs)("section",{className:"Shop",children:[Object(j.jsx)("h1",{children:"Steam games on sale"}),Object(j.jsx)("p",{className:"Shop-subtitle",children:"Ordered by how good the deal is"}),Object(j.jsx)("section",{className:"Shop-container",children:a&&a.map((function(e){return Object(j.jsx)(O,{item:e},e.internalName)}))})]})}),g=a(21),N=a(46),v=(a(42),function(e){var t=e.basket,a=e.setBasket,s=Object(c.useState)({}),n=Object(o.a)(s,2),i=n[0],r=n[1],m=Object(c.useState)(1),h=Object(o.a)(m,2),u=h[0],O=h[1],f=Object(l.f)().dealID,v=function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.cheapshark.com/api/1.0/deals?id=".concat(f));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v()}),[]);return Object(j.jsxs)("article",{className:"Item",children:[i.gameInfo&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"Item-title",children:i.gameInfo.name}),Object(j.jsx)("img",{className:"Item-img",src:p(i.gameInfo.thumb),alt:"".concat(i.gameInfo.name," thumbnail")}),Object(j.jsxs)("section",{className:"Item-info",children:[Object(j.jsxs)("section",{className:"Item-prices",children:[Object(j.jsxs)("p",{className:"Item-sale",children:["\xa3",i.gameInfo.salePrice]}),Object(j.jsxs)("p",{className:"Item-retail",children:["\xa3",i.gameInfo.retailPrice]})]}),Object(j.jsxs)("section",{className:"Item-rating",children:[Object(j.jsx)(x,{count:i.gameInfo.steamRatingCount,rating:i.gameInfo.steamRatingPercent}),i.gameInfo.steamRatingText&&Object(j.jsx)("p",{className:"Item-review-info",children:i.gameInfo.steamRatingText}),i.gameInfo.steamRatingCount>0&&Object(j.jsxs)("p",{className:"Item-review-info",children:[i.gameInfo.steamRatingCount," reviews"]})]})]})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var c=[],s=u;s>0;s--)c.push({name:i.gameInfo.name,img:p(i.gameInfo.thumb),price:i.gameInfo.salePrice,id:Object(N.a)()});a([].concat(Object(g.a)(t),c)),console.log(t),O(1)},children:[Object(j.jsx)("p",{children:"Add to cart"}),Object(j.jsxs)("section",{className:"Item-input-container",children:[Object(j.jsx)("label",{htmlFor:"qty",children:"Quantity:"}),Object(j.jsxs)("section",{className:"Item-inputs",children:[Object(j.jsx)("button",{type:"button",className:"Item-button",onClick:function(){O(u+1)},children:Object(j.jsx)("i",{className:"fas fa-caret-up"})}),Object(j.jsx)("input",{className:"Item-input",id:"qty",onChange:function(e){"string"===typeof e.target.value?O(parseInt(e.target.value)):O(e.target.value)},type:"number",min:"1",value:u}),Object(j.jsx)("button",{type:"button",className:"Item-button",onClick:function(){u>1&&O(u-1)},children:Object(j.jsx)("i",{className:"fas fa-caret-down"})})]})]}),Object(j.jsx)("button",{type:"submit",className:"Item-add-to-cart",children:Object(j.jsx)("i",{className:"fas fa-cart-plus"})})]})]})}),I=(a(43),function(e){var t,a=e.basket,c=e.setBasket;!function(e){e&&(t=e.map((function(e){return e.price})))}(a),console.log(t),console.log(a);var s=function(e){var t=e.target.closest("article").id;c(a.filter((function(e){return e.id!==t})))};return Object(j.jsxs)("section",{className:"Checkout",children:[Object(j.jsx)("h1",{children:"Checkout"}),0===a.length&&Object(j.jsx)("p",{className:"Checkout-empty",children:"Add items to your basket to see them here!"}),Object(j.jsx)("section",{className:"Checkout-items",children:a&&a.map((function(e){return Object(j.jsxs)("article",{id:e.id,className:"Checkout-item",children:[Object(j.jsxs)("section",{className:"Checkout-info",children:[Object(j.jsx)("h2",{className:"Checkout-title",children:e.name}),Object(j.jsxs)("section",{className:"Checkout-container",children:[Object(j.jsxs)("p",{className:"Checkout-price",children:["\xa3",e.price]}),Object(j.jsx)("button",{onClick:s,children:Object(j.jsx)("i",{className:"far fa-trash-alt"})})]})]}),Object(j.jsx)("figure",{className:"Checkout-img-container",children:Object(j.jsx)("img",{className:"Checkout-img",src:e.img,alt:e.name})})]},e.id)}))}),Object(j.jsx)("section",{className:"total",children:Object(j.jsxs)("p",{children:["Total: \xa3",t&&t.reduce((function(e,t){return(e=parseFloat(e))+(t=parseFloat(t))}),0).toFixed(2)]})})]})}),k=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(j.jsxs)("main",{className:"ShopApp",children:[Object(j.jsx)(m,{numItems:a.length}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/shopping-cart/",component:h}),Object(j.jsx)(l.a,{exact:!0,path:"/shopping-cart/shop",component:f}),Object(j.jsx)(l.a,{exact:!0,path:"/shopping-cart/shop/:dealID",children:Object(j.jsx)(v,{basket:a,setBasket:s})}),Object(j.jsx)(l.a,{exact:!0,path:"/shopping-cart/checkout",children:Object(j.jsx)(I,{basket:a,setBasket:s})})]})]})},C=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)(k,{})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),w()}},[[44,1,2]]]);
//# sourceMappingURL=main.ce5256a0.chunk.js.map