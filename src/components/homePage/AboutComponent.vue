<template>
  <div class="about_wrap flex-center">
    <div class="header_area">
      <h1 class="flex-center">About</h1>
      <div class="header_deco"></div>
    </div>
    <div class="about_container flex-center">
      <section>
        <h2 class="flex-center">About Me</h2>
        <div class="about-me_wrap">
          <div class="img_wrap"></div>
          <ul>
            <li v-for="(item, idx) in myFeatrueList" :key="idx">
              <h3>{{ item.head }}</h3>
              <p v-html="item.content"></p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2 class="flex-center">Work Style</h2>
        <ul>
          <li v-for="(item, idx) in workStyleList" :key="idx">
            <div class="flex-center">
              <img :src="item.img" :alt="item.head">
            </div>
            <div class="work-style_li_wrap">
              <h3>{{ item.head }}</h3>
              <p
                v-for="(item2, idx2) in item.content" :key="idx2"
                v-html="item2"
              >
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myFeatrueList: [
        {
          head: "성실함",
          content: "좋은 결과물을 만들기 위해 시간을 아끼지 않습니다."
        },
        {
          head: "꼼꼼함",
          content: "코드 한 줄이 불러올 사이드이펙트를 방지하기 위해<br /> 꼼꼼히 고민하여 코딩합니다."
        },
        {
          head: "학구열",
          content: "모르는 기술을 체득하기 위해 꾸준히 공부합니다."
        }
      ],
      workStyleList: [
        {
          img: require("@/assets/img/homepage/free-icon-chat-1650281.png"),
          head: "커뮤니케이션",
          content: ["모호한 요건사항은 대화를 통해 요건정립 후 개발을 진행합니다."]
        },
        {
          img: require("@/assets/img/homepage/free-icon-quote-request-7257807.png"),
          head: "산출물 관리",
          content: ["구두 요건사항의 문서 반영을 요청하여 개발을 진행합니다."]
        },
        {
          img: require("@/assets/img/homepage/free-icon-layers-1659098.png"),
          head: "통일성",
          content: ["기존 코드 스타일 분석 후 통일성을 지켜 개발을 진행합니다."]
        },
        {
          img: require("@/assets/img/homepage/free-icon-search-2040496.png"),
          head: "무결성",
          content: [
            "신규/수정건 개발시 사이드이펙트를 고려하여 개발을 진행합니다.",
            "테스트케이스 작성 및 충분한 테스트를 통해 무결성을 지킵니다."
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>