const CREATE_EMI = (state, emiResponse) => {
    return state.emi = Object.assign({}, state.emi, emiResponse);
}
const FETCH_EMIS = (state, emi) => {
    return state.emis = emi
}
const DELETE_POST = (state, emi) => {
    let index = state.emis.findIndex(item => item.id === emi.id)
    state.posts.splice(index, 1)
}

export {
    CREATE_EMI,
    FETCH_EMIS,
    DELETE_POST
}
