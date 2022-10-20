import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 模块化创建storeOptions
const stuOptions = {
    namespaced: true,
    actions: {
        add(context, param) {
            console.log('action add', param);
            context.commit('ADD', param);
        }
    },
    mutations: {
        ADD(state, param) {
            console.log('mutations add');
            const stuId =
                state.stus.length === undefined ? 1 : state.stus.length + 1;
            const stu = { id: stuId, stuName: stuId + '-' + param.stuName };
            state.stus.push(stu);
        }
    },
    state: { stus: [] },
    getters: {
        bigSum(state) {
            console.log(this);
            return state.stus.length * 10;
        }
    }
};
//创建store
export default new Vuex.Store({
    modules: {
        stuOptions
    }
});
