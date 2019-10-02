import axios from 'axios'

const createEmi = ({commit}, post) => {
    return axios.post('/emi/store', post)
        .then((res) => {
            commit('CREATE_EMI', res.data)
            return res;
        }).catch(err => {
        console.log(err)
    })
}
const getEmis = ({commit}, post) =>{
    return axios.post('/emi/index', post)
        .then((res) => {
            commit('FETCH_EMIS', res.data.emis)
            return res.data;
        }).catch(err =>console.log(err))
}
const removeEmis = ({commit}, post) =>{
    return axios.post('/emi/destroy', post)
        .then((res) => {
            commit('FETCH_EMIS', res.data.emis)
            return res.data;
        }).catch(err =>console.log(err))
}
let actions = {
    /* fetchPosts({commit}) {
        axios.get('/api/posts')
            .then(res => {
                commit('FETCH_POSTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    }, */
    /* deletePost({commit}, post) {
        axios.delete(`/api/posts/${post.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_POST', post)
            }).catch(err => {
            console.log(err)
        })
    } */
}

export {
    createEmi,
    getEmis,
    removeEmis
}