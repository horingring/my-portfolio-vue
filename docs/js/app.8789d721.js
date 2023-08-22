(function(){"use strict";var n={1181:function(n,e,o){var t=o(9242),r=o(3396);const a={class:"root-wrap"};function i(n,e,o,t,i,c){const s=(0,r.up)("HeaderComponent"),u=(0,r.up)("GnbBox"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(s),(0,r.Wm)(u),(0,r.Wm)(l)])}var c=o(7139);function s(n,e,o,t,a,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",{class:(0,c.C_)(["main-header",{green:"/my-portfolio-vue/career"===i.routePath,navy:"/my-portfolio-vue/contact"===i.routePath}])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.$router.getRoutes(),((n,e)=>((0,r.wg)(),(0,r.j4)(s,{key:e,to:n.path},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(n.meta.nick),1)])),_:2},1032,["to"])))),128))],2)}var u={computed:{routePath(){return this.$route.path}}},l=o(89);const m=(0,l.Z)(u,[["render",s]]);var f=m;const v={class:"router-link_wrap"};function d(n,e,o,t,a,i){const s=(0,r.up)("router-link"),u=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",{class:(0,c.C_)(["gnb-box_wrap flex-center",{on:n.gnbBoxOn}])},[(0,r._)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.$router.getRoutes(),((n,e)=>((0,r.wg)(),(0,r.j4)(s,{key:e,to:n.path,onClick:i.onClickGnbLi},{default:(0,r.w5)((()=>[(0,r.Uk)((0,c.zw)(n.meta.nick),1)])),_:2},1032,["to","onClick"])))),128))]),(0,r._)("div",{class:"left_btn_wrap flex-center",onClick:e[0]||(e[0]=(...e)=>n.SET_GNB_BOX_ON&&n.SET_GNB_BOX_ON(...e))},[(0,r.Wm)(u,{icon:["fas","angles-left"]})])],2)}var p=o(65),h={computed:{...(0,p.rn)("commonStore",["gnbBoxOn"])},methods:{...(0,p.OI)("commonStore",["SET_GNB_BOX_ON"]),onClickGnbLi(){window.scrollTo(0,0),this.SET_GNB_BOX_ON()}}};const w=(0,l.Z)(h,[["render",d]]);var g=w,_={name:"App",components:{HeaderComponent:f,GnbBox:g}};const b=(0,l.Z)(_,[["render",i]]);var k=b,C=o(2483);const N={class:"home-page_wrap"};function O(n,e,o,t,a,i){const c=(0,r.up)("IntroComponent"),s=(0,r.up)("AboutComponent"),u=(0,r.up)("ProjectComponent"),l=(0,r.up)("HomePageNav");return(0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("main",null,[(0,r.Wm)(c),(0,r.Wm)(s),(0,r.Wm)(u)]),(0,r.Wm)(l)])}const x=(0,r._)("span",null,"Let's see",-1),B=(0,r._)("span",null,"Your",-1),y=(0,r._)("span",null,"NewFace!",-1),P=[x,B,y],T={ref:"intro1"},L={ref:"intro2"};function E(n,e,o,t,a,i){return(0,r.wg)(),(0,r.iD)("div",{class:(0,c.C_)(["intro_wrap flex-center",{"background-std_ver":a.backgroundRate}]),ref:"introWrap"},[(0,r._)("div",{class:"btn flex-center",onClick:e[0]||(e[0]=(...n)=>i.onClickIntroBtn&&i.onClickIntroBtn(...n))},P),(0,r._)("span",T,"Developer",512),(0,r._)("span",L,"KH Lee",512)],2)}var H={data(){return{backgroundRate:null}},computed:{routePath(){return this.$route.path}},mounted(){this.calcBackgroundRate(),window.addEventListener("resize",this.calcBackgroundRate),setTimeout((()=>{this.$refs.intro1.classList.add("on"),this.$refs.intro2.classList.add("on")}),200)},beforeUnmount(){window.removeEventListener("resize",this.calcBackgroundRate)},methods:{calcBackgroundRate(){const n=window.innerWidth/window.innerHeight<1.5;this.backgroundRate=n},onClickIntroBtn(){window.scrollTo(0,this.$refs.introWrap.offsetHeight)}}};const j=(0,l.Z)(H,[["render",E]]);var D=j;const W={class:"about_wrap flex-center"},G=(0,r._)("div",{class:"about_container"},null,-1),S=[G];function $(n,e,o,t,a,i){return(0,r.wg)(),(0,r.iD)("div",W,S)}var R={};const Z=(0,l.Z)(R,[["render",$]]);var F=Z;const I={class:"project_wrap flex-center"},X=(0,r._)("div",{class:"project_container"},null,-1),z=[X];function K(n,e,o,t,a,i){return(0,r.wg)(),(0,r.iD)("div",I,z)}var M={};const U=(0,l.Z)(M,[["render",K]]);var Y=U;const A={class:"flex-center"},V={class:"flex-center"};function q(n,e,o,t,a,i){const s=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("nav",{class:(0,c.C_)(["home-page_nav",{fixed:a.navFixed}]),ref:"homePageNav"},[(0,r._)("ul",A,[(0,r._)("li",V,[(0,r.Wm)(s,{icon:["fas","bars"],class:(0,c.C_)({on:n.gnbBoxOn}),onClick:n.SET_GNB_BOX_ON},null,8,["class","onClick"])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.navLiList,((n,e)=>((0,r.wg)(),(0,r.iD)("li",{class:"flex-center",key:e},[(0,r.Wm)(s,{icon:n.icon,class:(0,c.C_)({on:a.currentNav===n.name}),onClick:e=>i.onClickNavLi(n)},null,8,["icon","class","onClick"])])))),128))])],2)}var J={data(){return{navLiList:[{name:"home",icon:["fas","house-chimney"]},{name:"about",icon:["fas","user-tie"]},{name:"project",icon:["fas","book-bookmark"]}],navFixed:null,currentNav:null}},computed:{...(0,p.rn)("commonStore",["gnbBoxOn"])},mounted(){window.addEventListener("scroll",this.setNavFixed),window.addEventListener("scroll",this.setCurrentNav)},beforeUnmount(){window.removeEventListener("scroll",this.setNavFixed),window.removeEventListener("scroll",this.setCurrentNav)},methods:{...(0,p.OI)("commonStore",["SET_GNB_BOX_ON"]),setNavFixed(){document.documentElement.scrollTop>=this.$refs.homePageNav.offsetHeight?this.navFixed=!0:this.navFixed=!1},setCurrentNav(){document.documentElement.scrollTop<this.$refs.homePageNav.offsetHeight-200?this.currentNav="home":document.documentElement.scrollTop<2*this.$refs.homePageNav.offsetHeight-200?this.currentNav="about":this.currentNav="project"},onClickNavLi(n){"home"===n.name?window.scrollTo(0,0):"about"===n.name?window.scrollTo(0,this.$refs.homePageNav.offsetHeight):"project"===n.name&&window.scrollTo(0,2*this.$refs.homePageNav.offsetHeight)}}};const Q=(0,l.Z)(J,[["render",q]]);var nn=Q,en={components:{IntroComponent:D,AboutComponent:F,ProjectComponent:Y,HomePageNav:nn}};const on=(0,l.Z)(en,[["render",O]]);var tn=on;const rn={class:"career-page_wrap"};function an(n,e,o,t,a,i){return(0,r.wg)(),(0,r.iD)("div",rn,"커리어 페이지")}var cn={};const sn=(0,l.Z)(cn,[["render",an]]);var un=sn;const ln={class:"contact-me-page_wrap"};function mn(n,e,o,t,a,i){return(0,r.wg)(),(0,r.iD)("div",ln,"연락 페이지")}var fn={};const vn=(0,l.Z)(fn,[["render",mn]]);var dn=vn;const pn=[{path:"/my-portfolio-vue/",name:"HomePage",meta:{nick:"Home"},component:tn},{path:"/my-portfolio-vue/career",name:"CareerPage",meta:{nick:"Career"},component:un},{path:"/my-portfolio-vue/contact",name:"ContactMePage",meta:{nick:"Contact Me"},component:dn}],hn=(0,C.p7)({history:(0,C.PO)(),routes:pn});var wn=hn;const gn={namespaced:!0,state:{gnbBoxOn:!1},getters:{},mutations:{SET_GNB_BOX_ON(n){n.gnbBoxOn=!n.gnbBoxOn}},actions:{}};var _n=gn;const bn={modules:{commonStore:_n}};var kn=(0,p.MT)(bn),Cn=o(3494),Nn=o(7749),On=o(8539),xn=o(8429),Bn=o(4551);Cn.vI.add(On.mRB,xn.NCV,Bn.vnX),(0,t.ri)(k).use(kn).use(wn).component("font-awesome-icon",Nn.GN).mount("#app")}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var a=e[t]={exports:{}};return n[t].call(a.exports,a,a.exports,o),a.exports}o.m=n,function(){var n=[];o.O=function(e,t,r,a){if(!t){var i=1/0;for(l=0;l<n.length;l++){t=n[l][0],r=n[l][1],a=n[l][2];for(var c=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((function(n){return o.O[n](t[s])}))?t.splice(s--,1):(c=!1,a<i&&(i=a));if(c){n.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[t,r,a]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,a,i=t[0],c=t[1],s=t[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var l=s(o)}for(e&&e(t);u<i.length;u++)a=i[u],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(l)},t=self["webpackChunkmy_portfolio_vue"]=self["webpackChunkmy_portfolio_vue"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(1181)}));t=o.O(t)})();
//# sourceMappingURL=app.8789d721.js.map