const FETCH_CLIENTS = (state, value) => {
  return state.clients = value
}
const CREATE_CLIENTS = (state, value) => {
  return state.clientsDropdown = Object.assign({}, state.clientsDropdown, value)
}
const UPDATE_CLIENTS = (state, value) => {
  return state.clientUpdate = Object.assign({}, state.clientUpdate, value)
}

export {
  FETCH_CLIENTS,
  CREATE_CLIENTS,
  UPDATE_CLIENTS
}