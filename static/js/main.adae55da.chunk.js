(this.webpackJsonpclockapp=this.webpackJsonpclockapp||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},23:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getErrorMessage",(function(){return O}));var r={};n.r(r),n.d(r,"getTime",(function(){return w})),n.d(r,"getFormat",(function(){return T})),n.d(r,"changeTimeZone",(function(){return S}));var o={};n.r(o),n.d(o,"fetchApi",(function(){return R})),n.d(o,"loadTime",(function(){return _}));var c=n(0),i=n.n(c),u=n(14),s=n.n(u),l=(n(23),n(6)),m=n(2),f=n(4),d=i.a.createContext(null),E=n(1),g="https://worldtimeapi.org/api/timezone/".concat("Europe/Moscow"),h=[1,2,3,4,5,6,7,8,9,10,11,12],b=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],p=["\ud83d\ude0e","\u2728","\ud83e\udd7a","\u2764\ufe0f"," \ud83d\ude02","\ud83d\ude4f","\ud83d\ude0d","\ud83e\udd23","\ud83e\udd70","\ud83d\udd25","\ud83d\ude2d","\ud83d\udc4d"],v={secondRatio:0,minuteRatio:0,hourRatio:0};function O(e){return function(e){if("object"===typeof(t=e)&&null!==t&&"message"in t&&"string"===typeof t.message)return e;var t;try{return new Error(JSON.stringify(e))}catch(n){return new Error(String(e))}}(e).message}function w(e,t){switch(t){case"GET_SECOND":return e.getSeconds()/60;case"GET_MINUTE":return e.getMinutes()/60;case"GET_HOUR":return e.getHours()/12;default:O("Something wrong")}}var T=function(e){switch(e){case"arabic":return h;case"roman":return b;case"emoji":return p;default:return b}},S=function(e,t){return"string"===typeof e?new Date(new Date(e).toLocaleString("en-US",{timeZone:t})):new Date(e.toLocaleString("en-US",{timeZone:t}))},j=n(5),y=n.n(j),I=n(9);function R(e){return N.apply(this,arguments)}function N(){return(N=Object(I.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:O("Request status error: ".concat(n.status));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return k.apply(this,arguments)}function k(){return(k=Object(I.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:return a=e.sent,n(new Date(a.datetime)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C,M,U=Object(E.a)(Object(E.a)(Object(E.a)({},r),a),o);function D(e){return i.a.createElement(d.Provider,{value:e.value},e.children)}function x(){var e=Object(c.useContext)(d);return void 0===e&&U.getErrorMessage("useClockContext must be used within a ClockProvider"),e}!function(e){e.SET_SECOND="SET_SECOND",e.SET_MINUTE="SET_MINUTE",e.SET_HOUR="SET_HOUR"}(C||(C={})),function(e){e.arabic="arabic",e.roman="roman",e.emoji="emoji"}(M||(M={}));var V=function(e){var t=e.hourRatio,n=e.minuteRatio,a=e.secondRatio,r=e.format;return i.a.createElement("div",{className:"clock"},i.a.createElement("div",{className:"hand hour",style:{transform:"translate(-50%) rotate(".concat(360*t,"deg)")}}),i.a.createElement("div",{className:"hand minute",style:{transform:"translate(-50%) rotate(".concat(360*n,"deg)")}}),i.a.createElement("div",{className:"hand second",style:{transform:"translate(-50%) rotate(".concat(360*a,"deg)")}}),function(e){return U.getFormat(e).map((function(e,t){return i.a.createElement("div",{key:e.toString(),className:"number number".concat(t+1)},i.a.createElement("div",null,e))}))}(r))},H=n(30),G=n(3),P=(n(13),n(25),function(e,t){var n=t.type,a=t.payload;switch(n){case"SET_SECOND":return Object(E.a)(Object(E.a)({},e),{},{secondRatio:a});case"SET_MINUTE":return Object(E.a)(Object(E.a)({},e),{},{minuteRatio:a});case"SET_HOUR":return Object(E.a)(Object(E.a)({},e),{},{hourRatio:a});default:throw U.getErrorMessage("Something wrong")}});function F(e){var t=e.format,n=Object(c.useReducer)(P,v),a=Object(m.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(new Date),s=Object(m.a)(u,2),l=s[0],f=s[1],d=x(),E=d.loading,h=d.setLoading,b=Object(H.a)(),p=function(){o({type:C.SET_SECOND,payload:U.getTime(l,"GET_SECOND")}),o({type:C.SET_MINUTE,payload:U.getTime(l,"GET_MINUTE")}),o({type:C.SET_HOUR,payload:U.getTime(l,"GET_HOUR")})},O=Object(c.useCallback)((function(){p()}),[l]);return Object(c.useEffect)((function(){var e=setInterval((function(){b&&new Promise((function(e){e(U.loadTime(g,f))})).then((function(){return O()})).catch((function(t){clearInterval(e),U.getErrorMessage("".concat("Something wrong",": ").concat(t))}))}),1e3);return function(){clearInterval(e)}})),Object(c.useEffect)((function(){new Promise((function(e){setTimeout((function(){return e(U.loadTime(g,f))}),2e3)})).then((function(){return p()})).finally((function(){return h(!1)})).catch((function(e){return U.getErrorMessage("".concat("Something wrong",": ").concat(e))}))}),[]),i.a.createElement(i.a.Fragment,null,E?i.a.createElement(G.a,{baseColor:"#dddbdb"},i.a.createElement(G.b,{height:300,width:300,borderRadius:150})):i.a.createElement(V,{secondRatio:r.secondRatio,minuteRatio:r.minuteRatio,hourRatio:r.hourRatio,format:t}))}F.defaultProps={format:"arabic"};var L=n(7);function X(){var e=Object(l.a)(["\n  height: 1.4em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  font-size: 4em;\n  color: #495057;\n"]);return X=function(){return e},e}var J=L.a.div(X()),Z=function(e){e.initialValue;var t=Object(f.a)(e,["initialValue"]),n=Object(c.useState)(!0),a=Object(m.a)(n,2),r=a[0],o=a[1];return i.a.createElement(D,{value:{loading:r,setLoading:o}},t.children)};function z(){var e=Object(l.a)(["\n  margin: 22vh 0;\n"]);return z=function(){return e},e}Z.defaultProps={initialValue:!1},Z.Clock=F,Z.Label=function(e){var t=x().loading;return i.a.createElement(i.a.Fragment,null,t?i.a.createElement(G.a,{baseColor:"#dddbdb"},i.a.createElement(G.b,{height:60,width:300,style:{marginTop:"0.5rem"}})):i.a.createElement(J,null,e.children))};L.a.div(z());var B=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,null,i.a.createElement(Z.Clock,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.adae55da.chunk.js.map