(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,n){"use strict";n.r(t),n.d(t,"Item",(function(){return c}));var a=n(0),i=n.n(a);function c(e,t){var a=e.src,c=e.id,r=e.i,o=e.width,s=e.numItems,u={};return""===c?u={left:"".concat(o*r,"px")}:"cloneStart"===c?u={left:"".concat(-o,"px")}:"cloneEnd"===c&&(u={left:"".concat(o*s,"px")}),i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{key:t,className:"item",id:c,style:u},i.a.createElement("img",{src:n(16)("".concat(a)),className:"image",alt:""})))}},,function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n(0),i=n.n(a),c=n(4);function r(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(c.Carousel,null)))}},function(e,t,n){"use strict";n.r(t),n.d(t,"Carousel",(function(){return l}));for(var a=n(2),i=n(0),c=n.n(i),r=n(1),o=n(5),s=(n(6),"transform 250ms ease-in"),u=[],m=0;m<5;m++)u.push(m);function l(e){var t=Object(i.useState)(!document.hidden),n=Object(a.a)(t,2);n[0],n[1];document.addEventListener("visibilitychange",(function(){}));var m=Object(i.useState)(.3*window.innerWidth),l=Object(a.a)(m,2),d=l[0],g=l[1],f=Object(i.useState)(0),p=Object(a.a)(f,2),v=p[0],j=p[1],b=Object(i.useState)(s),E=Object(a.a)(b,2),h=E[0],I=E[1],O=Object(i.useState)(0),w=Object(a.a)(O,2),x=w[0],y=w[1],N=Object(i.useRef)(null);window.addEventListener("resize",(function(){return console.log("evo ga"),void g(.3*window.innerWidth)}));var k=function(e){e<0&&-1===v||e>0&&5===v||(j((function(t){return t+e})),I(s),y((function(t){return t+e})),e<0&&0===v?(y(4),console.log("active indicator changed")):e>0&&4===v&&(y(0),console.log("active indicator changed")))};return Object(i.useEffect)((function(){I("none")}),[d]),Object(i.useEffect)((function(){var e=setInterval((function(){k(1)}),5e3);N.current.addEventListener("mouseleave",(function(){e=setInterval((function(){k(1)}),5e3)})),document.addEventListener("visibilitychange",(function(){document.hidden?clearInterval(e):e=setInterval((function(){k(1)}),5e3)})),N.current.addEventListener("mousemove",(function(){clearInterval(e)}))}),[]),c.a.createElement("div",{className:"carousel-wrapper",ref:N,style:{width:d}},c.a.createElement("div",{className:"carousel-container"},c.a.createElement("ul",{className:"images-list",style:{transition:h,transform:"translateX(".concat(-d*v,"px)")},onTransitionEnd:function(e){-1===v?(I("none"),j(4),y(4)):5===v&&(I("none"),j(0),y(0))}},c.a.createElement(r.Item,{src:"./images/img".concat(u.length-1,".jpg"),id:"cloneStart",width:d}),u.map((function(e,t){return c.a.createElement(r.Item,{src:"./images/img".concat(t,".jpg"),key:t,i:t,id:"",width:d})})),c.a.createElement(r.Item,{src:"./images/img0.jpg",id:"cloneEnd",width:d,numItems:5})),c.a.createElement("button",{className:"carousel-btn btn-prev",onClick:function(e){return k(-1)}},c.a.createElement("i",{className:"fas fa-chevron-left"})),c.a.createElement("button",{className:"carousel-btn btn-next",onClick:function(e){return k(1)}},c.a.createElement("i",{className:"fas fa-chevron-right"})),c.a.createElement("div",{className:"nav-container"},u.map((function(e,t){return c.a.createElement(o.Indicator,{key:t,i:t,counter:v,setCounter:j,ruleTransition:h,setRuleTransition:I,TRANSITION:s,activeIndicator:x,setActiveIndicator:y})})))))}},function(e,t,n){"use strict";n.r(t),n.d(t,"Indicator",(function(){return c}));var a=n(0),i=n.n(a);function c(e,t){e.counter;var n=e.setCounter,a=e.ruleTransition,c=e.setRuleTransition,r=e.TRANSITION,o=e.i,s=e.activeIndicator,u=e.setActiveIndicator;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"nav-indicator",key:t,onClick:function(e){n(o),u(o),"none"===a&&c(r)},style:s===o?{background:"radial-gradient(black, black 30%, white 30%)"}:{background:"white"}}))}},function(e,t,n){"use strict";function a(e,t,n){var a;return function(){var i=this,c=arguments,r=function(){a=null,n||e.apply(i,c)},o=n&&!a;clearTimeout(a),a=setTimeout(r,t),o&&e.apply(i,c)}}n.r(t),n.d(t,"debounce",(function(){return a}))},,,function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),r=n.n(c),o=(n(15),n(3));r.a.render(i.a.createElement(o.default,null),document.getElementById("root"))},,,,,function(e,t,n){},function(e,t,n){var a={"./App":3,"./App.js":3,"./Carousel":4,"./Carousel-indicator":5,"./Carousel-indicator.js":5,"./Carousel-item":1,"./Carousel-item.js":1,"./Carousel.js":4,"./debounce":6,"./debounce.js":6,"./images/img0.jpg":17,"./images/img1.jpg":18,"./images/img2.jpg":19,"./images/img3.jpg":20,"./images/img4.jpg":21,"./images/img5.jpg":22,"./images/img6.jpg":23,"./images/img7.jpg":24,"./images/img8.jpg":25,"./images/img9.jpg":26};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=c,e.exports=i,i.id=16},function(e,t,n){e.exports=n.p+"static/media/img0.cb564118.jpg"},function(e,t,n){e.exports=n.p+"static/media/img1.bc1b67ec.jpg"},function(e,t,n){e.exports=n.p+"static/media/img2.273ced44.jpg"},function(e,t,n){e.exports=n.p+"static/media/img3.4862d5dc.jpg"},function(e,t,n){e.exports=n.p+"static/media/img4.01c47c28.jpg"},function(e,t,n){e.exports=n.p+"static/media/img5.a0c922a8.jpg"},function(e,t,n){e.exports=n.p+"static/media/img6.abb0c9dc.jpg"},function(e,t,n){e.exports=n.p+"static/media/img7.32aa3c82.jpg"},function(e,t,n){e.exports=n.p+"static/media/img8.14a2e9af.jpg"},function(e,t,n){e.exports=n.p+"static/media/img9.353e0ca5.jpg"}],[[9,1,2]]]);
//# sourceMappingURL=main.ce586707.chunk.js.map