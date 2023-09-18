<template>
  <div class="career-detail-page_content content_2">
    <header>
      <h1>{{ currentProject.title }}</h1>
      <span>{{ currentProject.from }} ~ {{ currentProject.to }}&nbsp;&nbsp;(5개월)</span>
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
          <li>FrontEnd : Vue.js, Javascript, IntelliJ</li>
          <li>BackEnd : Java, Spring, MySQL, STS, Orange DB</li>
          <li>버전관리 : Git, Bitbucket, IntelliJ</li>
          <li>배포관리 : Jenkins</li>
          <li>협업도구 : Jira, Confluence</li>
        </ul>
      </section>
      <section class="about_section">
        <h2>📖 개요</h2>
        <ul>
          <li>개요 : 은행 관련 업무를 인터넷 또는 모바일로 이용할 수 있는 글로벌 뱅킹 서비스입니다.</li>
          <li>기능 :
            <ul>
              <li>대고객 Front Office - 계좌조회, 이체, 수신/여신, 국가별 다국어 지원 등</li>
              <li>관리자 Back Office - 대고객 Front Office 연동 서비스 및 공통코드 관리, 공통 코드 등 관리</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="work_section">
        <h2>🔖 작업사항</h2>
        <ul>
          <li>
            <h3>대고객 Front Office</h3>
            <ul>
              <li>- PC/Mobile Back Office 연동 금리안내 화면 고도화/개발</li>
            </ul>
          </li>
          <li>
            <h3>관리자 Back Office</h3>
            <ul>
              <li>- 통합 관리자 화면/API 개발</li>
              <li>- 메뉴관리, 메뉴권한관리 화면 개발</li>
              <li>- 메뉴관리/메뉴권한관리 연동 관리자 페이지 LNB 고도화/개발</li>
              <li>- 관리자 홈 화면 내 국가별 접속 현황 차트 개발</li>
              <li>- 금리관리 화면/API, 대고객 Front Office 표시 미리보기 기능 개발</li>
              <li>- 기타 관리 화면/API 개발</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="meaning_section">
        <h2>✨ Meaning</h2>
        <ul>
          <li>
            <h3>실무 프로젝트 경험 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;개인으로서 업무를 진행하기 위해 최소한의 git의 사용법을 익히거나 구두 혹은 ppt로 협업을 진행했던 이전의 프로젝트와는 다르게, 협업 툴로서의 git의  사용법이나 Jira/Confluence를 이용한 업무 진행 방식을 경험할 수 있었습니다. 프로젝트의 막바지에 투입되어 많은 것을 경험할 수는 없었지만, 대략적으로나마 실무 프로젝트에서의 실제 개발 및 업무 방식을 접할 수 있었던 프로젝트였습니다.
            </p>
          </li>
          <li>
            <h3>스스로 문제 해결 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;이 프로젝트에서 저는 Back Office의 화면 개발 담당자로서 업무를 수행하게 되었습니다. 프로젝트가 개발 막바지에서 이른 시점이어서 다른 개발자 분들이 바쁘기도 했고, 함께 Back Office 업무를 수행하는 인력이 거의 없었기에 Back Office에 요건이 주어졌을 때나 이슈가 발생했을 때 대부분 스스로의 힘으로 해결해야 하는 상황을 자주 마주하게 되었습니다. 이에 Confluence의 문서를 찾아가며 히스토리나 업무를 파악하거나, 기존의 소스를 분석하여 소스 구조나 공통된 개발 규칙을 파악하여 적용하는 등 혼자 문제를 해결해야 하는 상황에서의 업무 분석 및 이슈 해결 능력을 키울 수 있었습니다. 하지만 혼자 고민하고 문제를 해결하는 것이 효율적인 개발에 있어 좋은 방식은 아니라는 아쉬움이 있었고, 가능하다면 질문과 커뮤니케이션을 통해서 업무를 수행하자고 생각하게 된 계기가 되었습니다.
            </p>
          </li>
          <li>
            <h3>이슈 처리 능력 향상 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;이전 프로젝트까지는 BackEnd를 연동할 기회가 없었으나, 이번 프로젝트에서 BackEnd를 연동할 기회가 생기면서 개발자 도구를 더 잘 활용할 수 있게 되었습니다. 그 과정에서 이슈 발생 시 프론트엔드/백엔드 중 문제 발생 영역을 구분할 수 있게 되었습니다. 만약 문제가 생긴 부분이 프론트엔드 쪽이면 디버깅을 통해 자체적으로 문제를 해결하였고, 백엔드 쪽이면 소스를 분석하여 원인이 되는 부분을 파악하고 가능하다면 대략적인 해결책을 강구하여 해당 소스의 담당자 또는 개발자와 대화하여 이슈를 처리 하는 등 이슈 처리 요령을 터득하게 되었습니다.
            </p>
          </li>
          <li>
            <h3>인프라 관련 개념에 대한 이해 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;프로젝트를 수행하면서 인프라에 대해 궁금해졌고 이에 대해 알게 되면 더 좋을 것 같다는 생각을 하게 되었습니다. 이에 호스팅이나 웹/WAS 서버, Pod와 같은 개념들을 알게 되었고 이후 소스를 분석하고 개발을 진행하는 과정에서 해당 개념들을 대입하며 이해하려 노력하였습니다. 덕분에 하나의 프로젝트가 프론트엔드/백엔드를 통틀어 어떤 구조를 이루고 있고, 개발을 한 소스가 실제로 어디에 위치하며 고객이 사이트에 접근하거나 상호작용할 때 이루어지는 일들에 대해 이해할 수 있게 되었습니다. 프론트엔드 라는 한 부분에서 벗어나 프로젝트를 구성하는 전체적인 틀을 보는 시야가 확장되는 기회가 되었습니다.
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