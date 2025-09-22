<template>
  <div class="career-detail-page_content content_5">
    <CareerDetailHeader />
    <main>
      <section>
        <CareerDetailCarousel :slides="slides" />
      </section>
      <section>
        <h2>🛠️ Used Tech & Tool</h2>
        <ul>
          <li>FrontEnd : React.js, Next.js, TypeScript, React-Query, MUI, Emotion</li>
          <li>Infra & Ops : Nginx, Docker, Github, Github Desktop, Figma</li>
        </ul>
      </section>
      <section class="about_section">
        <h2>📖 개요</h2>
        <ul>
          <li>개요 : 자사 내 통합 재난안전 플랫폼을 비롯한 모든 시스템의 프론트엔드 파트를 단독 담당하였습니다.</li>
        </ul>
      </section>
      <section>
        <h2>🔖 메인업무</h2>
        <ul>
          <li>
            <h3>FrontEnd & Etc</h3>
            <ul>
              <li>- 10개 이상 지자체 납품 재난안전통합플랫폼 프론트엔드 파트 단독 담당</li>
              <li>- 플랫폼 내 공통 재난안전 시스템 및 지역별 특화 시스템 연구개발 및 유지보수</li>
              <li>- 신규 지자체 프로젝트 프론트엔드/네트워크/인프라 셋업 및 운영환경 구축</li>
              <li>- 기획·설계 단계부터 API 협의 및 데이터 모델링 책임 분담까지 전 주기 참여</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="meaning_section">
        <h2>✨ Meaning</h2>
        <ul>
          <li>
            <h3>[&nbsp;&nbsp;FrontEnd&nbsp;&nbsp;]</h3>
            <ul>
              <li>
                <h4>컨벤션 수립을 통한 일관성 개선</h4>
                <blockquote>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;입사 초기 당시 여러 외부인력이 프로젝트에 참여하고 있었기에 네이밍, 소스 분리, 상태관리 방식이 상이했었고, 동일 역할의 컴포넌트가 다른 사용방식으로 중복 존재하고 있었습니다. 또한 서비스 특성상 지역 분기가 많았으나 소스 곳곳에서 개별 분기로 처리되고 있어 전체 흐름을 읽기 어려웠습니다. 소스 분석과 유지보수를 어렵게 만드는 공통 원인이 ‘일관성 결여’라고 판단하였고, 이에 해당 항목들에 대한 팀 컨벤션을 수립/정착 시켰습니다.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;컴포넌트 단에서는 확장성을 고려한 props 및 children 정의를 통해 공통화를 적용하여 역할 중복을 제거해 나갔고, 폴더 구조(소스 분리)는 의미/역할을 기준으로 재편하여 컴포넌트의 위치를 일관되게 위치시켰으며, 렌더링부와 비즈니스 로직부를 분리해 가독성과 재사용성을 높이고자 하였습니다. 결과적으로 향후 개발에서 재사용 비율이 증가했고, 지역 분기 역시 상수를 통한 설정 기반 구조로 개선하여 가독성 저하를 낮추었습니다.
                  </p>
                </blockquote>
              </li>
              <li>
                <h4>라이브러리 도입 절차 수립</h4>
                <blockquote>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;기존에는 라이브러리 충돌 및 패키지 관리가 미흡한 상태였어서 패키지 설치 시 강제 설치 옵션이 불가피 하였습니다. 우선적으로 이같은 문제가 향후 추가적으로 발생하는 것을 막기 위해 라이브러리 신규 도입 시 도입 사유, 신뢰도, 호환성, 충돌 가능성을 사전 점검하고, 해당 기준에 따라 승인 절차를 거치는 약속을 마련하였습니다. 또한 관련 내용에 대한 PR 내 기재를 의무화하여 향후 히스토리 파악 비용을 줄였습니다. 이러한 문화가 정착된 이후 더 이상 추가적인 라이브러리 충돌 사항이 없는 단계까지 도달하였으며, 이후부터는 점진적으로 라이브러리 간 기존의 충돌을 모두 정상화 할 수 있었습니다. 이와 같은 기준 수립 및 도입을 통하여 장기적인 패키지 충돌 빈도를 낮추고 유지보수성을 확보해낼 수 있었습니다.
                  </p>
                </blockquote>
              </li>
            </ul>
          </li>
          <li>
            <h3>[&nbsp;&nbsp;인프라·네트워크·IoT 등 FrontEnd 외적 경험&nbsp;&nbsp;]</h3>
            <ul>
              <li>
                <h4>배포 표준화 및 반 자동화</h4>
                <blockquote>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;기존에는 지역별로 상이한 수동 배포 방식으로 인하여 운영 복잡도 및 대응 소요 시간이 높았습니다. 이에 최대한 동일한 방식의 배포 반 자동화를 목표로 두었습니다.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;인프라 쪽은 경험이 적었었기에, 일정 기간 동안은 지역별로 수동배포를 직접 진행하며 배포가 이루어지는 절차와 그 과정에서 사용되는 기술들, 지역별로 방식을 다르게 했던 이유를 먼저 이해해 나갔습니다. 배포가 익숙해지고 지역별 차이를 알게된 이후, 목표한 배포를 위해서는 Docker가 적절함을 알게 되었습니다. 여러 고민과 시도 끝에 환경 변수 기반의 쉘 스크립트를 작성하여 원격 접속이 가능한 지역은 동일한 절차로 무정지에 가깝게 배포할 수 있게 되었으며, 원격 배포가 불가능하더라도 Docker를 통한 일관된 환경 셋팅으로 인계 인력의 학습 비용을 절감할 수 있었습니다.
                  </p>
                </blockquote>
              </li>
              <li>
                <h4>시야 확장: 소프트웨어에서 구성 시스템 전체로</h4>
                <blockquote>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;장비 연동, 네트워크 구성, 인프라 셋업까지 직접 다루면서 소프트웨어 내부만이 아니라 외부 요인도 개발의 변수로 고려하게 되는 시야의 확장을 경험하였습니다. 장비에 대한 제어 요청 흐름을 검토하면서, 어떤 설계가 현재 상황에서 트래픽 부하를 적절히 나눌 수 있을지와 같은 사항들에 대해 토론하는 감각을 키웠고, 이를 통해 시스템을 볼 때 단일 레이어가 아닌 시스템 전체 구성요소의 관점에서 사고하게 되었습니다. 또한 이러한 시야를 바탕으로 이슈의 원인 특정 시 소프트웨어 외부 요인 또한 능동적으로 의심하고 교차 검증할 수 있게 되었습니다. 실제로 오산 빗물펌프장 연계 개발 당시, 문제의 근원이 애플리케이션이 아닌 장비/PLC 측임을 조기에 특정하여 빠른 원인 해결에 기여할 수 있었습니다.
                  </p>
                </blockquote>
              </li>
              <li>
                <h4>협업에서의 성장</h4>
                <blockquote>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;프로젝트 또는 클라이언트(주무관)의 추상적인 요구사항에 대하여, 개발 전·중·후 내내 기획자님과 협업하여 의도를 재확인 / 논의 및 조율 / 구체화를 반복함으로써, 클라이언트-기획-개발 간 나타나는 의사 불일치의 감소와 각 파트별로 중시하는 가중치의 협의점을 맞추어 나가는 문화 형성에 일조하였습니다.
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;개인적으로는 언젠가 제 이후 들어올 인계자 분과 문서를 통해 대화를 한다는 생각으로, 작은 변경이라도 Git Message 및 PR에 꼼꼼히 반영하여 그 배경과 변경 사유 등 히스토리를 용이하게 파악할 수 있도록 꾸준히 노력을 이어나가고 있습니다.
                  </p>
                </blockquote>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import CareerDetailHeader from "@/components/careerPage/detail/CareerDetailHeader.vue";
import CareerDetailCarousel from "@/components/careerPage/detail/CareerDetailCarousel.vue";

export default {
  components: {
    CareerDetailHeader,
    CareerDetailCarousel
  },
  data() {
    return {
      slides: [
        {
          src: require("@/assets/img/career/project_5/kiot_0.png"),
          alt: "kiot_0"
        },
        {
          src: require("@/assets/img/career/project_5/kiot_1.png"),
          alt: "kiot_1"
        },
        {
          src: require("@/assets/img/career/project_5/kiot_2.png"),
          alt: "kiot_2"
        },
        {
          src: require("@/assets/img/career/project_5/kiot_3.png"),
          alt: "kiot_3"
        },
        {
          src: require("@/assets/img/career/project_5/kiot_4.png"),
          alt: "kiot_4"
        },
        {
          src: require("@/assets/img/career/project_5/kiot_5.png"),
          alt: "kiot_5"
        },
        {
          src: require("@/assets/img/career/project_5/kiot_6.png"),
          alt: "kiot_6"
        },
      ]
    };
  }
}
</script>

<style>

</style>