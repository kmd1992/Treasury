import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './modules/user/index'
import pageModule from './modules/page/index'
import learningPathsModule from './modules/learning-paths/index'
import emiModule from './modules/emi/index';
import clientModule from './modules/clients/index';
import loanModule from './modules/loan/index';

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        userStore : userModule,
        page : pageModule,
        learningPaths : learningPathsModule,
        emi : emiModule,
        clientStore: clientModule,
        loan : loanModule 
    }
})