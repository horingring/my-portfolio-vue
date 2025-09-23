const commonStore = {
    namespaced: true,
    state: {
        gnbBoxOn: false,
        skills: [
            {
                stackName: "FrontEnd",
                stackList: [
                    {
                        skillName: "HTML",
                        img: require("@/assets/img/logos/html_logo.png")
                    },
                    {
                        skillName: "CSS",
                        img: require("@/assets/img/logos/css_logo.png")
                    },
                    {
                        skillName: "Javascript",
                        img: require("@/assets/img/logos/javascript_logo.png")
                    },
                    {
                        skillName: "Typescript",
                        img: require("@/assets/img/logos/typescript_logo.png")
                    },
                    {
                        skillName: "Vue",
                        img: require("@/assets/img/logos/vue_logo.png")
                    },
                    {
                        skillName: "Nuxt",
                        img: require("@/assets/img/logos/nuxt_logo.png")
                    },
                    {
                        skillName: "React",
                        img: require("@/assets/img/logos/react_logo.png")
                    },
                    {
                        skillName: "Next",
                        img: require("@/assets/img/logos/next_logo.png")
                    }
                ]
            },
            {
                stackName: "BackEnd",
                stackList: [
                    {
                        skillName: "Java",
                        img: require("@/assets/img/logos/java_logo.png")
                    },
                    {
                        skillName: "Spring",
                        img: require("@/assets/img/logos/spring_logo.png")
                    },
                    {
                        skillName: "MySQL",
                        img: require("@/assets/img/logos/mysql_logo.png")
                    }
                ]
            },
            {
                stackName: "Others",
                stackList: [
                    {
                        skillName: "Git",
                        img: require("@/assets/img/logos/git_logo.png")
                    },
                    {
                        skillName: "GitHub",
                        img: require("@/assets/img/logos/github_logo.png")
                    },
                    {
                        skillName: "GitLab",
                        img: require("@/assets/img/logos/gitlab_logo.png")
                    },
                    {
                        skillName: "BitBucket",
                        img: require("@/assets/img/logos/bitbucket_logo.png")
                    },
                    {
                        skillName: "Figma",
                        img: require("@/assets/img/logos/figma_logo.png")
                    },
                    {
                        skillName: "Zeplin",
                        img: require("@/assets/img/logos/zeplin_logo.png")
                    }
                ]
            }
        ]
    },
    getters: {},
    mutations: {
        SET_GNB_BOX_ON(state) {
            state.gnbBoxOn = !state.gnbBoxOn;
        }
    },
    actions: {}
};

export default commonStore;