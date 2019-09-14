const CREATE_POST = (state, emi) => {
    state.emis.unshift(emi)
}
const FETCH_POSTS = (state, emi) => {
        return state.emis = emi
}
const DELETE_POST = (state, emi) => {
    let index = state.emis.findIndex(item => item.id === emi.id)
    state.posts.splice(index, 1)
}

export {
    CREATE_POST,
    FETCH_POSTS,
    DELETE_POST
}
