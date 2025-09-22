import router from "@/routes/index.js";

const projectStore = {
    namespaced: true,
    state: {
        projectList: [
            {
                id: 5,
                title: "한국IOT기술원",
                subTitle: "한국IOT기술원",
                url: "https://kiot21.com/",
                mainImg: require("@/assets/img/career/project_5/kiot_0.png"),
                color: "#31b4de",
                from: "2024.05",
                to: ""
            },
            {
                id: 4,
                title: "My Portfolio_Vue",
                subTitle: "My Portfolio_Vue",
                url: "https://horingring.github.io/my-portfolio-vue/",
                mainImg: require("@/assets/img/career/project_4/my-portfolio-vue_0.png"),
                color: "#3ce8d6",
                from: "2023.08",
                to: "2023.09"
            },
            {
                id: 3,
                title: "LG U+ 유료구독 플랫폼 유독",
                subTitle: "LG U+ 유독",
                url: "https://www.lguplus.com/pogg/",
                mainImg: require("@/assets/img/career/project_3/udok_0.png"),
                color: "#e6017e",
                from: "2022.05",
                to: "2023.08"
            },
            {
                id: 2,
                title: "KB 글로벌 인터넷/스마트 뱅킹",
                subTitle: "KB 글로벌 뱅킹",
                url: "https://kbglobal.kbstar.com/",
                mainImg: require("@/assets/img/career/project_2/kb-global-banking_0.png"),
                color: "#ffd719",
                from: "2021.12",
                to: "2022.05"
            },
            {
                id: 1,
                title: "요식업플랫폼 주막",
                subTitle: "요식업플랫폼 주막",
                url: "http://dev-joomak-delivery.s3-website.ap-northeast-2.amazonaws.com/",
                mainImg: require("@/assets/img/career/project_1/joomak_0.png"),
                color: "#fec562",
                from: "2021.05",
                to: "2021.12"
            },
            {
                id: 0,
                title: "My Portfolio_React",
                subTitle: "My Portfolio_React",
                url: "https://horingring.github.io/my-portfolio/",
                mainImg: require("@/assets/img/career/project_0/my-portfolio-react_0.png"),
                color: "#4a4291",
                from: "2020.12",
                to: "2021.03"
            }
        ]
    },
    getters: {
        currentProject(state) {
            let currentProject = {
                id: null,
                title: null,
                subTitle: null,
                url: null,
                mainImg: null,
                color: null,
                from: null,
                to: null
            };

            if (router.currentRoute.value.params && router.currentRoute.value.params.careerId) {
                for (let i=0; i<state.projectList.length; i++) {
                    if (Number(router.currentRoute.value.params.careerId) == Number(state.projectList[i].id)) {
                        currentProject = state.projectList[i];
                        break;
                    }
                }
            }

            return currentProject;
        }
    },
    mutations: {},
    actions: {}
};

export default projectStore;