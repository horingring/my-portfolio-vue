const projectStore = {
    namespaced: true,
    state: {
        projectList: [
            {
                id: 4,
                title: "My Portfolio_Vue",
                subTitle: "My Portfolio_Vue",
                mainImg: require("@/assets/img/career/project_4/my-portfolio-vue_main.png"),
                color: "#42b883",
                from: "2023.08",
                to: "2023.09"
            },
            {
                id: 3,
                title: "LG U+ 유료구독 플랫폼 유독",
                subTitle: "LG U+ 유독",
                mainImg: require("@/assets/img/career/project_3/udok_main.png"),
                color: "#e6017e",
                from: "2022.05",
                to: "2023.08"
            },
            {
                id: 2,
                title: "KB 글로벌 인터넷/스마트 뱅킹",
                subTitle: "KB 글로벌 뱅킹",
                mainImg: require("@/assets/img/career/project_2/kb-global-banking_main.png"),
                color: "#ffd719",
                from: "2021.12",
                to: "2022.05"
            },
            {
                id: 1,
                title: "요식업플랫폼 주막",
                subTitle: "요식업플랫폼 주막",
                mainImg: require("@/assets/img/career/project_1/joomak_main.png"),
                color: "#fec562",
                from: "2021.04",
                to: "2021.12"
            },
            {
                id: 0,
                title: "My Portfolio_React",
                subTitle: "My Portfolio_React",
                mainImg: require("@/assets/img/career/project_0/my-portfolio-react_main.png"),
                color: "#4a4291",
                from: "2020.12",
                to: "2021.03"
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {}
};

export default projectStore;