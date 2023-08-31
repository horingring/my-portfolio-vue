(function(){"use strict";var e={5670:function(e,t,n){var r=n(9242),o=n(3396);const a={class:"root-wrap"};function i(e,t,n,r,i,c){const s=(0,o.up)("HeaderComponent"),l=(0,o.up)("GnbBox"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(s),(0,o.Wm)(l),(0,o.Wm)(u)])}var c=n(7139);function s(e,t,n,r,a,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",{class:(0,c.C_)(["main-header",{green:i.routeName&&i.routeName.includes("Career"),navy:"ContactMePage"===i.routeName,"project-detail-page":i.isProjectDetailPage}]),style:(0,c.j5)({"background-color":i.isProjectDetailPage&&i.currentProjectDetail()?i.currentProjectDetail().color:null})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.gnbList,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,to:e.path,class:(0,c.C_)({"router-link-exact-active":"CareerPage"===e.name&&"CareerDetailPage"===i.routeName})},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(e.meta.nick),1)])),_:2},1032,["to","class"])))),128))],6)}var l=n(65),u={computed:{...(0,l.rn)("projectStore",["projectList"]),routeName(){return this.$route.name},gnbList(){return this.$router.getRoutes().filter((e=>e.meta.gnbYn))},isProjectDetailPage(){return"CareerDetailPage"===this.routeName}},methods:{currentProjectDetail(){for(let e=0;e<this.projectList.length;e++)if(Number(this.projectList[e].id)===Number(this.$route.params.careerId))return this.projectList[e];return null}}},m=n(89);const d=(0,m.Z)(u,[["render",s]]);var p=d;const f={class:"router-link_wrap"};function g(e,t,n,r,a,i){const s=(0,o.up)("router-link"),l=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["gnb-box_wrap flex-center",{on:e.gnbBoxOn}])},[(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.gnbList,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{key:t,to:e.path,onClick:i.onClickGnbLi},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)(e.meta.nick),1)])),_:2},1032,["to","onClick"])))),128))]),(0,o._)("div",{class:"left_btn_wrap flex-center",onClick:t[0]||(t[0]=(...t)=>e.SET_GNB_BOX_ON&&e.SET_GNB_BOX_ON(...t))},[(0,o.Wm)(l,{icon:["fas","angles-left"]})])],2)}var v={computed:{...(0,l.rn)("commonStore",["gnbBoxOn"]),gnbList(){return this.$router.getRoutes().filter((e=>e.meta.gnbYn))}},methods:{...(0,l.OI)("commonStore",["SET_GNB_BOX_ON"]),onClickGnbLi(){window.scrollTo(0,0),this.SET_GNB_BOX_ON()}}};const h=(0,m.Z)(v,[["render",g]]);var _=h,w={name:"App",components:{HeaderComponent:p,GnbBox:_}};const b=(0,m.Z)(w,[["render",i]]);var k=b,C=n(2483);const x={class:"home-page_wrap"};function L(e,t,n,r,a,i){const c=(0,o.up)("IntroComponent"),s=(0,o.up)("AboutComponent"),l=(0,o.up)("ProjectComponent"),u=(0,o.up)("HomePageNav");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("main",null,[(0,o.Wm)(c),(0,o.Wm)(s),(0,o.Wm)(l)]),(0,o.Wm)(u)])}const y=(0,o._)("span",null,"Let's see",-1),N=(0,o._)("span",null,"Your",-1),D=(0,o._)("span",null,"NewFace!",-1),j=[y,N,D],P={ref:"intro1"},B={ref:"intro2"};function T(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["intro_wrap flex-center",{"background-std_ver":a.backgroundRate}]),ref:"introWrap"},[(0,o._)("div",{class:"btn flex-center",onClick:t[0]||(t[0]=(...e)=>i.onClickIntroBtn&&i.onClickIntroBtn(...e))},j),(0,o._)("span",P,"Developer",512),(0,o._)("span",B,"KH Lee",512)],2)}var O={data(){return{backgroundRate:null}},computed:{routePath(){return this.$route.path}},mounted(){this.calcBackgroundRate(),window.addEventListener("resize",this.calcBackgroundRate),setTimeout((()=>{this.$refs.intro1.classList.add("on"),this.$refs.intro2.classList.add("on")}),200)},beforeUnmount(){window.removeEventListener("resize",this.calcBackgroundRate)},methods:{calcBackgroundRate(){const e=window.innerWidth/window.innerHeight<1.5;this.backgroundRate=e},onClickIntroBtn(){window.scrollTo(0,this.$refs.introWrap.offsetHeight)}}};const H=(0,m.Z)(O,[["render",T]]);var I=H;const $={class:"about_wrap flex-center"},M=(0,o._)("div",{class:"header_area"},[(0,o._)("h1",{class:"flex-center"},"About"),(0,o._)("div",{class:"header_deco"})],-1),S={class:"about_container flex-center"},E=(0,o._)("h2",{class:"flex-center"},"About Me",-1),W={class:"about-me_wrap"},Z=(0,o._)("div",{class:"img_wrap"},null,-1),G=["innerHTML"],Y=(0,o._)("h2",{class:"flex-center"},"Work Style",-1),R={class:"flex-center"},K=["src","alt"],F={class:"work-style_li_wrap"},z=["innerHTML"];function U(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",$,[M,(0,o._)("div",S,[(0,o._)("section",null,[E,(0,o._)("div",W,[Z,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.myFeatrueList,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o._)("h3",null,(0,c.zw)(e.head),1),(0,o._)("p",{innerHTML:e.content},null,8,G)])))),128))])])]),(0,o._)("section",null,[Y,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.workStyleList,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o._)("div",R,[(0,o._)("img",{src:e.img,alt:e.head},null,8,K)]),(0,o._)("div",F,[(0,o._)("h3",null,(0,c.zw)(e.head),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.content,((e,t)=>((0,o.wg)(),(0,o.iD)("p",{key:t,innerHTML:e},null,8,z)))),128))])])))),128))])])])])}var X={data(){return{myFeatrueList:[{head:"성실함",content:"좋은 결과물을 만들기 위해 시간을 아끼지 않습니다."},{head:"꼼꼼함",content:"코드 한 줄이 불러올 사이드이펙트를 방지하기 위해<br /> 꼼꼼히 고민하여 코딩합니다."},{head:"학구열",content:"모르는 기술을 체득하기 위해 꾸준히 공부합니다."}],workStyleList:[{img:n(3851),head:"커뮤니케이션",content:["모호한 요건사항은 대화를 통해 요건정립 후 개발을 진행합니다."]},{img:n(2349),head:"산출물 관리",content:["구두 요건사항의 문서 반영을 요청하여 개발을 진행합니다."]},{img:n(9837),head:"통일성",content:["기존 코드 스타일 분석 후 통일성을 지켜 개발을 진행합니다."]},{img:n(5745),head:"무결성",content:["신규/수정건 개발시 사이드이펙트를 고려하여 개발을 진행합니다.","테스트케이스 작성 및 충분한 테스트를 통해 무결성을 지킵니다."]}]}}};const A=(0,m.Z)(X,[["render",U]]);var V=A;const q={class:"project_wrap flex-center"},J=(0,o._)("div",{class:"header_area"},[(0,o._)("h1",{class:"flex-center"},"Project"),(0,o._)("div",{class:"header_deco"})],-1),Q=(0,o._)("div",{class:"project_container"},null,-1),ee=[J,Q];function te(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",q,ee)}var ne={};const re=(0,m.Z)(ne,[["render",te]]);var oe=re;const ae={class:"flex-center"},ie={class:"flex-center"};function ce(e,t,n,r,a,i){const s=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("nav",{class:(0,c.C_)(["home-page_nav",{fixed:a.navFixed}]),ref:"homePageNav"},[(0,o._)("ul",ae,[(0,o._)("li",ie,[(0,o.Wm)(s,{icon:["fas","bars"],class:(0,c.C_)({on:e.gnbBoxOn}),onClick:e.SET_GNB_BOX_ON},null,8,["class","onClick"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.navLiList,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"flex-center",key:t},[(0,o.Wm)(s,{icon:e.icon,class:(0,c.C_)({on:a.currentNav===e.name}),onClick:t=>i.onClickNavLi(e)},null,8,["icon","class","onClick"])])))),128))])],2)}var se={data(){return{navLiList:[{name:"home",icon:["fas","house-chimney"]},{name:"about",icon:["fas","user-tie"]},{name:"project",icon:["fas","book-bookmark"]}],navFixed:null,currentNav:null}},computed:{...(0,l.rn)("commonStore",["gnbBoxOn"])},mounted(){window.addEventListener("scroll",this.setNavFixed),window.addEventListener("scroll",this.setCurrentNav)},beforeUnmount(){window.removeEventListener("scroll",this.setNavFixed),window.removeEventListener("scroll",this.setCurrentNav)},methods:{...(0,l.OI)("commonStore",["SET_GNB_BOX_ON"]),setNavFixed(){document.documentElement.scrollTop>=this.$refs.homePageNav.offsetHeight?this.navFixed=!0:this.navFixed=!1},setCurrentNav(){document.documentElement.scrollTop<this.$refs.homePageNav.offsetHeight-200?this.currentNav="home":document.documentElement.scrollTop<2*this.$refs.homePageNav.offsetHeight-200?this.currentNav="about":this.currentNav="project"},onClickNavLi(e){"home"===e.name?window.scrollTo(0,0):"about"===e.name?window.scrollTo(0,this.$refs.homePageNav.offsetHeight):"project"===e.name&&window.scrollTo(0,2*this.$refs.homePageNav.offsetHeight)}}};const le=(0,m.Z)(se,[["render",ce]]);var ue=le,me={components:{IntroComponent:I,AboutComponent:V,ProjectComponent:oe,HomePageNav:ue}};const de=(0,m.Z)(me,[["render",L]]);var pe=de;const fe={class:"career-page_wrap"},ge=(0,o._)("h1",{class:"flex-center"},"수행 프로젝트",-1),ve=(0,o._)("div",{class:"dim flex-center"},null,-1),he={class:"dim_p flex-center"};function _e(e,t,n,r,a,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",fe,[ge,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.projectList,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},[(0,o.Wm)(s,{to:`/my-portfolio-vue/career/${e.id}`},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"img_wrap",style:(0,c.j5)({"background-image":`url(${e.mainImg})`})},[ve,(0,o._)("p",he,(0,c.zw)(e.subTitle),1)],4)])),_:2},1032,["to"])])))),128))])])}var we={computed:{...(0,l.rn)("projectStore",["projectList"])}};const be=(0,m.Z)(we,[["render",_e]]);var ke=be;const Ce={class:"career-detail-page_wrap"};function xe(e,t,n,r,a,i){const c=(0,o.up)("CareerLnb");return(0,o.wg)(),(0,o.iD)("div",Ce,[(0,o.Wm)(c),(0,o._)("main",null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(`CareerDetail${i.routeParams.careerId}`)))])])}function Le(e,t,n,r,a,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.projectList,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n},[(0,o.Wm)(s,{to:`/my-portfolio-vue/career/${e.id}`,ref_for:!0,ref:`project_${e.id}`,onMouseover:t=>i.addBackgroundColor(t,e.color),onMouseleave:t[0]||(t[0]=e=>i.removeBackgroundColor(e)),style:(0,c.j5)({"background-color":i.isCurrentClicked(e.id)?e.color:null})},{default:(0,o.w5)((()=>[(0,o.Uk)(" - "+(0,c.zw)(e.subTitle),1)])),_:2},1032,["to","onMouseover","style"])])))),128))])])}var ye={computed:{...(0,l.rn)("projectStore",["projectList"]),routeCareerId(){return this.$route.params.careerId}},watch:{routeCareerId(e){e&&this.scrollToCurrentLnb(e)}},mounted(){this.scrollToCurrentLnb(this.routeCareerId)},methods:{addBackgroundColor(e,t){e.currentTarget.style.backgroundColor=t},removeBackgroundColor(e){e.currentTarget.classList.contains("router-link-exact-active")||(e.currentTarget.style.backgroundColor="")},isCurrentClicked(e){return Number(e)===Number(this.routeCareerId)},scrollToCurrentLnb(e){this.$refs[`project_${e}`][0].$el.scrollIntoView({behavior:"smooth"})}}};const Ne=(0,m.Z)(ye,[["render",Le]]);var De=Ne;function je(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null," My Portfolio_React ")}var Pe={};const Be=(0,m.Z)(Pe,[["render",je]]);var Te=Be;function Oe(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null," 요식업플랫폼 주막 ")}var He={};const Ie=(0,m.Z)(He,[["render",Oe]]);var $e=Ie;function Me(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null," KB 글로벌 인터넷/스마트 뱅킹 ")}var Se={};const Ee=(0,m.Z)(Se,[["render",Me]]);var We=Ee;function Ze(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null," LG U+ 유료구독 플랫폼 유독 ")}var Ge={};const Ye=(0,m.Z)(Ge,[["render",Ze]]);var Re=Ye;function Ke(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null," My Portfolio_Vue ")}var Fe={};const ze=(0,m.Z)(Fe,[["render",Ke]]);var Ue=ze,Xe={components:{CareerLnb:De,CareerDetail0:Te,CareerDetail1:$e,CareerDetail2:We,CareerDetail3:Re,CareerDetail4:Ue},computed:{routeParams(){return this.$route.params}}};const Ae=(0,m.Z)(Xe,[["render",xe]]);var Ve=Ae;const qe={class:"contact-me-page_wrap"};function Je(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",qe,"연락 페이지")}var Qe={};const et=(0,m.Z)(Qe,[["render",Je]]);var tt=et;const nt=[{path:"/my-portfolio-vue/",name:"HomePage",meta:{nick:"Home",gnbYn:!0},component:pe},{path:"/my-portfolio-vue/career",name:"CareerPage",meta:{nick:"Career",gnbYn:!0},component:ke},{path:"/my-portfolio-vue/career/:careerId",name:"CareerDetailPage",component:Ve},{path:"/my-portfolio-vue/contact",name:"ContactMePage",meta:{nick:"Contact Me",gnbYn:!0},component:tt}],rt=(0,C.p7)({history:(0,C.PO)(),routes:nt});var ot=rt;const at={namespaced:!0,state:{gnbBoxOn:!1},getters:{},mutations:{SET_GNB_BOX_ON(e){e.gnbBoxOn=!e.gnbBoxOn}},actions:{}};var it=at;const ct={namespaced:!0,state:{projectList:[{id:4,title:"My Portfolio_Vue",subTitle:"My Portfolio_Vue",mainImg:n(7896),color:"#42b883",from:"2023.08",to:"2023.09"},{id:3,title:"LG U+ 유료구독 플랫폼 유독",subTitle:"LG U+ 유독",mainImg:n(1662),color:"#e6017e",from:"2022.05",to:"2023.08"},{id:2,title:"KB 글로벌 인터넷/스마트 뱅킹",subTitle:"KB 글로벌 뱅킹",mainImg:n(1498),color:"#ffd719",from:"2021.12",to:"2022.05"},{id:1,title:"요식업플랫폼 주막",subTitle:"요식업플랫폼 주막",mainImg:n(8985),color:"#fec562",from:"2021.04",to:"2021.12"},{id:0,title:"My Portfolio_React",subTitle:"My Portfolio_React",mainImg:n(7731),color:"#4a4291",from:"2020.12",to:"2021.03"}]},getters:{},mutations:{},actions:{}};var st=ct;const lt={modules:{commonStore:it,projectStore:st}};var ut=(0,l.MT)(lt),mt=n(3494),dt=n(7749),pt=n(8539),ft=n(8429),gt=n(4551);mt.vI.add(pt.mRB,ft.NCV,gt.vnX),(0,r.ri)(k).use(ut).use(ot).component("font-awesome-icon",dt.GN).mount("#app")},7731:function(e,t,n){e.exports=n.p+"img/my-portfolio-react_main.e0bd69a3.png"},8985:function(e,t,n){e.exports=n.p+"img/joomak_main.3a6b6695.png"},1498:function(e,t,n){e.exports=n.p+"img/kb-global-banking_main.c283a6c2.png"},1662:function(e,t,n){e.exports=n.p+"img/udok_main.f704623e.png"},7896:function(e,t,n){e.exports=n.p+"img/my-portfolio-vue_main.78dc9759.png"},3851:function(e,t,n){e.exports=n.p+"img/free-icon-chat-1650281.15ba2da3.png"},9837:function(e,t,n){e.exports=n.p+"img/free-icon-layers-1659098.0353e1f1.png"},2349:function(e,t,n){e.exports=n.p+"img/free-icon-quote-request-7257807.472b105c.png"},5745:function(e,t,n){e.exports=n.p+"img/free-icon-search-2040496.69bc0a3c.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/my-portfolio-vue/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],s=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkmy_portfolio_vue"]=self["webpackChunkmy_portfolio_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5670)}));r=n.O(r)})();
//# sourceMappingURL=app.900fc66f.js.map