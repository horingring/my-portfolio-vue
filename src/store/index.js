import { createStore } from "vuex";
import commonStore from "./modules/commonStore";

const store = {
    modules: {
        commonStore
    }
};

export default createStore(store);