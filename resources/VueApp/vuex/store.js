import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user/index'
import pageModule from './modules/page/index'
import learningPathsModule from './modules/learning-paths/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    userStore : userModule,
    page : pageModule,
    learningPaths : learningPathsModule
  }
})