(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4770:e=>{"use strict";e.exports=require("crypto")},665:e=>{"use strict";e.exports=require("dns")},7702:e=>{"use strict";e.exports=require("events")},2048:e=>{"use strict";e.exports=require("fs")},2615:e=>{"use strict";e.exports=require("http")},2694:e=>{"use strict";e.exports=require("http2")},8216:e=>{"use strict";e.exports=require("net")},9801:e=>{"use strict";e.exports=require("os")},5315:e=>{"use strict";e.exports=require("path")},5816:e=>{"use strict";e.exports=require("process")},6162:e=>{"use strict";e.exports=require("stream")},2452:e=>{"use strict";e.exports=require("tls")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},1568:e=>{"use strict";e.exports=require("zlib")},7094:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(9333),r(996),r(5085);var s=r(170),n=r(5002),a=r(3876),i=r.n(a),l=r(6299),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5085)),"/home/mohammed/web/next/master_mohammed/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}],d=[],u="/_not-found/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9494:(e,t,r)=>{Promise.resolve().then(r.bind(r,4193))},4542:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},7428:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(7247),n=r(8964),a=r(8218),i=r(5400),l=r(203);let o=()=>{let[e,t]=(0,n.useState)(!1),{user:r,signInWithGoogle:s}=(0,a.a)();return(0,n.useEffect)(()=>{(async()=>{if(r){let e=(0,l.JU)(i.db,"users",r.uid);t((await (0,l.QT)(e)).exists())}})()},[r]),e};var c=r(9906);function d(){let{user:e,signInWithGoogle:t}=(0,a.a)(),r=o();return s.jsx("div",{className:"md:flex align-middle justify-center lg:justify-start",children:e?r?s.jsx("button",{className:"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",onClick:()=>alert("تم إرسال بياناتك بالفعل إلى المدرب!"),children:"تواصل مع الماستر"}):s.jsx(c.default,{className:"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",href:"/registration",children:"تواصل مع الماستر"}):s.jsx("button",{className:"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",onClick:t,children:"سجل للتواصل"})})}},4193:(e,t,r)=>{"use strict";r.d(t,{default:()=>b});var s=r(7247),n=r(5462),a=r(9906),i=r(8964),l=r.n(i),o=r(6351),c=r(2776),d=r(4597);let u=({children:e,isOpen:t,setIsOpen:r})=>(0,s.jsxs)("main",{className:" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "+(t?" transition-opacity opacity-100 duration-500 translate-x-0  ":" transition-all delay-500 opacity-0 -translate-x-full  "),children:[s.jsx("section",{className:"w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform "+(t?"translate-x-0":"-translate-x-full"),children:(0,s.jsxs)("article",{className:"relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full",children:[(0,s.jsxs)("header",{className:"px-4 py-4 flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-shrink-0 items-center border-right",children:[s.jsx(d.default,{src:"/images/Logo/icon.png",alt:"logo",width:36,height:36}),s.jsx(a.default,{href:"/",className:"text-2xl font-semibold text-black ml-4",children:"اسم الموقع."})]}),s.jsx(c.Z,{className:"block h-6 w-6",onClick:()=>{r(!1)}})]}),s.jsx("div",{onClick:()=>{r(!1)},children:e})]})}),s.jsx("section",{className:"w-screen h-full cursor-pointer ",onClick:()=>{r(!1)}})]});var m=r(7428);let x=[{name:"المقدمة",href:"#home-section",current:!1},{name:"مزايا التدريب",href:"#about-section",current:!1},{name:"طريقة التدريب",href:"#cook-section",current:!1},{name:"معرض الصور",href:"#gallery-section",current:!1}],f=()=>s.jsx("div",{className:"rounded-md max-w-sm w-full mx-auto",children:s.jsx("div",{className:"flex-1 space-y-4 py-1",children:s.jsx("div",{className:"sm:block",children:(0,s.jsxs)("div",{className:"space-y-1 px-5 pt-2 pb-3",children:[x.map(e=>s.jsx(a.default,{href:e.href,className:function(...e){return e.filter(Boolean).join(" ")}(e.current?"bg-gray-900 text-purple":"text-black hover:bg-gray-700 hover:text-purple","block  py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)),s.jsx("br",{}),s.jsx(m.Z,{})]})})})});var p=r(8218);let h=[{name:"المقدمة",href:"#home-section",current:!1},{name:"مزايا التدريب",href:"#about-section",current:!1},{name:"طريقة التدريب",href:"#cook-section",current:!1},{name:"اراء المتدربين",href:"#expert-section",current:!1},{name:"معرض الصور",href:"#gallery-section",current:!1}],g=()=>{let[e,t]=l().useState(!1),{user:r,signInWithGoogle:i}=(0,p.a)();return s.jsx(n.pJ,{as:"nav",className:"navbar",children:s.jsx(s.Fragment,{children:s.jsx("div",{className:"mx-auto max-w-7xl p-3 md:p-6 lg:px-8",children:(0,s.jsxs)("div",{className:"relative flex h-12 sm:h-20 items-center",children:[(0,s.jsxs)("div",{className:"flex flex-1 items-center sm:justify-between",children:[(0,s.jsxs)("div",{className:"flex sm:hidden flex-shrink-0 items-center border-right",children:[s.jsx(d.default,{src:"/images/Logo/icon.png",alt:"logo",width:36,height:36}),s.jsx(a.default,{href:"/",className:"text-2xl font-semibold text-black ml-4",children:"اسم الموقع."})]}),(0,s.jsxs)("div",{className:"hidden sm:flex flex-shrink-0 items-center border-right",children:[s.jsx(d.default,{src:"/images/Logo/icon.png",alt:"logo",width:56,height:56}),s.jsx(a.default,{href:"/",className:"text-2xl font-semibold text-black ml-4",children:"أسم الموقع."})]}),s.jsx("div",{className:"hidden lg:flex items-center border-right ",children:s.jsx("div",{className:"flex justify-end space-x-4",children:h.map(e=>s.jsx(a.default,{href:e.href,className:function(...e){return e.filter(Boolean).join(" ")}(e.current?"bg-black":"navlinks hover:opacity-100","px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links"),"aria-current":e.href?"page":void 0,children:e.name},e.name))})}),s.jsx("div",{className:"ml-24",children:r?s.jsx("img",{src:r.photoURL||"",alt:"user",className:"rounded-full w-10 h-10"}):s.jsx("a",{onClick:i,className:"cursor-pointer",children:"تسجيل الدخول"})})]}),s.jsx("div",{className:"block lg:hidden",children:s.jsx(o.Z,{className:"block h-6 w-6","aria-hidden":"true",onClick:()=>t(!0)})}),s.jsx(u,{isOpen:e,setIsOpen:t,children:s.jsx(f,{})})]})})})})},b=()=>((0,i.useEffect)(()=>{let e=()=>{document.documentElement.dataset.scroll=window.scrollY.toString()};document.addEventListener("scroll",(e=>{let t;return(...r)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...r)})}})(e),{passive:!0}),e()},[]),s.jsx(s.Fragment,{children:s.jsx(g,{})}))},8218:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var s=r(8964),n=r(5400),a=r(3325);function i(){let[e,t]=(0,s.useState)(null);return{user:e,signInWithGoogle:async()=>{try{await (0,a.rh)(n.I8,n.Vv)}catch(e){console.error("Error signing in:",e)}}}}},5400:(e,t,r)=>{"use strict";r.d(t,{I8:()=>l,Vv:()=>c,db:()=>o});var s=r(8132),n=r(3325),a=r(203);let i=(0,s.ZF)({apiKey:"AIzaSyBorC9kXfGX6zQY4NL7ScXakibEXb7S06g",authDomain:"master-mohammed.firebaseapp.com",projectId:"master-mohammed",storageBucket:"master-mohammed.appspot.com",messagingSenderId:"224950210262",appId:"1:224950210262:web:82916d4b790282528fc377",measurementId:"G-KKWHJP51LM"}),l=(0,n.v0)(i),o=(0,a.ad)(i),c=new n.hJ},5085:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>a});var s=r(2051);r(7272);let n=(0,r(5347).createProxy)(String.raw`/home/mohammed/web/next/master_mohammed/app/components/Navbar/index.tsx#default`),a={title:"Master Mohammed",description:"ماستر محمد عطية خبير التشي كونغ"};function i({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{children:[s.jsx(n,{}),e]})})}},6868:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return n},notFound:function(){return s}});let r="NEXT_NOT_FOUND";function s(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9333:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return n},default:function(){return a}});let s=r(6868),n="next/dist/client/components/parallel-route-default.js";function a(){(0,s.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[379,105],()=>r(7094));module.exports=s})();