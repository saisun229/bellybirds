(this.webpackJsonpbellybirdsclient=this.webpackJsonpbellybirdsclient||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(10),i=a.n(r),o=(a(94),a(24)),l=a(11),u=(a(95),a(170)),d=a(71),j=a(34),b=localStorage.getItem("token"),h={email:void 0,username:void 0};b&&b.length>20&&(h=Object(j.a)(b));var m={user:{email:h.email?h.email:"",uname:h.username?h.username:""}},O=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=e;return"getUser"===t.type&&(a.user=t.user),a}));a(97);function g(){var e=Object(l.f)();return Object(n.jsx)("header",{className:"home__header",children:Object(n.jsx)("div",{className:"home__header__logo",onClick:function(){e.push("/")}})})}a(105),a(106);var v=a(73),p=a.n(v),x=a(78),f=a.n(x),w=a(77),N=a.n(w);function S(){var e=Object(l.f)(),t=!!O.getState().user.email;return Object(n.jsxs)("nav",{className:"nav",children:[Object(n.jsx)("div",{className:"nav--home",children:Object(n.jsx)(p.a,{fontSize:"large",onClick:function(){t?e.push("/"):e.push("/login")}})}),Object(n.jsx)("div",{className:"nav--chat",children:Object(n.jsx)(N.a,{fontSize:"large",onClick:function(){t?e.push("/chat"):e.push("/login")}})}),Object(n.jsx)("div",{className:"nav-account",children:Object(n.jsx)(f.a,{fontSize:"large"})})]})}function _(){return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)(g,{}),Object(n.jsx)(S,{})]})}a(108);function y(e){return Object(n.jsx)("main",{className:e.class,children:e.children})}function k(){var e=Object(l.f)(),t=!!O.getState().user.email;return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(_,{}),Object(n.jsx)(y,{children:Object(n.jsxs)("div",{className:"home__navigation",children:[Object(n.jsx)("h6",{children:"Home Page, Coming soon..."}),Object(n.jsx)(u.a,{component:"button",onClick:function(){t?e.push("/chat"):e.push("/login")},children:"Link to Live Chat"})]})})]})}var C=a(21),E=a.n(C),W=a(30),I=a(16),L=(a(110),a(168)),J=a(167),z=a(165),P=Object(z.a)({secondary:{background:"linear-gradient(45deg, #9ca20e 30%, #dacb1c 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"black",height:48,padding:"0 30px"},primary:{background:"linear-gradient(45deg, #101010 30%, #171514 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}}),U=Object(z.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),Y=a(79),$=a.n(Y),M=!("localhost"===window.location.hostname)?"".concat(window.location.origin,":1337"):"http://localhost:1337";function A(e,t){return R.apply(this,arguments)}function R(){return(R=Object(W.a)(E.a.mark((function e(t,a){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api call request"),n={headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("token")||""}},e.next=4,$.a.post("".concat(M).concat(t),JSON.stringify(a),n);case 4:return c=e.sent,console.log("api call request response",c.data),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z="/api/register",q="/api/login",H=a(171),T=a(169),V=Object(z.a)((function(e){return Object(H.a)({root:{width:"80%",marginLeft:"8px"}})}));function B(e){var t=e.severity,a=e.text,c=V();switch(t){case"error":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(T.a,{variant:"outlined",severity:"error",children:a})});case"warning":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(T.a,{variant:"outlined",severity:"warning",children:a})});case"info":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(T.a,{variant:"outlined",severity:"info",children:a})});case"success":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(T.a,{variant:"outlined",severity:"success",children:a})});default:return""}}function D(){var e=P(),t=U(),a=Object(c.useState)(""),s=Object(I.a)(a,2),r=s[0],i=s[1],o=Object(c.useState)(""),u=Object(I.a)(o,2),d=u[0],b=u[1],h=Object(c.useState)(""),m=Object(I.a)(h,2),g=m[0],v=m[1],p=Object(c.useState)(""),x=Object(I.a)(p,2),f=x[0],w=x[1],N=Object(l.f)();function S(){return(S=Object(W.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(q,{email:r,password:d});case 3:t=e.sent,w(t.status),v(t.message),window.localStorage.setItem("token",t.token),"success"===t.status&&(N.push("/chat"),a=localStorage.getItem("token"),n=Object(j.a)(a),O.dispatch({type:"getUser",user:{email:n.email,uname:n.username}})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),w("error"),v("Unexpected Error occured");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(_,{}),Object(n.jsxs)("div",{className:"login__form",children:[Object(n.jsx)(B,{severity:f,text:g}),Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(L.a,{id:"filled-basic",placeholder:"you@awesome.com",label:"Your Email",value:r,onChange:function(e){return i(e.target.value)},variant:"outlined"}),Object(n.jsx)(L.a,{id:"filled-basic",placeholder:"p@$$w0rd",label:"Your Password",value:d,onChange:function(e){return b(e.target.value)},variant:"outlined"}),Object(n.jsx)(J.a,{fullWidth:!0,className:e.secondary,onClick:function(){return S.apply(this,arguments)},color:"default",children:"Login"})]})]})]})}a(130);function K(){var e=P(),t=U(),a=Object(c.useState)(""),s=Object(I.a)(a,2),r=s[0],i=s[1],o=Object(c.useState)(""),u=Object(I.a)(o,2),d=u[0],b=u[1],h=Object(c.useState)(""),m=Object(I.a)(h,2),g=m[0],v=m[1],p=Object(c.useState)(""),x=Object(I.a)(p,2),f=x[0],w=x[1],N=Object(c.useState)(""),S=Object(I.a)(N,2),y=S[0],k=S[1],C=Object(l.f)();function z(){return(z=Object(W.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(d)){e.next=5;break}return k("error"),w("Invalid Email Address"),e.abrupt("return",!1);case 5:if(g||!(g.length>7)){e.next=9;break}return k("error"),w("Password should be atleast 8 digits"),e.abrupt("return",!1);case 9:return e.prev=9,e.next=12,A(Z,{uname:r,email:d,password:g});case 12:t=e.sent,console.log("ressss",t),k(t.status),w(t.message),"success"===t.status&&(window.localStorage.setItem("token",t.token),a=window.localStorage.getItem("token"),n=Object(j.a)(a),O.dispatch({type:"getUser",user:{email:n.email,uname:n.username}}),C.push("/chat")),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(9),k("error"),w("Unexpected Error occured");case 23:case"end":return e.stop()}}),e,null,[[9,19]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"register",children:[Object(n.jsx)(_,{}),Object(n.jsxs)("div",{className:"register__form",children:[Object(n.jsx)(B,{severity:y,text:f}),Object(n.jsx)("h2",{children:"Register"}),Object(n.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(L.a,{fullWidth:!0,id:"filled-basic",placeholder:"John123",label:"User Name",value:r,onChange:function(e){return i(e.target.value)},variant:"outlined"}),Object(n.jsx)(L.a,{fullWidth:!0,id:"filled-basic",placeholder:"you@awesome.com",label:"Your Email",value:d,onChange:function(e){return b(e.target.value)},variant:"outlined"}),Object(n.jsx)(L.a,{fullWidth:!0,id:"filled-basic",placeholder:"p@$$w0rd",label:"Your Password",variant:"outlined",value:g,onChange:function(e){return v(e.target.value)}}),Object(n.jsx)(J.a,{fullWidth:!0,className:e.secondary,onClick:function(){return z.apply(this,arguments)},color:"default",children:"Register"})]})]})]})}var F=a(80),G=(a(131),window.location.hostname+":1338");function Q(){var e=Object(c.useState)(""),t=Object(I.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),i=Object(I.a)(r,2),o=i[0],d=i[1],j=Object(c.useState)(null),b=Object(I.a)(j,2),h=b[0],m=b[1],g=P(),v=Object(l.f)(),p=O.getState(),x=10;function f(){(null===h||void 0===h?void 0:h.readyState)===WebSocket.OPEN&&(h.send(JSON.stringify({message:a,intent:"chat",uname:p.user.uname})),s(""))}return Object(c.useEffect)((function(){var e=new WebSocket("ws://".concat(G,"/").concat(localStorage.getItem("token")));return e.addEventListener("open",(function(){e.send(JSON.stringify({intent:"old-messages",count:100}))}),{once:!0}),e.addEventListener("error",(function(){v.replace("/login")})),e.addEventListener("message",(function(e){var t=function(e){try{return JSON.parse(e)}catch(t){return null}}(e.data);t&&(console.log("message",t),"chat"===t.intent?d((function(e){return[].concat(Object(F.a)(e),[t])})):"old-messages"===t.intent&&(console.log("old-messages",t.data),d(t.data.reverse())))})),m(e),function(){e.close()}}),[v]),Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsx)(_,{}),Object(n.jsx)("h2",{children:"Live Chat"}),Object(n.jsxs)("div",{className:"chat__wrapper",children:[Object(n.jsxs)("div",{className:"chat__messages",children:[Object(n.jsx)(u.a,{component:"button",onClick:function(){(null===h||void 0===h?void 0:h.readyState)===WebSocket.OPEN&&(x+=10,h.send(JSON.stringify({intent:"old-messages",count:x})))},children:"Show More"}),o.map((function(e,t){return e.uname===p.user.uname?Object(n.jsx)("div",{className:"chat__messages__item active",children:Object(n.jsxs)("div",{className:"chat__messages__item__wrapper--active",children:[Object(n.jsxs)("div",{className:"author",children:[e.uname,":"]}),Object(n.jsx)("div",{className:"message",children:e.message})]})},t):Object(n.jsx)("div",{className:"chat__messages__item",children:Object(n.jsxs)("div",{className:"chat__messages__item__wrapper",children:[Object(n.jsxs)("div",{className:"author",children:[e.uname,":"]}),Object(n.jsx)("div",{className:"message",children:e.message})]})},t)}))]}),Object(n.jsxs)("div",{className:"chat__box",children:[Object(n.jsx)(L.a,{fullWidth:!0,onKeyDown:function(e){"Enter"===e.key&&f()},placeholder:"Your Message Here",label:"Type Your Message",onChange:function(e){return s(e.target.value)},value:a,variant:"outlined"}),Object(n.jsx)("br",{}),Object(n.jsx)(J.a,{fullWidth:!0,className:g.secondary,onClick:f,color:"default",children:"Send Message"})]})]})]})}var X=function(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",component:k,exact:!0}),Object(n.jsx)(l.a,{path:"/login",component:D,exact:!0}),Object(n.jsx)(l.a,{path:"/register",component:K,exact:!0}),Object(n.jsx)(l.a,{path:"/chat",component:Q,exact:!0})]})})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(X,{})}),document.getElementById("root"))},94:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.4f52c45c.chunk.js.map