(this["webpackJsonpvinilos-ceit"]=this["webpackJsonpvinilos-ceit"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),r=c.n(i),o=(c(9),c(10),c(11),c(0)),a=function(){return Object(o.jsx)("button",{className:"shopping-cart-logo",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-shopping-cart",width:"48",height:"48",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#ffffff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(o.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(o.jsx)("circle",{cx:"6",cy:"19",r:"2"}),Object(o.jsx)("circle",{cx:"17",cy:"19",r:"2"}),Object(o.jsx)("path",{d:"M17 17h-11v-14h-2"}),Object(o.jsx)("path",{d:"M6 5l14 1l-1 7h-13"})]})})},l=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("nav",{className:"navbar d-flex",children:[Object(o.jsxs)("a",{href:"#",className:"d-flex align-items-center",children:[Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-ball-basketball",width:"48",height:"48",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#e83630",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(o.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(o.jsx)("circle",{cx:"12",cy:"12",r:"9"}),Object(o.jsx)("line",{x1:"5.65",y1:"5.65",x2:"18.35",y2:"18.35"}),Object(o.jsx)("line",{x1:"5.65",y1:"18.35",x2:"18.35",y2:"5.65"}),Object(o.jsx)("path",{d:"M12 3a9 9 0 0 0 9 9"}),Object(o.jsx)("path",{d:"M3 12a9 9 0 0 1 9 9"})]}),Object(o.jsxs)("h1",{children:["VINTAGE ",Object(o.jsx)("span",{children:"JERSEYS"})]})]}),Object(o.jsxs)("ul",{className:"d-flex main-nav-items",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#",children:"HOME"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#",children:"ABOUT"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#",children:"SHOP"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#",children:"CONTACT"})})]}),Object(o.jsxs)("div",{className:"d-flex nav-buttons",children:[Object(o.jsx)(a,{}),Object(o.jsx)("button",{className:"user-logo",children:Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user",width:"48",height:"48",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#ffffff",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(o.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(o.jsx)("circle",{cx:"12",cy:"7",r:"4"}),Object(o.jsx)("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"})]})})]})]})})},j=(c(13),c(2)),d=(c(14),c(15),c(16),function(e){var t=e.stock,c=e.initial,s=n.useState(c),i=Object(j.a)(s,2),r=i[0],a=i[1];return Object(o.jsxs)("div",{id:"itemCounter",className:"d-flex",children:[Object(o.jsx)("button",{type:"button",className:"operations",onClick:function(){r>c&&a((function(e){return e-1}))},children:"-"}),Object(o.jsx)("button",{type:"button",children:r}),Object(o.jsx)("button",{type:"button",className:"operations",onClick:function(){r<t&&a((function(e){return e+1}))},children:"+"})]})}),h=function(e){var t=e.name,c=void 0===t?"nombre del producto":t,n=e.price,s=void 0===n?"80.00":n,i=e.src,r=void 0===i?"https://tienda.ganon.com/sca-dev-kilimanjaro/img/no_image_available.jpeg?resizeid=3&resizeh=250&resizew=300":i,a=e.stock,l=void 0===a?10:a,j=e.initial,h=void 0===j?1:j;return Object(o.jsxs)("div",{className:"productContainer",children:[Object(o.jsx)("a",{className:"productImage",href:"#",children:Object(o.jsx)("div",{className:"productImage",children:Object(o.jsx)("img",{src:r,alt:"Imagen del producto"})})}),Object(o.jsxs)("div",{className:"productContent",children:[Object(o.jsxs)("div",{className:"productInfo d-flex flex-column",children:[Object(o.jsx)("h3",{className:"productName",children:Object(o.jsx)("a",{href:"#",children:c})}),Object(o.jsxs)("span",{className:"productPrice",children:["$",s]})]}),Object(o.jsxs)("div",{className:"productButtons d-flex",children:[Object(o.jsx)(d,{stock:l,initial:h}),Object(o.jsxs)("button",{className:"addToCart d-flex",children:[Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-shopping-cart-plus",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#262528",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(o.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(o.jsx)("circle",{cx:"6",cy:"19",r:"2"}),Object(o.jsx)("circle",{cx:"17",cy:"19",r:"2"}),Object(o.jsx)("path",{d:"M17 17h-11v-14h-2"}),Object(o.jsx)("path",{d:"M6 5l6.005 .429m7.138 6.573l-.143 .998h-13"}),Object(o.jsx)("path",{d:"M15 6h6m-3 -3v6"})]}),"Add to cart"]})]})]})]})},b=function(){var e=n.useState([]),t=Object(j.a)(e,2),c=t[0],s=t[1],i=n.useState(!1),r=Object(j.a)(i,2),a=r[0],l=r[1];return n.useEffect((function(){l(!0),new Promise((function(e){setTimeout((function(){e(x)}),2e3)})).then((function(e){return s(e)})).finally((function(){return l(!1)}))}),[]),Object(o.jsxs)("div",{id:"itemsList",className:"d-flex flex-row flex-wrap",children:[a?Object(o.jsx)("p",{children:"Cargando..."}):null,null===c||void 0===c?void 0:c.map((function(e){return Object(o.jsx)(h,{name:e.name,price:e.price,src:e.src,stock:e.stock,initial:e.initial},e.id)}))]})},x=[{id:0,name:"1995 Barcelona Home",price:"8.500,00",src:"https://www.jerseygoal.co/images/Retro-Jersey/1992-1995%20Barcelona%20Home%20Retro%20Jersey%201.jpg",stock:5,initial:1},{id:1,name:"1994 WC Argentina Away",price:"9.500,00",src:"https://www.jerseygoal.co/images/Retro-Jersey/1994-1995%20Argentina%20Away%20Retro%20Jersey%20701.jpg",stock:15,initial:1},{id:2,name:"1999 Inter Milan Home",price:"7.000,00",src:"https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Intel%20Milan%20Home%20Long%20Sleeve%20Retro%20Jersey%20BAGGIO%2010%20Shirt.jpg",stock:7,initial:1},{id:3,name:"1998 Boca Jrs Home",price:"8.900,00",src:"https://www.jerseygoal.co/images/Retro-Jersey/1997-1998%20Boca%20Juniors%20Home%20Shirt%20Maradona%2010.jpg",stock:10,initial:1},{id:4,name:"1998 WC France Home",price:"11.500,00",src:"https://www.jerseygoal.co/images/France/1998%20World%20Cup%20France%20Home%20Final%20Jersey.jpg",stock:11,initial:1},{id:5,name:"1997 Arsenal Home",price:"10.500,00",src:"https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Arsenal%20Home%20Retro%20Jersey%201.jpg",stock:6,initial:1}],m=function(e){var t=e.nombre;return Object(o.jsxs)("section",{id:"itemsContainer",children:[Object(o.jsxs)("h2",{children:["Bienvenid@ ",Object(o.jsx)("span",{children:t})]}),Object(o.jsx)(b,{})]})},u=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{}),Object(o.jsx)(m,{nombre:"Victoria"})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.aa1f3768.chunk.js.map