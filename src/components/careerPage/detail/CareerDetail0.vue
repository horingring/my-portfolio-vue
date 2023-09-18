<template>
  <div class="career-detail-page_content content_0">
    <header>
      <h1>{{ currentProject.title }}</h1>
      <span>{{ currentProject.from }} ~ {{ currentProject.to }}&nbsp;&nbsp;(3개월)</span>
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
          <li>FrontEnd : React.js, Javascript, Sass, VSCode</li>
          <li>버전관리 : Git, GitHub, GitKraken</li>
          <li>배포관리 : GitHub Actions</li>
        </ul>
      </section>
      <section>
        <h2>📖 개요</h2>
        <ul>
          <li>개요 : 저와 저의 작업물 및 커리어를 소개하는 웹 포트폴리오 사이트를 React.js로 구현한 프로젝트입니다.</li>
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
              <li>- 기술 & 프로젝트</li>
              <li>- Contact Me</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="meaning_section">
        <h2>✨ Meaning</h2>
        <ul>
          <li>
            <h3>실전 프로젝트 :</h3>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;그동안 공부한 이론적인 내용을 실전 감각에 적용하기 위해, 강의를 들으며 따라 치는 코딩을 하기도 하였고, 기존에 있는 사이트를 보고 그와 흡사한 사이트를 만드는 클론 코딩의 방식으로 공부해 왔습니다. 이번에는 이렇게 따라가는 방식이 아닌, 배운 기술을 활용해 직접 개발해보며 완성된 나의 프로젝트를 만들고 싶었습니다.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;먼저 목업을 만들고, 이에 맞게 개발해 나갔습니다. 직접 진행하는 개발의 과정에서 다양한 점을 느낄 수 있었습니다. 생각보다 세세한 부분까지 모두 신경써야한다는 점, 한 부분의 개발이 다른 부분에 영향을 끼칠 수 있다는 점, 스크롤 화면 이동 등과 같은 작업에서 정확한 계산이 필요하며 계산식에 대해 잘 이해하고 있어야 한다는 점 등이 그것이었습니다. 어쨌든 가장 최우선으로 여겼던 부분은 내가 구상한 화면을 정확하게 만들고, 원하는 기능을 구현해내는 것이었으므로, 이를 위해 내가 배운 지식을 바탕으로 고민하고, 모르거나 막히는 부분에 대한 해결책을 찾아내 소스에 반영하는 과정의 연속이었습니다. 어떻게든 원하는 화면과 기능을 구현해 내었으나, 구현에 초점을 두다보니 어느 시점부터는 구조적인 부분에서 아쉬움이 보이거나, 특정한 규칙을 공통적으로 적용했으면 좋았을걸 하는 아쉬운 부분들이 뒤늦게나마 보이게 되었습니다. 이를 고치고 싶었으나 이러한 부분들은 개발 초기에 설정해 두지 않으면 바로잡기가 어렵다는 것을 느끼게 되었습니다. 그래서 앞으로는 개발을 진행하기에 앞서 안정된 구조나 규칙을 정립하는 것이 좋을 것 같다는 생각을 하게 되었습니다.
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