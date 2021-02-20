(this.webpackJsonpbellybirdsclient=this.webpackJsonpbellybirdsclient||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(10),o=a.n(r),i=(a(97),a(28)),l=a(11);a(98),a(99);function u(){var e=Object(l.f)();return Object(n.jsx)("header",{className:"home__header",children:Object(n.jsx)("div",{className:"home__header__logo",onClick:function(){e.push("/")}})})}a(107);var d=a(14),j=(a(108),a(78)),b=a.n(j),h=a(80),m=a.n(h),O=a(79),p=a.n(O),g=a(73),x=a(35),v=localStorage.getItem("token"),f={email:void 0,username:void 0};v&&v.length>20&&(f=Object(x.a)(v));var w={user:{email:f.email?f.email:"",uname:f.username?f.username:""}},N=Object(g.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=e;return"getUser"===t.type&&(a.user=t.user),a})),_=a(165),y=a(169),k=a(170),S=a(175),C=Object(_.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function E(){var e=Object(l.f)(),t=N.getState(),a=!!t.user.email,s=C(),r=Object(c.useState)(!1),o=Object(d.a)(r,2),i=o[0],u=o[1];return Object(n.jsxs)("nav",{className:"nav",children:[Object(n.jsx)("div",{className:"nav--home",children:Object(n.jsx)(b.a,{fontSize:"large",onClick:function(){a?e.push("/"):e.push("/login")}})}),Object(n.jsx)("div",{className:"nav--chat",children:Object(n.jsx)(p.a,{fontSize:"large",onClick:function(){a?e.push("/chat"):e.push("/login")}})}),Object(n.jsxs)("div",{className:"nav--account",children:[Object(n.jsx)(m.a,{fontSize:"large",onClick:function(){u(!i)}}),Object(n.jsx)("div",{className:i?"nav--account-popup active":"nav--account-popup",children:a?Object(n.jsx)("div",{className:s.root,children:Object(n.jsxs)(y.a,{component:"nav","aria-label":"user login logout",children:[Object(n.jsx)(k.a,{button:!0,children:Object(n.jsx)(S.a,{primary:"Hi "+t.user.uname+"!"})}),Object(n.jsx)(k.a,{button:!0,onClick:function(){window.localStorage.removeItem("token"),N.dispatch({type:"getUser",user:{email:"",uname:""}}),e.push("/")},children:Object(n.jsx)(S.a,{primary:"Logout"})})]})}):Object(n.jsx)("div",{className:s.root,children:Object(n.jsxs)(y.a,{component:"nav","aria-label":"user login logout",children:[Object(n.jsx)(k.a,{button:!0,onClick:function(){e.push("/login")},children:Object(n.jsx)(S.a,{primary:"Login"})}),Object(n.jsx)(k.a,{button:!0,onClick:function(){e.push("/register")},children:Object(n.jsx)(S.a,{primary:"Register"})})]})})})]})]})}function I(){return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)(u,{}),Object(n.jsx)(E,{})]})}a(111);function L(e){return Object(n.jsx)("main",{className:e.class,children:e.children})}function W(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)(I,{}),Object(n.jsx)(L,{children:Object(n.jsx)("div",{className:"home__navigation",children:Object(n.jsx)("h6",{children:"Home Page, Coming soon..."})})})]})}var z=a(21),J=a.n(z),U=a(32),$=(a(113),a(173)),P=a(172),R=Object(_.a)({secondary:{background:"linear-gradient(45deg, #9ca20e 30%, #dacb1c 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"black",height:48,padding:"0 30px"},primary:{background:"linear-gradient(45deg, #101010 30%, #171514 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}}),Y=Object(_.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),A=a(81),H=a.n(A),V=!("localhost"===window.location.hostname)?"".concat(window.location.origin,":1337"):"http://localhost:1337";function Z(e,t){return q.apply(this,arguments)}function q(){return(q=Object(U.a)(J.a.mark((function e(t,a){var n,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("api call request"),n={headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("token")||""}},e.next=4,H.a.post("".concat(V).concat(t),JSON.stringify(a),n);case 4:return c=e.sent,console.log("api call request response",c.data),e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M="/api/register",T="/api/login",B=a(176),D=a(174),K=Object(_.a)((function(e){return Object(B.a)({root:{width:"80%",marginLeft:"8px"}})}));function F(e){var t=e.severity,a=e.text,c=K();switch(t){case"error":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(D.a,{variant:"outlined",severity:"error",children:a})});case"warning":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(D.a,{variant:"outlined",severity:"warning",children:a})});case"info":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(D.a,{variant:"outlined",severity:"info",children:a})});case"success":return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(D.a,{variant:"outlined",severity:"success",children:a})});default:return""}}function G(){var e=R(),t=Y(),a=Object(c.useState)(""),s=Object(d.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),u=Object(d.a)(i,2),j=u[0],b=u[1],h=Object(c.useState)(""),m=Object(d.a)(h,2),O=m[0],p=m[1],g=Object(c.useState)(""),v=Object(d.a)(g,2),f=v[0],w=v[1],_=Object(l.f)();function y(){return(y=Object(U.a)(J.a.mark((function e(){var t,a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(T,{email:r,password:j});case 3:t=e.sent,w(t.status),p(t.message),window.localStorage.setItem("token",t.token),"success"===t.status&&(_.push("/chat"),a=localStorage.getItem("token"),n=Object(x.a)(a),N.dispatch({type:"getUser",user:{email:n.email,uname:n.username}})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),w("error"),p("Unexpected Error occured");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(I,{}),Object(n.jsxs)("div",{className:"login__form",children:[Object(n.jsx)(F,{severity:f,text:O}),Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)($.a,{id:"filled-basic",placeholder:"you@awesome.com",label:"Your Email",value:r,onChange:function(e){return o(e.target.value)},variant:"outlined"}),Object(n.jsx)($.a,{id:"filled-basic",placeholder:"p@$$w0rd",label:"Your Password",value:j,onChange:function(e){return b(e.target.value)},variant:"outlined"}),Object(n.jsx)(P.a,{fullWidth:!0,className:e.secondary,onClick:function(){return y.apply(this,arguments)},color:"default",children:"Login"})]})]})]})}a(133);function Q(){var e=R(),t=Y(),a=Object(c.useState)(""),s=Object(d.a)(a,2),r=s[0],o=s[1],i=Object(c.useState)(""),u=Object(d.a)(i,2),j=u[0],b=u[1],h=Object(c.useState)(""),m=Object(d.a)(h,2),O=m[0],p=m[1],g=Object(c.useState)(""),v=Object(d.a)(g,2),f=v[0],w=v[1],_=Object(c.useState)(""),y=Object(d.a)(_,2),k=y[0],S=y[1],C=Object(l.f)();function E(){return(E=Object(U.a)(J.a.mark((function e(){var t,a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(j)){e.next=5;break}return S("error"),w("Invalid Email Address"),e.abrupt("return",!1);case 5:if(O||!(O.length>7)){e.next=9;break}return S("error"),w("Password should be atleast 8 digits"),e.abrupt("return",!1);case 9:return e.prev=9,e.next=12,Z(M,{uname:r,email:j,password:O});case 12:t=e.sent,console.log("ressss",t),S(t.status),w(t.message),"success"===t.status&&(window.localStorage.setItem("token",t.token),a=window.localStorage.getItem("token"),n=Object(x.a)(a),N.dispatch({type:"getUser",user:{email:n.email,uname:n.username}}),C.push("/chat")),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(9),S("error"),w("Unexpected Error occured");case 23:case"end":return e.stop()}}),e,null,[[9,19]])})))).apply(this,arguments)}return Object(n.jsxs)("div",{className:"register",children:[Object(n.jsx)(I,{}),Object(n.jsxs)("div",{className:"register__form",children:[Object(n.jsx)(F,{severity:k,text:f}),Object(n.jsx)("h2",{children:"Register"}),Object(n.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)($.a,{fullWidth:!0,id:"filled-basic",placeholder:"John123",label:"User Name",value:r,onChange:function(e){return o(e.target.value)},variant:"outlined"}),Object(n.jsx)($.a,{fullWidth:!0,id:"filled-basic",placeholder:"you@awesome.com",label:"Your Email",value:j,onChange:function(e){return b(e.target.value)},variant:"outlined"}),Object(n.jsx)($.a,{fullWidth:!0,id:"filled-basic",placeholder:"p@$$w0rd",label:"Your Password",variant:"outlined",value:O,onChange:function(e){return p(e.target.value)}}),Object(n.jsx)(P.a,{fullWidth:!0,className:e.secondary,onClick:function(){return E.apply(this,arguments)},color:"default",children:"Register"})]})]})]})}var X=a(83),ee=(a(134),a(82)),te=a.n(ee),ae=window.location.hostname+":1338";function ne(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),o=Object(d.a)(r,2),i=o[0],u=o[1],j=Object(c.useState)(null),b=Object(d.a)(j,2),h=b[0],m=b[1],O=Object(c.useState)(),p=Object(d.a)(O,2),g=p[0],x=p[1],v=Object(l.f)(),f=N.getState();function w(){(null===h||void 0===h?void 0:h.readyState)===WebSocket.OPEN&&(h.send(JSON.stringify({message:a,intent:"chat",uname:f.user.uname})),s(""))}return Object(c.useEffect)((function(){console.log("im fired",document.body.scrollHeight),g&&g.scrollIntoView({behavior:"smooth"})})),Object(c.useEffect)((function(){var e=new WebSocket("ws://".concat(ae,"/").concat(localStorage.getItem("token")));return e.addEventListener("open",(function(){e.send(JSON.stringify({intent:"old-messages",count:100}))}),{once:!0}),e.addEventListener("error",(function(){v.replace("/login")})),e.addEventListener("message",(function(e){var t=function(e){try{return JSON.parse(e)}catch(t){return null}}(e.data);t&&(console.log("message",t),"chat"===t.intent?u((function(e){return[].concat(Object(X.a)(e),[t])})):"old-messages"===t.intent&&(console.log("old-messages",t.data),u(t.data.reverse())))})),m(e),function(){e.close()}}),[v]),Object(n.jsxs)("div",{className:"chat",children:[Object(n.jsx)(I,{}),Object(n.jsxs)("div",{className:"chat__wrapper",children:[Object(n.jsxs)("div",{className:"chat__messages",children:[i.map((function(e,t){return e.uname===f.user.uname?Object(n.jsx)("div",{className:"chat__messages__item active",children:Object(n.jsxs)("div",{className:"chat__messages__item__wrapper--active",children:[Object(n.jsxs)("div",{className:"author",children:[e.uname,":"]}),Object(n.jsx)("div",{className:"message",children:e.message})]})},t):Object(n.jsx)("div",{className:"chat__messages__item",children:Object(n.jsxs)("div",{className:"chat__messages__item__wrapper",children:[Object(n.jsxs)("div",{className:"author",children:[e.uname,":"]}),Object(n.jsx)("div",{className:"message",children:e.message})]})},t)})),Object(n.jsx)("div",{style:{float:"left",height:"10px",clear:"both"},ref:function(e){return x(e)}})]}),Object(n.jsxs)("div",{className:"chat__box",children:[Object(n.jsx)($.a,{fullWidth:!0,onKeyDown:function(e){"Enter"===e.key&&w()},placeholder:"Live Chat Here",label:"Type Your Message",onChange:function(e){return s(e.target.value)},value:a,variant:"outlined"}),Object(n.jsx)("div",{className:"chat__box__send",role:"button",children:Object(n.jsx)(te.a,{fontSize:"large",onClick:w})})]})]})]})}var ce=function(){return Object(n.jsx)(i.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",component:W,exact:!0}),Object(n.jsx)(l.a,{path:"/login",component:G,exact:!0}),Object(n.jsx)(l.a,{path:"/register",component:Q,exact:!0}),Object(n.jsx)(l.a,{path:"/chat",component:ne,exact:!0})]})})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ce,{})}),document.getElementById("root"))},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.264337b8.chunk.js.map