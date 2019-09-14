import axios from 'axios'

const createEmi = ({commit}, post) => {
    axios.post('/emi/store', post)
        .then(res => {
            console.log(res);
            commit('CREATE_POST', res.data)
        }).catch(err => {
        console.log(err)
    })
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
    createEmi
}