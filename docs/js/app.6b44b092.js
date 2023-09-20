(function(){"use strict";var e={7627:function(e,n,t){var o=t(9242),i=t(3396);const r={class:"root-wrap"};function l(e,n,t,o,l,a){const c=(0,i.up)("HeaderComponent"),s=(0,i.up)("GnbBox"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(c),(0,i.Wm)(s),(0,i.Wm)(u)])}var a=t(7139);function c(e,n,t,o,r,l){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",{class:(0,a.C_)(["main-header",{green:l.routeName&&l.routeName.includes("Career"),navy:"ContactMePage"===l.routeName,"project-detail-page":l.isProjectDetailPage}]),style:(0,a.j5)({"background-color":l.isProjectDetailPage&&l.currentProjectDetail()?l.currentProjectDetail().color:null})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.gnbList,((e,n)=>((0,i.wg)(),(0,i.j4)(c,{key:n,to:e.path,class:(0,a.C_)({"router-link-exact-active":"CareerPage"===e.name&&"CareerDetailPage"===l.routeName})},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.meta.nick),1)])),_:2},1032,["to","class"])))),128))],6)}var s=t(65),u={computed:{...(0,s.rn)("projectStore",["projectList"]),routeName(){return this.$route.name},gnbList(){return this.$router.getRoutes().filter((e=>e.meta.gnbYn))},isProjectDetailPage(){return"CareerDetailPage"===this.routeName}},methods:{currentProjectDetail(){for(let e=0;e<this.projectList.length;e++)if(Number(this.projectList[e].id)===Number(this.$route.params.careerId))return this.projectList[e];return null}}},p=t(89);const d=(0,p.Z)(u,[["render",c]]);var m=d;const g={class:"router-link_wrap"};function h(e,n,t,o,r,l){const c=(0,i.up)("router-link"),s=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(["gnb-box_wrap flex-center",{on:e.gnbBoxOn}])},[(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.gnbList,((e,n)=>((0,i.wg)(),(0,i.j4)(c,{key:n,to:e.path,onClick:l.onClickGnbLi},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(e.meta.nick),1)])),_:2},1032,["to","onClick"])))),128))]),(0,i._)("div",{class:"left_btn_wrap flex-center",onClick:n[0]||(n[0]=(...n)=>e.SET_GNB_BOX_ON&&e.SET_GNB_BOX_ON(...n))},[(0,i.Wm)(s,{icon:["fas","angles-left"]})])],2)}var f={computed:{...(0,s.rn)("commonStore",["gnbBoxOn"]),gnbList(){return this.$router.getRoutes().filter((e=>e.meta.gnbYn))}},methods:{...(0,s.OI)("commonStore",["SET_GNB_BOX_ON"]),onClickGnbLi(){window.scrollTo(0,0),this.SET_GNB_BOX_ON()}}};const _=(0,p.Z)(f,[["render",h]]);var v=_,k={name:"App",components:{HeaderComponent:m,GnbBox:v}};const b=(0,p.Z)(k,[["render",l]]);var w=b,C=t(2483);const j={class:"home-page_wrap"};function x(e,n,t,o,r,l){const a=(0,i.up)("IntroComponent"),c=(0,i.up)("AboutComponent"),s=(0,i.up)("ProjectComponent"),u=(0,i.up)("HomePageNav");return(0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("main",null,[(0,i.Wm)(a),(0,i.Wm)(c),(0,i.Wm)(s)]),(0,i.Wm)(u)])}const D=(0,i._)("span",null,"Let's see",-1),B=(0,i._)("span",null,"Your",-1),P=(0,i._)("span",null,"NewFace!",-1),O=[D,B,P],y={ref:"intro1"},L={ref:"intro2"};function N(e,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(["intro_wrap flex-center",{"background-std_ver":r.backgroundRate}]),ref:"introWrap"},[(0,i._)("div",{class:"btn flex-center",onClick:n[0]||(n[0]=(...e)=>l.onClickIntroBtn&&l.onClickIntroBtn(...e))},O),(0,i._)("span",y,"Developer",512),(0,i._)("span",L,"KH Lee",512)],2)}var T={data(){return{backgroundRate:null}},computed:{routePath(){return this.$route.path}},mounted(){this.calcBackgroundRate(),window.addEventListener("resize",this.calcBackgroundRate),setTimeout((()=>{this.$refs.intro1.classList.add("on"),this.$refs.intro2.classList.add("on")}),200)},beforeUnmount(){window.removeEventListener("resize",this.calcBackgroundRate)},methods:{calcBackgroundRate(){const e=window.innerWidth/window.innerHeight<1.5;this.backgroundRate=e},onClickIntroBtn(){window.scrollTo(0,this.$refs.introWrap.offsetHeight)}}};const S=(0,p.Z)(T,[["render",N]]);var H=S;const E={class:"about_wrap flex-center"},I=(0,i._)("div",{class:"header_area"},[(0,i._)("h1",{class:"flex-center"},"About"),(0,i._)("div",{class:"header_deco"})],-1),F={class:"about_container flex-center"},M=(0,i._)("h2",{class:"flex-center"},"About Me",-1),G={class:"about-me_wrap"},W=(0,i._)("div",{class:"img_wrap"},null,-1),A=["innerHTML"],$=(0,i._)("h2",{class:"flex-center"},"Work Style",-1),Z={class:"flex-center"},J=["src","alt"],R={class:"work-style_li_wrap"},z=["innerHTML"];function K(e,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",E,[I,(0,i._)("div",F,[(0,i._)("section",null,[M,(0,i._)("div",G,[W,(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.myFeatrueList,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n},[(0,i._)("h3",null,(0,a.zw)(e.head),1),(0,i._)("p",{innerHTML:e.content},null,8,A)])))),128))])])]),(0,i._)("section",null,[$,(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.workStyleList,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n},[(0,i._)("div",Z,[(0,i._)("img",{src:e.img,alt:e.head},null,8,J)]),(0,i._)("div",R,[(0,i._)("h3",null,(0,a.zw)(e.head),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.content,((e,n)=>((0,i.wg)(),(0,i.iD)("p",{key:n,innerHTML:e},null,8,z)))),128))])])))),128))])])])])}var U={data(){return{myFeatrueList:[{head:"성실함",content:"좋은 결과물을 만들기 위해 시간을 아끼지 않습니다."},{head:"꼼꼼함",content:"코드 한 줄이 불러올 사이드이펙트를 방지하기 위해<br /> 꼼꼼히 고민하여 코딩합니다."},{head:"학구열",content:"모르는 기술을 체득하기 위해 꾸준히 공부합니다."}],workStyleList:[{img:t(3851),head:"커뮤니케이션",content:["모호한 요건사항은 대화를 통해 요건정립 후 개발을 진행합니다."]},{img:t(2349),head:"산출물 관리",content:["구두 요건사항의 문서 반영을 요청하여 개발을 진행합니다."]},{img:t(9837),head:"통일성",content:["기존 코드 스타일 분석 후 통일성을 지켜 개발을 진행합니다."]},{img:t(5745),head:"무결성",content:["신규/수정건 개발시 사이드이펙트를 고려하여 개발을 진행합니다.","테스트케이스 작성 및 충분한 테스트를 통해 무결성을 지킵니다."]}]}}};const V=(0,p.Z)(U,[["render",K]]);var Y=V;const X={class:"project_wrap flex-center"},q=(0,i._)("div",{class:"header_area"},[(0,i._)("h1",{class:"flex-center"},"Project"),(0,i._)("div",{class:"header_deco"})],-1),Q=(0,i._)("div",{class:"project_container"},null,-1),ee=[q,Q];function ne(e,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",X,ee)}var te={};const oe=(0,p.Z)(te,[["render",ne]]);var ie=oe;const re={class:"flex-center"},le={class:"flex-center"};function ae(e,n,t,o,r,l){const c=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("nav",{class:(0,a.C_)(["home-page_nav",{fixed:r.navFixed}]),ref:"homePageNav"},[(0,i._)("ul",re,[(0,i._)("li",le,[(0,i.Wm)(c,{icon:["fas","bars"],class:(0,a.C_)({on:e.gnbBoxOn}),onClick:e.SET_GNB_BOX_ON},null,8,["class","onClick"])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.navLiList,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{class:"flex-center",key:n},[(0,i.Wm)(c,{icon:e.icon,class:(0,a.C_)({on:r.currentNav===e.name}),onClick:n=>l.onClickNavLi(e)},null,8,["icon","class","onClick"])])))),128))])],2)}var ce={data(){return{navLiList:[{name:"home",icon:["fas","house-chimney"]},{name:"about",icon:["fas","user-tie"]},{name:"project",icon:["fas","book-bookmark"]}],navFixed:null,currentNav:null}},computed:{...(0,s.rn)("commonStore",["gnbBoxOn"])},mounted(){window.addEventListener("scroll",this.setNavFixed),window.addEventListener("scroll",this.setCurrentNav)},beforeUnmount(){window.removeEventListener("scroll",this.setNavFixed),window.removeEventListener("scroll",this.setCurrentNav)},methods:{...(0,s.OI)("commonStore",["SET_GNB_BOX_ON"]),setNavFixed(){document.documentElement.scrollTop>=this.$refs.homePageNav.offsetHeight?this.navFixed=!0:this.navFixed=!1},setCurrentNav(){document.documentElement.scrollTop<this.$refs.homePageNav.offsetHeight-200?this.currentNav="home":document.documentElement.scrollTop<2*this.$refs.homePageNav.offsetHeight-200?this.currentNav="about":this.currentNav="project"},onClickNavLi(e){"home"===e.name?window.scrollTo(0,0):"about"===e.name?window.scrollTo(0,this.$refs.homePageNav.offsetHeight):"project"===e.name&&window.scrollTo(0,2*this.$refs.homePageNav.offsetHeight)}}};const se=(0,p.Z)(ce,[["render",ae]]);var ue=se,pe={components:{IntroComponent:H,AboutComponent:Y,ProjectComponent:ie,HomePageNav:ue}};const de=(0,p.Z)(pe,[["render",x]]);var me=de;const ge={class:"career-page_wrap"},he=(0,i._)("h1",{class:"flex-center"},"수행 프로젝트",-1),fe=(0,i._)("div",{class:"dim flex-center"},null,-1),_e={class:"dim_p flex-center"};function ve(e,n,t,o,r,l){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",ge,[he,(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.projectList,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n},[(0,i.Wm)(c,{to:`/my-portfolio-vue/career/${e.id}`},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"img_wrap",style:(0,a.j5)({"background-image":`url(${e.mainImg})`})},[fe,(0,i._)("p",_e,(0,a.zw)(e.subTitle),1)],4)])),_:2},1032,["to"])])))),128))])])}var ke={computed:{...(0,s.rn)("projectStore",["projectList"])}};const be=(0,p.Z)(ke,[["render",ve]]);var we=be;const Ce={class:"career-detail-page_wrap"};function je(e,n,t,o,r,l){const a=(0,i.up)("CareerLnb");return(0,i.wg)(),(0,i.iD)("div",Ce,[(0,i.Wm)(a),(0,i._)("main",null,[((0,i.wg)(),(0,i.j4)((0,i.LL)(`CareerDetail${l.routeParams.careerId}`)))])])}function xe(e,n,t,o,r,l){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",null,[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.projectList,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t},[(0,i.Wm)(c,{to:`/my-portfolio-vue/career/${e.id}`,ref_for:!0,ref:`project_${e.id}`,onMouseover:n=>l.addBackgroundColor(n,e.color),onMouseleave:n[0]||(n[0]=e=>l.removeBackgroundColor(e)),style:(0,a.j5)({"background-color":l.isCurrentClicked(e.id)?e.color:null})},{default:(0,i.w5)((()=>[(0,i.Uk)(" - "+(0,a.zw)(e.subTitle),1)])),_:2},1032,["to","onMouseover","style"])])))),128))])])}var De={computed:{...(0,s.rn)("projectStore",["projectList"]),routeCareerId(){return this.$route.params.careerId}},watch:{routeCareerId(e){e&&this.scrollToCurrentLnb(e)}},mounted(){this.scrollToCurrentLnb(this.routeCareerId)},methods:{addBackgroundColor(e,n){e.currentTarget.style.backgroundColor=n},removeBackgroundColor(e){e.currentTarget.classList.contains("router-link-exact-active")||(e.currentTarget.style.backgroundColor="")},isCurrentClicked(e){return Number(e)===Number(this.routeCareerId)},scrollToCurrentLnb(e){this.$refs[`project_${e}`][0].$el.scrollIntoView({behavior:"smooth"})}}};const Be=(0,p.Z)(De,[["render",xe]]);var Pe=Be;const Oe={class:"career-detail-page_content content_0"},ye=(0,i.uE)('<main><section><h2>🛠️ Used Tech &amp; Tool</h2><ul><li>기획 &amp; 디자인 : Kakao Oven</li><li>FrontEnd : React.js, Javascript, Sass, VSCode</li><li>버전관리 : Git, GitHub, GitKraken</li><li>배포관리 : GitHub Actions</li></ul></section><section><h2>📖 개요</h2><ul><li>개요 : 저와 저의 작업물 및 커리어를 소개하는 웹 포트폴리오 사이트를 React.js로 구현한 프로젝트입니다.</li><li>기능 : 자기소개, 사용기술 소개, 수행 프로젝트 소개, 메일 및 연락처 안내</li></ul></section><section><h2>🔖 작업사항</h2><ul><li><h3>FrontEnd</h3><ul><li>- 인트로</li><li>- 나의 정보</li><li>- 기술 &amp; 프로젝트</li><li>- Contact Me</li></ul></li></ul></section><section class="meaning_section"><h2>✨ Meaning</h2><ul><li><h3>실전 프로젝트 :</h3><p>     그동안 공부한 이론적인 내용을 실전 감각에 적용하기 위해, 강의를 들으며 따라 치는 코딩을 하기도 하였고, 기존에 있는 사이트를 보고 그와 흡사한 사이트를 만드는 클론 코딩의 방식으로 공부해 왔습니다. 이번에는 이렇게 따라가는 방식이 아닌, 배운 기술을 활용해 직접 개발해보며 완성된 나의 프로젝트를 만들고 싶었습니다. </p><p>     먼저 목업을 만들고, 이에 맞게 개발해 나갔습니다. 직접 진행하는 개발의 과정에서 다양한 점을 느낄 수 있었습니다. 생각보다 세세한 부분까지 모두 신경써야한다는 점, 한 부분의 개발이 다른 부분에 영향을 끼칠 수 있다는 점, 스크롤 화면 이동 등과 같은 작업에서 정확한 계산이 필요하며 계산식에 대해 잘 이해하고 있어야 한다는 점 등이 그것이었습니다. 어쨌든 가장 최우선으로 여겼던 부분은 내가 구상한 화면을 정확하게 만들고, 원하는 기능을 구현해내는 것이었으므로, 이를 위해 내가 배운 지식을 바탕으로 고민하고, 모르거나 막히는 부분에 대한 해결책을 찾아내 소스에 반영하는 과정의 연속이었습니다. 어떻게든 원하는 화면과 기능을 구현해 내었으나, 구현에 초점을 두다보니 어느 시점부터는 구조적인 부분에서 아쉬움이 보이거나, 특정한 규칙을 공통적으로 적용했으면 좋았을걸 하는 아쉬운 부분들이 뒤늦게나마 보이게 되었습니다. 이를 고치고 싶었으나 이러한 부분들은 개발 초기에 설정해 두지 않으면 바로잡기가 어렵다는 것을 느끼게 되었습니다. 그래서 앞으로는 개발을 진행하기에 앞서 안정된 구조나 규칙을 정립하는 것이 좋을 것 같다는 생각을 하게 되었습니다. </p></li></ul></section></main>',1);function Le(e,n,t,o,r,l){const a=(0,i.up)("CareerDetailHeader");return(0,i.wg)(),(0,i.iD)("div",Oe,[(0,i.Wm)(a,{period:"3"}),ye])}const Ne=["href"];function Te(e,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("header",null,[(0,i._)("h1",null,(0,a.zw)(e.currentProject.title),1),(0,i._)("span",null,(0,a.zw)(e.currentProject.from)+" ~ "+(0,a.zw)(e.currentProject.to)+"  ("+(0,a.zw)(t.period)+"개월)",1),(0,i._)("span",null,[(0,i.Uk)(" url :  "),(0,i._)("a",{href:e.currentProject.url,target:"_blank"},(0,a.zw)(e.currentProject.url),9,Ne)])])}var Se={props:{period:String},computed:{...(0,s.Se)("projectStore",["currentProject"])}};const He=(0,p.Z)(Se,[["render",Te]]);var Ee=He,Ie={components:{CareerDetailHeader:Ee}};const Fe=(0,p.Z)(Ie,[["render",Le]]);var Me=Fe;const Ge={class:"career-detail-page_content content_1"},We=(0,i.uE)('<section><h2>🛠️ Used Tech &amp; Tool</h2><ul><li>기획 &amp; 디자인 : Kakao Oven, Figma, Zeplin</li><li>FrontEnd : Vue.js, Javascript, CSS, Bootstrap, kakaomap, VSCode</li><li>BackEnd : Java, Sprint Boot, JPA, MariaDB, ZooKeeper, kafka, IntelliJ</li><li>인프라 : Amazon S3, Amazon cloudfront, Amazon Route 53, Amazon EC2</li><li>버전관리 : Git, GitHub, GitHub Actions, GitKraken</li><li>배포관리 : Jenkins</li></ul></section><section><h2>📖 개요</h2><ul><li>개요 : 소비자와 매장 사이에서 음식 주문 및 결제를 중개해주는 배달 플랫폼 서비스입니다.</li><li>기능 : 매장 및 메뉴 선택, 주문, 관심 상품 담기, 주문 상품 리뷰 </li></ul></section><section><h2>🔖 작업사항</h2><ul><li><h3>FrontEnd</h3><ul><li>- 홈 페이지</li><li>- 매장 리스트 페이지</li><li>- 매장 상세 페이지</li><li>- 장바구니 페이지</li><li>- 주문 페이지</li><li>- 주문 완료 페이지</li></ul></li></ul></section><section class="meaning_section"><h2>✨ Meaning</h2><ul><li><h3>실무 프로젝트를 상정한 경험 :</h3><p>     기획에서 개발, 협업과 문서관리, 버전관리, 배포에 이르기까지 모든 과정에서 실무에서 사용하는 기술과 툴을 사용하고자 했습니다. 또한 실무에서 실제로 쓰이는 보편적이고 정형화된 구조와 코드 스타일을 조사하여 개발에 적용하고자 노력하였습니다. 제가 속했던 프론트엔드 측에서는 팀원 중 현직으로 일하는 개발자가 없어 실무와 흡사한 구조나 코드스타일을 알지는 못한다는 한계가 있었으나, 이는 오히려 단순히 원하는 기능 구현만을 위한 개발이 아닌 실무에서 사용될 법한 방식의 개발을 직접 고민하게 된 계기가 되었고, 이에 커스터마이징이나 재활용이 가능한 사용성을 높이는 방식의 개발을할 수 있었습니다. 간접적으로 실무를 경험하고 실무에 투입되었을 때 보다 쉽게 적응할 수 있도록 기술과 툴, 프로세스에 익숙해질 수 있었던 경험이었습니다. </p></li><li><h3>기획에서 개발까지 :</h3><p>     프로젝트가 전체적으로 어떤 과정을 거치는지, 어떤 파트로 나뉘어져 있는지 알게 되었습니다. 각 과정이나 파트에 속해 모든 업무를 하나하나 진행하면서 각 과정과 파트에서 갖게되는 주요 관심사에 대해 알게 되었고 이에 대한 구체적인 해결 방법을 고민해볼 수 있었습니다. 이렇게 기획, 디자인, 퍼블리싱, 개발에 이르는 모든 과정 및 파트를 경험하면서 각 파트에서 사용하는 기술과 툴을 사용해 보기도 했고 각 파트의 역할을 파악할 수 있었습니다. 이는 향후 특정한 파트에 속하더라도 각 파트 간의 니즈나 이를 충족하기 위해 어떤 커뮤니케이션이 이루어져야 하는지 알 수 있었던 경험이라고 생각합니다. </p></li><li><h3>팀 프로젝트 경험 :</h3><p>     이전까지는 혼자 개인적인 프로젝트를 주로 진행해왔던 저에게 있어 제대로 된 팀 프로젝트 경험이었습니다. 이 정도의 팀 프로젝트를 경험해 보면서 여러 가지 장/단점을 느끼게 되었습니다. 무엇보다 좋았던 점은 다른 사람의 개발 스타일을 접했던 점입니다. 제가 생각하지 못했던 부분에 대해 인사이트를 얻게 되었고 좋은 점을 받아들일 수 있었습니다. 또한 경험해보지 못했던 부분을 직/간접적으로 경험할 수 있었고, 혼자서는 해결하기 어려운 부분에 대해 함께 머리를 맞대어 보다 빠르게 문제를 해결할 수 있었습니다. </p><p>     다만 아쉬웠던 점은 프로젝트 진행도였습니다. 모든 인원이 회의에 참석하거나, 각자의 할당량을 수행하는 데 있어 종종 어려움을 겪었습니다. 회의 내용의 문서화, 공통된 규칙을 세우고 가능한 적절하게 할당량을 분배하는 등의 노력을 기울였으나, 각자가 처한 환경으로 인해 프로젝트 진행에 차질을 겪었던 점 등의 한계점을 느끼기도 했던 프로젝트였습니다. </p></li></ul></section>',4);function Ae(e,n,t,o,r,l){const a=(0,i.up)("CareerDetailHeader"),c=(0,i.up)("CareerDetailCarousel");return(0,i.wg)(),(0,i.iD)("div",Ge,[(0,i.Wm)(a,{period:"7"}),(0,i._)("main",null,[(0,i._)("section",null,[(0,i.Wm)(c,{slides:r.slides},null,8,["slides"])]),We])])}const $e=["src","alt"];function Ze(e,n,t,o,r,l){const a=(0,i.up)("Slide"),c=(0,i.up)("Navigation"),s=(0,i.up)("Pagination"),u=(0,i.up)("Carousel");return(0,i.wg)(),(0,i.j4)(u,{wrapAround:!0,autoplay:Number(3e3),pauseAutoplayOnHover:!0},{slides:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.slides,((e,n)=>((0,i.wg)(),(0,i.j4)(a,{key:n},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.src,alt:e.alt},null,8,$e)])),_:2},1024)))),128))])),addons:(0,i.w5)((()=>[(0,i.Wm)(c),(0,i.Wm)(s)])),_:1},8,["autoplay"])}var Je=t(1658),Re={components:{Carousel:Je.lr,Slide:Je.Mi,Pagination:Je.tl,Navigation:Je.W_},props:{slides:Array}};const ze=(0,p.Z)(Re,[["render",Ze]]);var Ke=ze,Ue={components:{CareerDetailHeader:Ee,CareerDetailCarousel:Ke},data(){return{slides:[{src:t(8664),alt:"joomak_0"},{src:t(6977),alt:"joomak_1"},{src:t(429),alt:"joomak_2"},{src:t(4663),alt:"joomak_3"},{src:t(6859),alt:"joomak_4"},{src:t(8249),alt:"joomak_5"},{src:t(104),alt:"joomak_6"}]}}};const Ve=(0,p.Z)(Ue,[["render",Ae]]);var Ye=Ve;const Xe={class:"career-detail-page_content content_2"},qe=(0,i.uE)('<section><h2>🛠️ Used Tech &amp; Tool</h2><ul><li>FrontEnd : Vue.js, Javascript, IntelliJ</li><li>BackEnd : Java, Spring, MySQL, STS, Orange DB</li><li>버전관리 : Git, Bitbucket, IntelliJ</li><li>배포관리 : Jenkins</li><li>협업도구 : Jira, Confluence</li></ul></section><section class="about_section"><h2>📖 개요</h2><ul><li>개요 : 은행 관련 업무를 인터넷 또는 모바일로 이용할 수 있는 글로벌 뱅킹 서비스입니다.</li><li>기능 : <ul><li>대고객 Front Office - 계좌조회, 이체, 수신/여신, 국가별 다국어 지원 등</li><li>관리자 Back Office - 대고객 Front Office 연동 서비스 및 공통코드 관리, 공통 코드 등 관리</li></ul></li></ul></section><section class="work_section"><h2>🔖 작업사항</h2><ul><li><h3>대고객 Front Office</h3><ul><li>- PC/Mobile Back Office 연동 금리안내 화면 고도화/개발</li></ul></li><li><h3>관리자 Back Office</h3><ul><li>- 통합 관리자 화면/API 개발</li><li>- 메뉴관리, 메뉴권한관리 화면 개발</li><li>- 메뉴관리/메뉴권한관리 연동 관리자 페이지 LNB 고도화/개발</li><li>- 관리자 홈 화면 내 국가별 접속 현황 차트 개발</li><li>- 금리관리 화면/API, 대고객 Front Office 표시 미리보기 기능 개발</li><li>- 기타 관리 화면/API 개발</li></ul></li></ul></section><section class="meaning_section"><h2>✨ Meaning</h2><ul><li><h3>실무 프로젝트 경험 :</h3><p>     개인으로서 업무를 진행하기 위해 최소한의 git의 사용법을 익히거나 구두 혹은 ppt로 협업을 진행했던 이전의 프로젝트와는 다르게, 협업 툴로서의 git의 사용법이나 Jira/Confluence를 이용한 업무 진행 방식을 경험할 수 있었습니다. 프로젝트의 막바지에 투입되어 많은 것을 경험할 수는 없었지만, 대략적으로나마 실무 프로젝트에서의 실제 개발 및 업무 방식을 접할 수 있었던 프로젝트였습니다. </p></li><li><h3>스스로 문제 해결 :</h3><p>     이 프로젝트에서 저는 Back Office의 화면 개발 담당자로서 업무를 수행하게 되었습니다. 프로젝트가 개발 막바지에서 이른 시점이어서 다른 개발자 분들이 바쁘기도 했고, 함께 Back Office 업무를 수행하는 인력이 거의 없었기에 Back Office에 요건이 주어졌을 때나 이슈가 발생했을 때 대부분 스스로의 힘으로 해결해야 하는 상황을 자주 마주하게 되었습니다. 이에 Confluence의 문서를 찾아가며 히스토리나 업무를 파악하거나, 기존의 소스를 분석하여 소스 구조나 공통된 개발 규칙을 파악하여 적용하는 등 혼자 문제를 해결해야 하는 상황에서의 업무 분석 및 이슈 해결 능력을 키울 수 있었습니다. 하지만 혼자 고민하고 문제를 해결하는 것이 효율적인 개발에 있어 좋은 방식은 아니라는 아쉬움이 있었고, 가능하다면 질문과 커뮤니케이션을 통해서 업무를 수행하자고 생각하게 된 계기가 되었습니다. </p></li><li><h3>이슈 처리 능력 향상 :</h3><p>     이전 프로젝트까지는 BackEnd를 연동할 기회가 없었으나, 이번 프로젝트에서 BackEnd를 연동할 기회가 생기면서 개발자 도구를 더 잘 활용할 수 있게 되었습니다. 그 과정에서 이슈 발생 시 프론트엔드/백엔드 중 문제 발생 영역을 구분할 수 있게 되었습니다. 만약 문제가 생긴 부분이 프론트엔드 쪽이면 디버깅을 통해 자체적으로 문제를 해결하였고, 백엔드 쪽이면 소스를 분석하여 원인이 되는 부분을 파악하고 가능하다면 대략적인 해결책을 강구하여 해당 소스의 담당자 또는 개발자와 대화하여 이슈를 처리 하는 등 이슈 처리 요령을 터득하게 되었습니다. </p></li><li><h3>인프라 관련 개념에 대한 이해 :</h3><p>     프로젝트를 수행하면서 인프라에 대해 궁금해졌고 이에 대해 알게 되면 더 좋을 것 같다는 생각을 하게 되었습니다. 이에 호스팅이나 웹/WAS 서버, Pod와 같은 개념들을 알게 되었고 이후 소스를 분석하고 개발을 진행하는 과정에서 해당 개념들을 대입하며 이해하려 노력하였습니다. 덕분에 하나의 프로젝트가 프론트엔드/백엔드를 통틀어 어떤 구조를 이루고 있고, 개발을 한 소스가 실제로 어디에 위치하며 고객이 사이트에 접근하거나 상호작용할 때 이루어지는 일들에 대해 이해할 수 있게 되었습니다. 프론트엔드 라는 한 부분에서 벗어나 프로젝트를 구성하는 전체적인 틀을 보는 시야가 확장되는 기회가 되었습니다. </p></li></ul></section>',4);function Qe(e,n,t,o,r,l){const a=(0,i.up)("CareerDetailHeader"),c=(0,i.up)("CareerDetailCarousel");return(0,i.wg)(),(0,i.iD)("div",Xe,[(0,i.Wm)(a,{period:"5"}),(0,i._)("main",null,[(0,i._)("section",null,[(0,i.Wm)(c,{slides:r.slides},null,8,["slides"])]),qe])])}var en={components:{CareerDetailHeader:Ee,CareerDetailCarousel:Ke},data(){return{slides:[{src:t(4847),alt:"kb-global-banking_0"},{src:t(807),alt:"kb-global-banking_1"},{src:t(887),alt:"kb-global-banking_2"},{src:t(342),alt:"kb-global-banking_3"},{src:t(5636),alt:"kb-global-banking_4"}]}}};const nn=(0,p.Z)(en,[["render",Qe]]);var tn=nn;const on={class:"career-detail-page_content content_3"},rn=(0,i.uE)('<section><h2>🛠️ Used Tech &amp; Tool</h2><ul><li>FrontEnd : Vue.js, Nuxt.js, Javascript, CSS, Websquare, VSCode</li><li>BackEnd : Java, Spring, MySQL, STS, DBeaver</li><li>버전관리 : Git, GitLab, SourceTree</li><li>배포관리 : Jenkins</li><li>협업도구 : Jira, Confluence</li></ul></section><section class="about_section"><h2>📖 개요</h2><ul><li>개요 : 제휴사의 상품을 중개하여 원하는 상품을 구독의 형태로 구매하는 구독 플랫폼 서비스입니다.</li><li>기능 : <ul><li>대고객 Front Office - 제휴사 상품 구독신청, 나의 구독 상품 목록 관리, 이벤트 안내 및 참여신청</li><li>관리자 Back Office - 대고객 Front Office의 전시상품/이벤트 등 관리, 공통 코드 등 관리</li></ul></li></ul></section><section class="work_section"><h2>🔖 작업사항</h2><ul><li><h3>대고객 Front Office</h3><ul><li>- 유독 1-2차 PC 화면 개발 (* 메인, 구독신청 프로세스, 이벤트)</li></ul></li><li><h3>관리자 Back Office</h3><ul><li>- 대고객 Front Office 연동 관리 화면/API 개발</li><li>- 쿠폰 현황 관련 관리 화면/API 개발</li><li>- 멤버십 혜택 및 쿠폰 정산 관련 관리 화면/API 개발</li></ul></li><li><h3>기타</h3><ul><li>- LG U+ 멤버십 혜택 서비스 관련 배치 개발</li></ul></li></ul></section><section class="meaning_section"><h2>✨ Meaning</h2><ul><li><h3>[  FrontEnd  ]</h3><ul><li><h4>기획팀과의 협업 :</h4><ul><li><h5>기획 의도 파악 &amp; 커뮤니케이션 :</h5><p>     개발 이전 뿐만 아니라 개발 과정 내내 기획 의도를 파악하고 재확인해야 한다는 점이 중요함을 느꼈습니다. 기획서는 문서이기에 애매한 단어로 인해 잘못된 해석의 여지가 있고, 이에 의도와 다른 결과물이 나올 수 있기 때문이었습니다. 때문에 프로젝트를 진행하면서 애매한 부분에 대해 주관적인 해석을 최대한 배제하고 기획측과 꾸준한 커뮤니케이션 및 재확인을 통해 정확한 의도를 파악하는 능력이 향상되었습니다. </p><p>     나아가 요구사항에 대해 현재 인프라와 기술 하에서 구현 가능여부를 사전에 제시하며, 현재 가능한 대안을 제시하고 기획과 협의할 수 있게 되었습니다. </p></li><li><h5>추가/변경 사항의 문서반영 :</h5><p>     문서 미반영으로 인해 기획팀과 개발팀의 기억에 차이가 있어 혼선을 빚게 되거나, 작업에 참여하지 않았었던 인계자가 히스토리를 파악할 때 헷갈리는 경우를 종종 겪었습니다. 이에 작은 기능이라 할지라도 추가/변경되는 사항이 있으면 문서에 반영해야 하는 것이 중요함을 배웠고, 이후 추가/변경 사항은 철저한 문서화를 요청하고 반영하는 문화를 형성하였습니다. </p></li></ul></li><li><h4>백엔드와의 협업 :</h4><ul><li><h5>API 설계 :</h5><p>     주로 완성된 API를 단방향으로 사용했었던 지난 프로젝트와 달리, 특정 기능 구현을 위해 백엔드 측과 협의하여 API 설계에 관여해야 할 상황을 자주 마주하게 되었습니다. 기획 문서 분석 후 화면에서 사용되어야 할 데이터를 리스트업 하고, 백엔드 API 제작에 앞서 필요 데이터를 요청하거나, 프론트엔드/백엔드 중 데이터 가공 위치 등을 협의 후 개발을 진행할 수 있게 되었습니다. </p></li></ul></li><li><h4>소스의 통일성 :</h4><ul><li><h5>소스의 통일성 :</h5><p>     대고객 Front Office는 PC와 Mobile이 서로 다른 프로젝트로 나뉘어져 있었는데, 이러한 경우 소스의 통일성을 갖추어야 한다는 점을 배웠습니다. 두 프로젝트의 담당자가 달랐기에 각자의 코딩 스타일이 있었으나, 코딩의 편리함보다는 유지보수적 측면에서 훨씬 좋은 이점을 얻는다는 점 때문이었습니다. 두 프로젝트의 소스 일관성을 갖춘 덕분에 이슈가 나타나더라도 빠르게 대처가 가능했고, 한 명이 없더라도 두 프로젝트를 남은 담당자가 용이하게 커버할 수 있었습니다. </p></li><li><h5>소스 분석 :</h5><p>     다만 이를 위해서는 평소에 전체 소스를 파악하고 있어야 했고, 개발 시에는 소스를 분석하는 능력이 요구되었습니다. 프로젝트를 진행하는 과정에서 소스 분석 능력이 향상되었습니다. 나아가 PC와 Mobile의 특성상 서로 다르게 퍼블리싱 된 부분이 자주 있었는데, 소스 분석 능력을 바탕으로 통일성을 해치지 않는 선에서 적절히 변환하여 개발하는 능력이 향상되었습니다. </p></li></ul></li><li><h4>Front의 부가적이지만 필수적인 역할 :</h4><ul><li><h5>예외 케이스 처리 &amp; 유효성 검사 :</h5><p>     프로젝트 초반에는 기획에 있는 내용을 정확히 반영하는 것만을 신경쓰고는 했었습니다. 하지만 기획에서 놓치거나 세세히 정의되지 않은 비 정상적 케이스에 대한 처리를 핸들링 하는 것 또한 프론트의 중요한 역할임을 배웠습니다. 정상적인 프로세스에 따른 화면 접근이 아닌 url을 통한 직접적인 화면 접근을 막거나, 정의되지 않은 url 접근에 대한 리다이렉트 처리, 악의적 데이터 조작에 대한 1차 방지를 위한 유효성 검사 등, 예외 케이스에 대한 처리 또한 고려할 수 있게 되었습니다. </p></li></ul></li></ul></li><li><h3>[  관리자 Back Office  ]</h3><ul><li><h4>관리자 페이지의 필요성 :</h4><p>     FrontEnd에 있을 때는 BackEnd로부터 넘어오는 데이터를 화면에 올바르게 뿌려주는 역할에 치중했기 때문에, 관리자 페이지의 역할이나 필요성에 대해 크게 실감하지 못했었습니다. 그러나 관리자 Back Office의 업무를 수행하면서, 비 개발 운영인력을 포함한 운영팀의 사이트 관리에서의 이점, 사이트 관리의 자동화라는 관리자 페이지의 필요성을 체감할 수 있었습니다. </p></li><li><h4>시야의 확장 :</h4><p>     Back Office에서의 업무는 관리자 화면 개발 뿐 아니라 BackEnd API 개발이 동반되었습니다. BackEnd 개발은 FrontEnd에서 보내는 데이터가 어떻게 받아지고, 내부적으로 어떤 비즈니스를 수행하며 데이터가 어디에 어떤 방식으로 저장되고 관리되는지 피부로 느낄 수 있었던 경험이었습니다. 분업화된 개발에서 각 파트가 가지는 역할을 보다 명확히 구분할 수 있게 되었고, 개발 수행시 전체적인 흐름을 고려하게 되면서 시야가 확장되었음을 느낄 수 있었습니다. </p></li><li><h4>기술 스택의 확장 :</h4><p>     그동안 대략적인 해석 정도만 할 수 있었던 Java, MySQL을 이용해 직접 개발하면서 기술의 숙련도를 높일 수 있었습니다. 여전히 많은 프로젝트에서 사용되는 기술이기에 향후 개발시 소스 분석에서의 이점을 기대할 수 있게 되었습니다. 그 외에도 DBeaver를 사용하면서 DBMS의 보편적인 사용법을 익히거나 데이터를 직접 핸들링하는 경험을 얻을 수 있었고, 웹스퀘어를 통한 프론트 개발을 수행하면서 Framework가 가지는 이점 및 단점을 체감하기도 하였습니다. 무엇보다 다양한 기술을 접하면서 새로운 기술을 익히는 데에서 드는 거부감을 줄일 수 있었고 적응하는 방법을 배울 수 있었습니다. </p></li></ul></li><li><h3>[  버전관리  ]</h3><ul><li><h4>Git 숙련도 향상 :</h4><p>     local-dev-qa-master로 된 보편적인 git branch 전략을 경험하여 master로의 안정적인 소스반영을 위한 각 branch의 역할과 존재 의미를 체감할 수 있었습니다. 또한 긴급 반영 필요 사항 발생시 아직 Test가 완료되지 않았거나 정해진 일정에 올라가야 하는 소스가 master에 반영되지 않기 위해 hotfix branch를 이용한다는 branch 전략을 배우기도 하였습니다. </p><p>     개인적으로는 기능단위별 commit, commit message 작성시 CRUD를 구분하거나 작업내용을 명확히 명시하는 등 몇 가지 규칙을 정립하였습니다. 이에 요건사항 수정/철회에 대한 유연한 대처, 이슈 발생시 보다 쉬운 원인 파악 등 Git을 적절히 활용할 수 있게 되었습니다. </p></li></ul></li></ul></section>',4);function ln(e,n,t,o,r,l){const a=(0,i.up)("CareerDetailHeader"),c=(0,i.up)("CareerDetailCarousel");return(0,i.wg)(),(0,i.iD)("div",on,[(0,i.Wm)(a,{period:"15"}),(0,i._)("main",null,[(0,i._)("section",null,[(0,i.Wm)(c,{slides:r.slides},null,8,["slides"])]),rn])])}var an={components:{CareerDetailHeader:Ee,CareerDetailCarousel:Ke},data(){return{slides:[{src:t(5723),alt:"udok_0"},{src:t(2569),alt:"udok_1"},{src:t(4182),alt:"udok_2"},{src:t(2174),alt:"udok_3"},{src:t(1626),alt:"udok_4"},{src:t(4334),alt:"udok_5"},{src:t(3176),alt:"udok_6"}]}}};const cn=(0,p.Z)(an,[["render",ln]]);var sn=cn;const un={class:"career-detail-page_content content_4"},pn=(0,i.uE)('<main><section><h2>🛠️ Used Tech &amp; Tool</h2><ul><li>기획 &amp; 디자인 : Kakao Oven</li><li>FrontEnd : Vue.js, Javascript, CSS, VSCode</li><li>버전관리 : Git, GitHub, SourceTree</li><li>배포관리 : GitHub Actions</li></ul></section><section class="about_section"><h2>📖 개요</h2><ul><li>개요 : 저와 저의 작업물 및 커리어를 소개하는 웹 포트폴리오 사이트를 Vue.js로 구현한 프로젝트입니다.</li><li>기능 : 자기소개, 사용기술 소개, 수행 프로젝트 소개, 메일 및 연락처 안내</li></ul></section><section><h2>🔖 작업사항</h2><ul><li><h3>FrontEnd</h3><ul><li>- 인트로</li><li>- 나의 정보</li><li>- 기술</li><li>- 수행 프로젝트</li><li>- Contact Me</li></ul></li></ul></section><section class="meaning_section"><h2>✨ Meaning</h2><ul><li><h3>잘 구분된 소스구조 :</h3><p>     지난 프로젝트에서는 프로젝트의 규모가 컸기에, 주로 나에게 할당된 부분만 개발하는 것에 초점이 맞춰져 있었습니다. 그럴 수 있었던 것은 이미 잘 구축된 인프라 덕분이라는 생각이 들었습니다. 잘 구축된 인프라 위에서 제가 맡은 부분을 결점없이 정확하게 개발하는 것에 초점을 두었던 지난번이었기에, 이번에는 라우트/환경변수/Vuex 구조/소스 트리 구조 설계 등의 인프라 혹은 전체적인 틀을 직접 구축해보고, 나아가 그 틀이 잘 짜여진 프로젝트를 만드는 것을 첫번째 목표로 하고 싶었습니다. </p><p>     프로젝트를 진행하며 항상 느끼는 것 중 하나는, 특정한 기준에 따라 소스를 정리정돈 해야 할 상황이 많다는 점입니다. 라우터의 각 path를 설정할 때도, Vuex를 module 단위로 나눌 때도, 소스의 폴더 구조를 형성할 때도 이러한 상황을 마주치고는 했습니다. 그럴 때마다 구조를 조금 더 잘게 쪼개야 할지, 또 쪼갠다면 어떤 기준에 따라 나누어야 하는 것인지에 대한 고민을 많이 할 수 있는 시간이었고, 화면 단위, 기능 단위 등 몇 가지 기준들을 정립할 수 있었습니다. </p></li><li><h3>직관적인 네이밍과 로직 :</h3><p>     지난 프로젝트에서 다른 사람의 소스를 참고로 하거나 다른 사람이 저의 소스를 참고로 하는 등 상호 간의 소스를 분석하는 상황을 자주 겪었습니다. 소스를 분석하는 능력도 물론 중요하지만, 되도록이면 소스 자체가 직관적으로 짜여져야 한다는 것을 느꼈고, 이번 프로젝트에서 이러한 점을 반영하는 것을 두번째 목표로 두었습니다. </p><p>     네이밍을 할 때 어떤 페이지에 속하는지, 또 어떤 역할을 하고 있는지를 생각하며 이름을 붙였고, 되도록이면 쉬운 단어를 선택하였습니다. 또한 기본적으로 로직을 간결하게 짜면서도, 가독성을 위한 변수를 선언하는 등 소스분석에 어려움을 느끼지 않도록 로직을 구성하였습니다. 덕분에 개발 중간마다 수정이 필요할 때 빠르게 색인할 수 있었고, 이러한 점들이 개발 능률 향상에 큰 영향을 끼침을 다시 한 번 체감할 수 있었습니다. </p></li></ul></section></main>',1);function dn(e,n,t,o,r,l){const a=(0,i.up)("CareerDetailHeader");return(0,i.wg)(),(0,i.iD)("div",un,[(0,i.Wm)(a,{period:"1"}),pn])}var mn={components:{CareerDetailHeader:Ee}};const gn=(0,p.Z)(mn,[["render",dn]]);var hn=gn,fn={components:{CareerLnb:Pe,CareerDetail0:Me,CareerDetail1:Ye,CareerDetail2:tn,CareerDetail3:sn,CareerDetail4:hn},computed:{routeParams(){return this.$route.params}}};const _n=(0,p.Z)(fn,[["render",je]]);var vn=_n;const kn={class:"contact-me-page_wrap"};function bn(e,n,t,o,r,l){return(0,i.wg)(),(0,i.iD)("div",kn,"연락 페이지")}var wn={};const Cn=(0,p.Z)(wn,[["render",bn]]);var jn=Cn;const xn=[{path:"/my-portfolio-vue/",name:"HomePage",meta:{nick:"Home",gnbYn:!0},component:me},{path:"/my-portfolio-vue/career",name:"CareerPage",meta:{nick:"Career",gnbYn:!0},component:we},{path:"/my-portfolio-vue/career/:careerId",name:"CareerDetailPage",component:vn},{path:"/my-portfolio-vue/contact",name:"ContactMePage",meta:{nick:"Contact Me",gnbYn:!0},component:jn}],Dn=(0,C.p7)({history:(0,C.PO)(),routes:xn});var Bn=Dn;const Pn={namespaced:!0,state:{gnbBoxOn:!1},getters:{},mutations:{SET_GNB_BOX_ON(e){e.gnbBoxOn=!e.gnbBoxOn}},actions:{}};var On=Pn;const yn={namespaced:!0,state:{projectList:[{id:4,title:"My Portfolio_Vue",subTitle:"My Portfolio_Vue",url:"https://horingring.github.io/my-portfolio-vue/",mainImg:t(7896),color:"#42b883",from:"2023.08",to:"2023.09"},{id:3,title:"LG U+ 유료구독 플랫폼 유독",subTitle:"LG U+ 유독",url:"https://www.lguplus.com/pogg/",mainImg:t(1662),color:"#e6017e",from:"2022.05",to:"2023.08"},{id:2,title:"KB 글로벌 인터넷/스마트 뱅킹",subTitle:"KB 글로벌 뱅킹",url:"https://kbglobal.kbstar.com/",mainImg:t(1498),color:"#ffd719",from:"2021.12",to:"2022.05"},{id:1,title:"요식업플랫폼 주막",subTitle:"요식업플랫폼 주막",url:"http://dev-joomak-delivery.s3-website.ap-northeast-2.amazonaws.com/",mainImg:t(8985),color:"#fec562",from:"2021.05",to:"2021.12"},{id:0,title:"My Portfolio_React",subTitle:"My Portfolio_React",url:"https://horingring.github.io/my-portfolio/",mainImg:t(7731),color:"#4a4291",from:"2020.12",to:"2021.03"}]},getters:{currentProject(e){let n={id:null,title:null,subTitle:null,url:null,mainImg:null,color:null,from:null,to:null};if(Bn.currentRoute.value.params&&Bn.currentRoute.value.params.careerId)for(let t=0;t<e.projectList.length;t++)if(Number(Bn.currentRoute.value.params.careerId)==Number(e.projectList[t].id)){n=e.projectList[t];break}return n}},mutations:{},actions:{}};var Ln=yn;const Nn={modules:{commonStore:On,projectStore:Ln}};var Tn=(0,s.MT)(Nn),Sn=t(3494),Hn=t(7749),En=t(8539),In=t(8429),Fn=t(4551);Sn.vI.add(En.mRB,In.NCV,Fn.vnX),(0,o.ri)(w).use(Tn).use(Bn).component("font-awesome-icon",Hn.GN).mount("#app")},7731:function(e,n,t){e.exports=t.p+"img/my-portfolio-react_main.e0bd69a3.png"},8664:function(e,n,t){e.exports=t.p+"img/joomak_0.35af1d02.png"},6977:function(e,n,t){e.exports=t.p+"img/joomak_1.6cea97fa.png"},429:function(e,n,t){e.exports=t.p+"img/joomak_2.6bcabb1d.png"},4663:function(e,n,t){e.exports=t.p+"img/joomak_3.a0a73ed6.png"},6859:function(e,n,t){e.exports=t.p+"img/joomak_4.d76144ce.png"},8249:function(e,n,t){e.exports=t.p+"img/joomak_5.6b17d10e.png"},104:function(e,n,t){e.exports=t.p+"img/joomak_6.5a75e76c.png"},8985:function(e,n,t){e.exports=t.p+"img/joomak_main.3a6b6695.png"},4847:function(e,n,t){e.exports=t.p+"img/kb-global-banking_0.614ef416.png"},807:function(e,n,t){e.exports=t.p+"img/kb-global-banking_1.9baebfd6.png"},887:function(e,n,t){e.exports=t.p+"img/kb-global-banking_2.c32f65ce.png"},342:function(e,n,t){e.exports=t.p+"img/kb-global-banking_3.507e7e80.png"},5636:function(e,n,t){e.exports=t.p+"img/kb-global-banking_4.c8e0d852.png"},1498:function(e,n,t){e.exports=t.p+"img/kb-global-banking_main.c283a6c2.png"},5723:function(e,n,t){e.exports=t.p+"img/udok_0.30de1465.png"},2569:function(e,n,t){e.exports=t.p+"img/udok_1.02c6ed42.png"},4182:function(e,n,t){e.exports=t.p+"img/udok_2.9b494d38.png"},2174:function(e,n,t){e.exports=t.p+"img/udok_3.8c9aec58.png"},1626:function(e,n,t){e.exports=t.p+"img/udok_4.c4ea0053.png"},4334:function(e,n,t){e.exports=t.p+"img/udok_5.a061de6e.png"},3176:function(e,n,t){e.exports=t.p+"img/udok_6.9a6218a6.png"},1662:function(e,n,t){e.exports=t.p+"img/udok_main.f704623e.png"},7896:function(e,n,t){e.exports=t.p+"img/my-portfolio-vue_main.78dc9759.png"},3851:function(e,n,t){e.exports=t.p+"img/free-icon-chat-1650281.15ba2da3.png"},9837:function(e,n,t){e.exports=t.p+"img/free-icon-layers-1659098.0353e1f1.png"},2349:function(e,n,t){e.exports=t.p+"img/free-icon-quote-request-7257807.472b105c.png"},5745:function(e,n,t){e.exports=t.p+"img/free-icon-search-2040496.69bc0a3c.png"}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var a=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(a=!1,r<l&&(l=r));if(a){e.splice(u--,1);var s=i();void 0!==s&&(n=s)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/my-portfolio-vue/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,l=o[0],a=o[1],c=o[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(c)var u=c(t)}for(n&&n(o);s<l.length;s++)r=l[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkmy_portfolio_vue"]=self["webpackChunkmy_portfolio_vue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7627)}));o=t.O(o)})();
//# sourceMappingURL=app.6b44b092.js.map