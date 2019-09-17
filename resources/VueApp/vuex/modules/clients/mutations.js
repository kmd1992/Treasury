const FETCH_CLIENTS = (state, value) => {
  return state.clients = value
}
const CREATE_CLIENTS = (state, value) => {
  return state.clientsDropdown = Object.assign({}, state.clientsDropdown, value)
}

export {
  FETCH_CLIENTS,
  CREATE_CLIENTS
}