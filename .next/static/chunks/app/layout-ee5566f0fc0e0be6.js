(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3996:function(e,t,n){Promise.resolve().then(n.bind(n,3792)),Promise.resolve().then(n.t.bind(n,7960,23))},7956:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7437),a=n(2265),s=n(4330),l=n(8131),i=n(5978),c=()=>{let[e,t]=(0,a.useState)(!1),{user:n,signInWithGoogle:r}=(0,s.a)();return(0,a.useEffect)(()=>{(async()=>{if(n){let e=(0,i.JU)(l.db,"users",n.uid);t((await (0,i.QT)(e)).exists())}})()},[n]),e},o=n(7648);function d(){let{user:e,signInWithGoogle:t}=(0,s.a)(),n=c();return(0,r.jsx)("div",{className:"md:flex align-middle justify-center lg:justify-start",children:e?n?(0,r.jsx)("button",{className:"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",onClick:()=>alert("تم إرسال بياناتك بالفعل إلى المدرب!"),children:"تواصل مع الماستر"}):(0,r.jsx)(o.default,{className:"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",href:"/registration",children:"تواصل مع الماستر"}):(0,r.jsx)("button",{className:"text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6",onClick:t,children:"سجل للتواصل"})})}},3792:function(e,t,n){"use strict";n.d(t,{default:function(){return g}});var r=n(7437),a=n(6262),s=n(7648),l=n(2265),i=n(4355),c=n(7165),o=n(3145),d=e=>{let{children:t,isOpen:n,setIsOpen:a}=e;return(0,r.jsxs)("main",{className:" fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "+(n?" transition-opacity opacity-100 duration-500 translate-x-0  ":" transition-all delay-500 opacity-0 -translate-x-full  "),children:[(0,r.jsx)("section",{className:"w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform "+(n?"translate-x-0":"-translate-x-full"),children:(0,r.jsxs)("article",{className:"relative w-340px max-w-lg pb-10 flex flex-col space-y-6 h-full",children:[(0,r.jsxs)("header",{className:"px-4 py-4 flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-shrink-0 items-center border-right",children:[(0,r.jsx)(o.default,{src:"/images/Logo/icon.png",alt:"logo",width:36,height:36}),(0,r.jsx)(s.default,{href:"/",className:"text-2xl font-semibold text-black ml-4",children:"اسم الموقع."})]}),(0,r.jsx)(c.Z,{className:"block h-6 w-6",onClick:()=>{a(!1)}})]}),(0,r.jsx)("div",{onClick:()=>{a(!1)},children:t})]})}),(0,r.jsx)("section",{className:"w-screen h-full cursor-pointer ",onClick:()=>{a(!1)}})]})},m=n(7956);let u=[{name:"المقدمة",href:"#home-section",current:!1},{name:"مزايا التدريب",href:"#about-section",current:!1},{name:"طريقة التدريب",href:"#cook-section",current:!1},{name:"معرض الصور",href:"#gallery-section",current:!1}];var h=()=>(0,r.jsx)("div",{className:"rounded-md max-w-sm w-full mx-auto",children:(0,r.jsx)("div",{className:"flex-1 space-y-4 py-1",children:(0,r.jsx)("div",{className:"sm:block",children:(0,r.jsxs)("div",{className:"space-y-1 px-5 pt-2 pb-3",children:[u.map(e=>(0,r.jsx)(s.default,{href:e.href,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(e.current?"bg-gray-900 text-purple":"text-black hover:bg-gray-700 hover:text-purple","block  py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)),(0,r.jsx)("br",{}),(0,r.jsx)(m.Z,{})]})})})}),x=n(4330);let f=[{name:"المقدمة",href:"#home-section",current:!1},{name:"مزايا التدريب",href:"#about-section",current:!1},{name:"طريقة التدريب",href:"#cook-section",current:!1},{name:"اراء المتدربين",href:"#expert-section",current:!1},{name:"معرض الصور",href:"#gallery-section",current:!1}];var p=()=>{let[e,t]=l.useState(!1),{user:n,signInWithGoogle:c}=(0,x.a)();return(0,r.jsx)(a.pJ,{as:"nav",className:"navbar",children:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mx-auto max-w-7xl p-3 md:p-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-12 sm:h-20 items-center",children:[(0,r.jsxs)("div",{className:"flex flex-1 items-center sm:justify-between",children:[(0,r.jsxs)("div",{className:"flex sm:hidden flex-shrink-0 items-center border-right",children:[(0,r.jsx)(o.default,{src:"/images/Logo/icon.png",alt:"logo",width:36,height:36}),(0,r.jsx)(s.default,{href:"/",className:"text-2xl font-semibold text-black ml-4",children:"اسم الموقع."})]}),(0,r.jsxs)("div",{className:"hidden sm:flex flex-shrink-0 items-center border-right",children:[(0,r.jsx)(o.default,{src:"/images/Logo/icon.png",alt:"logo",width:56,height:56}),(0,r.jsx)(s.default,{href:"/",className:"text-2xl font-semibold text-black ml-4",children:"أسم الموقع."})]}),(0,r.jsx)("div",{className:"hidden lg:flex items-center border-right ",children:(0,r.jsx)("div",{className:"flex justify-end space-x-4",children:f.map(e=>(0,r.jsx)(s.default,{href:e.href,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(e.current?"bg-black":"navlinks hover:opacity-100","px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links"),"aria-current":e.href?"page":void 0,children:e.name},e.name))})}),(0,r.jsx)("div",{className:"ml-24",children:n?(0,r.jsx)("img",{src:n.photoURL||"",alt:"user",className:"rounded-full w-10 h-10"}):(0,r.jsx)("a",{onClick:c,className:"cursor-pointer",children:"تسجيل الدخول"})})]}),(0,r.jsx)("div",{className:"block lg:hidden",children:(0,r.jsx)(i.Z,{className:"block h-6 w-6","aria-hidden":"true",onClick:()=>t(!0)})}),(0,r.jsx)(d,{isOpen:e,setIsOpen:t,children:(0,r.jsx)(h,{})})]})})})})},g=()=>((0,l.useEffect)(()=>{let e;let t=()=>{document.documentElement.dataset.scroll=window.scrollY.toString()};document.addEventListener("scroll",function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>{t(...r)})},{passive:!0}),t()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p,{})}))},4330:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var r=n(2265),a=n(8131),s=n(4752);function l(){let[e,t]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let e=a.I8.onAuthStateChanged(e=>{t(e)});return()=>e()},[]),{user:e,signInWithGoogle:async()=>{try{await (0,s.rh)(a.I8,a.Vv)}catch(e){console.error("Error signing in:",e)}}}}},8131:function(e,t,n){"use strict";n.d(t,{I8:function(){return i},Vv:function(){return o},db:function(){return c}});var r=n(738),a=n(4752),s=n(5978);let l=(0,r.ZF)({apiKey:"AIzaSyBorC9kXfGX6zQY4NL7ScXakibEXb7S06g",authDomain:"master-mohammed.firebaseapp.com",projectId:"master-mohammed",storageBucket:"master-mohammed.appspot.com",messagingSenderId:"224950210262",appId:"1:224950210262:web:82916d4b790282528fc377",measurementId:"G-KKWHJP51LM"}),i=(0,a.v0)(l),c=(0,s.ad)(l),o=new a.hJ},7960:function(){}},function(e){e.O(0,[770,358,387,434,726,824,971,117,744],function(){return e(e.s=3996)}),_N_E=e.O()}]);