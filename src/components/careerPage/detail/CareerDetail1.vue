<template>
  <div class="career-detail-page_content content_1">
    <header>
      <h1>{{ currentProject.title }}</h1>
      <span>( {{ currentProject.from }} ~ {{ currentProject.to }} )</span>
      <span>
        url :&nbsp;
        <a :href="currentProject.url" target="_blank">
          {{ currentProject.url }}
        </a>
      </span>
    </header>
    <main>
      <section>
        <h2>🛠️ Used Tech & Tool</h2>
        <ul>
          <li>기획 & 디자인 : 카카오 오븐, Figma, Zeplin</li>
          <li>FrontEnd : Vue.js, javascript, css, Bootstrap, kakaomap, VSCode</li>
          <li>BackEnd : Java, Sprint Boot, JPA, MariaDB, ZooKeeper, kafka, IntelliJ</li>
          <li>인프라 : Amazon S3, Amazon cloudfront, Amazon Route 53, Amazon EC2</li>
          <li>버전관리 : GitHub, GitHub Actions, GitKraken</li>
          <li>배포관리 : Jenkins</li>
        </ul>
      </section>
      <section>
        <h2>📖 개요</h2>
        <ul>
          <li>개요 : 소비자와 매장 사이에서 음식 주문 및 결제를 중개해주는 배달 플랫폼 서비스입니다.</li>
          <li>기능 : 매장 및 메뉴 선택, 주문, 관심 상품 담기, 주문 상품 리뷰 </li>
        </ul>
      </section>
      <section>
        <h2>🔖 작업사항</h2>
        <ul>
          <li>
            <h3>FrontEnd</h3>
            <ul>
              <li>- 홈 페이지</li>
              <li>- 매장 리스트 페이지</li>
              <li>- 매장 상세 페이지</li>
              <li>- 장바구니 페이지</li>
              <li>- 주문 페이지</li>
              <li>- 주문 완료 페이지</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="meaning_section">
        <h2>✨ Meaning</h2>
        <ul>
          <li>
            <h3>실무 프로젝트를 상정한 경험 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;기획에서 개발, 협업과 문서관리, 버전관리, 배포에 이르기까지 모든 과정에서 실무에서 사용하는 기술과 툴을 사용하고자 했습니다. 또한 실무에서 실제로 쓰이는 보편적이고 정형화된 구조와 코드 스타일을 조사하여 개발에 적용하고자 노력하였습니다. 제가 속했던 프론트엔드 측에서는 팀원 중 현직으로 일하는 개발자가 없어 실무와 흡사한 구조나 코드스타일을 알지는 못한다는 한계가 있었으나, 이는 오히려 단순히 원하는 기능 구현만을 위한 개발이 아닌 실무에서 사용될 법한 방식의 개발을 직접 고민하게 된 계기가 되었고, 이에 커스터마이징이나 재활용이 가능한 사용성을 높이는 방식의 개발을할 수 있었습니다. 간접적으로 실무를 경험하고 실무에 투입되었을 때 보다 쉽게 적응할 수 있도록 기술과 툴, 프로세스에 익숙해질 수 있었던 경험이었습니다.
            </p>
          </li>
          <li>
            <h3>기획에서 개발까지 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;프로젝트가 전체적으로 어떤 과정을 거치는지, 어떤 파트로 나뉘어져 있는지 알게 되었습니다. 각 과정이나 파트에 속해 모든 업무를 하나하나 진행하면서 각 과정과 파트에서 갖게되는 주요 관심사에 대해 알게 되었고 이에 대한 구체적인 해결 방법을 고민해볼 수 있었습니다. 이렇게 기획, 디자인, 퍼블리싱, 개발에 이르는 모든 과정 및 파트를 경험하면서 각 파트에서 사용하는 기술과 툴을 사용해 보기도 했고 각 파트의 역할을 파악할 수 있었습니다. 이는 향후 특정한 파트에 속하더라도 각 파트 간의 니즈나 이를 충족하기 위해 어떤 커뮤니케이션이 이루어져야 하는지 알 수 있었던 경험이라고 생각합니다.
            </p>
          </li>
          <li>
            <h3>팀 프로젝트 경험 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;이전까지는 혼자 개인적인 프로젝트를 주로 진행해왔던 저에게 있어 제대로 된 팀 프로젝트 경험이었습니다. 이 정도의 팀 프로젝트를 경험해 보면서 여러 가지 장/단점을 느끼게 되었습니다. 무엇보다 좋았던 점은 다른 사람의 개발 스타일을 접했던 점입니다. 제가 생각하지 못했던 부분에 대해 인사이트를 얻게 되었고 좋은 점을 받아들일 수 있었습니다. 또한 경험해보지 못했던 부분을 직/간접적으로 경험할 수 있었고, 혼자서는 해결하기 어려운 부분에 대해 함께 머리를 맞대어 보다 빠르게 문제를 해결할 수 있었습니다.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;다만 아쉬웠던 점은 프로젝트 진행도였습니다. 모든 인원이 회의에 참석하거나, 각자의 할당량을 수행하는 데 있어 종종 어려움을 겪었습니다. 회의 내용의 문서화, 공통된 규칙을 세우고 가능한 적절하게 할당량을 분배하는 등의 노력을 기울였으나, 각자가 처한 환경으로 인해 프로젝트 진행에 차질을 겪었던 점 등의 한계점을 느끼기도 했던 프로젝트였습니다.
            </p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('projectStore', ['currentProject'])
  }
}
</script>

<style>

</style>