(this.webpackJsonpclockapp=this.webpackJsonpclockapp||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),u=(n(12),n(1)),l=n.n(u),i=n(2),s=n(4),m=n(3);n(14);var d=function(e){var t=e.hourRatio,n=e.minuteRatio,a=e.secondRatio;return r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"hand hour",style:{transform:"translate(-50%) rotate(".concat(360*t,"deg)")}}),r.a.createElement("div",{className:"hand minute",style:{transform:"translate(-50%) rotate(".concat(360*n,"deg)")}}),r.a.createElement("div",{className:"hand second",style:{transform:"translate(-50%) rotate(".concat(360*a,"deg)")}}),r.a.createElement("div",{className:"number number1"},r.a.createElement("div",null,"1")),r.a.createElement("div",{className:"number number2"},r.a.createElement("div",null,"2")),r.a.createElement("div",{className:"number number3"},r.a.createElement("div",null,"3")),r.a.createElement("div",{className:"number number4"},r.a.createElement("div",null,"4")),r.a.createElement("div",{className:"number number5"},r.a.createElement("div",null,"5")),r.a.createElement("div",{className:"number number6"},r.a.createElement("div",null,"6")),r.a.createElement("div",{className:"number number7"},r.a.createElement("div",null,"7")),r.a.createElement("div",{className:"number number8"},r.a.createElement("div",null,"8")),r.a.createElement("div",{className:"number number9"},r.a.createElement("div",null,"9")),r.a.createElement("div",{className:"number number10"},r.a.createElement("div",null,"10")),r.a.createElement("div",{className:"number number11"},r.a.createElement("div",null,"11")),r.a.createElement("div",{className:"number number12"},r.a.createElement("div",null,"12")))},E="http://worldtimeapi.org/api/timezone/Europe/Moscow",v={secondRatio:0,minuteRatio:0,hourRatio:0};function b(e){return f.apply(this,arguments)}function f(){return(f=Object(m.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200!==(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error(n.status);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t){return h.apply(this,arguments)}function h(){return(h=Object(m.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return a=e.sent,n(new Date(a.datetime)),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){switch(t.type){case"SET_SECOND":return{secondRatio:t.payload};case"SET_MINUTE":return{minuteRatio:t.payload};case"SET_HOUR":return{hourRatio:t.payload};case"SET_MULTIPLE":return Object(s.a)(Object(s.a)({},e),t.payload);default:throw new Error}}var y=function(){var e=Object(a.useReducer)(w,v),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(new Date),u=Object(i.a)(o,2),l=u[0],s=u[1],m=Object(a.useState)(!0),b=Object(i.a)(m,2),f=b[0],h=b[1],y=Object(a.useCallback)((function(){c({type:"SET_SECOND",payload:l.getSeconds()/60}),c({type:"SET_MINUTE",payload:l.getMinutes()/60}),c({type:"SET_MULTIPLE",payload:l.getHours()/12})}),[l]);return Object(a.useEffect)((function(){var e=setInterval((function(){new Promise((function(e){e(p(E,s))})).then(y()).catch((function(t){clearInterval(e),console.err("".concat("Something wrong",": ").concat(t))}))}),1e3);return function(){clearInterval(e)}})),Object(a.useEffect)((function(){new Promise((function(e){setTimeout((function(){return e(p(E,s))}),2e3)})).then((function(e){c({type:"SET_MULTIPLE",payload:{secondRatio:l.getSeconds()/60,minuteRatio:l.getMinutes()/60,hourRatio:l.getHours()/12}})})).finally((function(){return h(!1)})).catch((function(e){return console.err("".concat("Something wrong",": ").concat(e))}))}),[]),r.a.createElement(r.a.Fragment,null,f?"Loading...":r.a.createElement(d,{secondRatio:n.secondRatio,minuteRatio:n.minuteRatio,hourRatio:n.hourRatio}))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.5b8a36a2.chunk.js.map