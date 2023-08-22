const commonStore = {
    namespaced: true,
    state: {
        gnbBoxOn: false
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