<template>
  <div class="career-detail-page_content content_4">
    <header>
      <h1>{{ currentProject.title }}</h1>
      <span>{{ currentProject.from }} ~ {{ currentProject.to }}&nbsp;&nbsp;(1개월)</span>
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
          <li>기획 & 디자인 : Kakao Oven</li>
          <li>FrontEnd : Vue.js, Javascript, CSS, VSCode</li>
          <li>버전관리 : Git, GitHub, SourceTree</li>
          <li>배포관리 : GitHub Actions</li>
        </ul>
      </section>
      <section class="about_section">
        <h2>📖 개요</h2>
        <ul>
          <li>개요 : 저와 저의 작업물 및 커리어를 소개하는 웹 포트폴리오 사이트를 Vue.js로 구현한 프로젝트입니다.</li>
          <li>기능 : 자기소개, 사용기술 소개, 수행 프로젝트 소개, 메일 및 연락처 안내</li>
        </ul>
      </section>
      <section>
        <h2>🔖 작업사항</h2>
        <ul>
          <li>
            <h3>FrontEnd</h3>
            <ul>
              <li>- 인트로</li>
              <li>- 나의 정보</li>
              <li>- 기술</li>
              <li>- 수행 프로젝트</li>
              <li>- Contact Me</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="meaning_section">
        <h2>✨ Meaning</h2>
        <ul>
          <li>
            <h3>잘 구분된 소스구조 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;지난 프로젝트에서는 프로젝트의 규모가 컸기에, 주로 나에게 할당된 부분만 개발하는 것에 초점이 맞춰져 있었습니다. 그럴 수 있었던 것은 이미 잘 구축된 인프라 덕분이라는 생각이 들었습니다. 잘 구축된 인프라 위에서 제가 맡은 부분을 결점없이 정확하게 개발하는 것에 초점을 두었던 지난번이었기에, 이번에는 라우트/환경변수/Vuex 구조/소스 트리 구조 설계 등의 인프라 혹은 전체적인 틀을 직접 구축해보고, 나아가 그 틀이 잘 짜여진 프로젝트를 만드는 것을 첫번째 목표로 하고 싶었습니다.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;프로젝트를 진행하며 항상 느끼는 것 중 하나는, 특정한 기준에 따라 소스를 정리정돈 해야 할 상황이 많다는 점입니다. 라우터의 각 path를 설정할 때도, Vuex를 module 단위로 나눌 때도, 소스의 폴더 구조를 형성할 때도 이러한 상황을 마주치고는 했습니다. 그럴 때마다 구조를 조금 더 잘게 쪼개야 할지, 또 쪼갠다면 어떤 기준에 따라 나누어야 하는 것인지에 대한 고민을 많이 할 수 있는 시간이었고, 화면 단위, 기능 단위 등 몇 가지 기준들을 정립할 수 있었습니다.
            </p>
          </li>
          <li>
            <h3>직관적인 네이밍과 로직 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;지난 프로젝트에서 다른 사람의 소스를 참고로 하거나 다른 사람이 저의 소스를 참고로 하는 등 상호 간의 소스를 분석하는 상황을 자주 겪었습니다. 소스를 분석하는 능력도 물론 중요하지만, 되도록이면 소스 자체가 직관적으로 짜여져야 한다는 것을 느꼈고, 이번 프로젝트에서 이러한 점을 반영하는 것을 두번째 목표로 두었습니다.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;네이밍을 할 때 어떤 페이지에 속하는지, 또 어떤 역할을 하고 있는지를 생각하며 이름을 붙였고, 되도록이면 쉬운 단어를 선택하였습니다. 또한 기본적으로 로직을 간결하게 짜면서도, 가독성을 위한 변수를 선언하는 등 소스분석에 어려움을 느끼지 않도록 로직을 구성하였습니다. 덕분에 개발 중간마다 수정이 필요할 때 빠르게 색인할 수 있었고, 이러한 점들이 개발 능률 향상에 큰 영향을 끼침을 다시 한 번 체감할 수 있었습니다.
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