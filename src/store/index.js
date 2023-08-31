import { createStore } from "vuex";
import commonStore from "./modules/commonStore";
import projectStore from "./modules/projectStore";

const store = {
    modules: {
        commonStore,
        projectStore
    }
};

export default createStore(store);