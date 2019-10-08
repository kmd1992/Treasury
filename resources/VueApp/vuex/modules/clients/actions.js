import axios from 'axios'
import clientService from './service';

const getClients = ({state}) => 
{
   if (state.clients && state.clients.length > 0) {
      return
   }

   return new Promise(
      (resolve, reject) => {
         const params = { params: {} };
         clientService.getClientService('clients', params)
                       .then((resUsers) => {
                           const clients = resUsers.clients;
                           Promise.all(clients).then(resolClients => {
                                       state.clients = resolClients
                                       resolve()
                                   })
                        })
                        .catch(error => {
                           reject(error)
                        })
      }
   )
}
const createClient = ({commit, state}, post) => {
   return axios.post('/clients/store', post)
               .then((res) => {
                  var clients = res.data.clients;
                  state.clients = clients
                  commit('CREATE_CLIENTS',{ clients });
               })
               .catch(error => {
                     console.log(error)
               })
}
const getClientsDropdown = ({state}) => {
   if (state.clientsDropdown && state.clientsDropdown.length > 0) return;
   return new Promise(
      (resolve, reject) => {
         const params = { params: {} };
         clientService.getClientsDropdownService('clients/dropdown', params)
                       .then((response) => {
                           Promise.all(response.clients).then(resolClients => {
                                       state.clientsDropdown = resolClients
                                       resolve()
                                   })
                        })
                        .catch(error => {
                           reject(error)
                        })
   })
}
const getClientsResouces = ({state}, params) =>{
   return axios.get('/clients/resources', params)
               .then((res) => {
                  state.clientsResouces = res.data
                  return res.data;
               })
               .catch(error => {
                     console.log(error)
               })
}
const getClientsEvents = ({state}, params) =>{
   return axios.get('/clients/events', params)
               .then((res) => {
                  state.clientsEvents = res.data
                  return res.data;
               })
               .catch(error => {
                     console.log(error)
               })
}
const editProfile = ({state}, params) => {
   return axios.get('/clients/edit', params)
               .then((res) => {
                  state.clientsEdit = res.data
                  return res.data;
               })
               .catch(error => {
                     console.log(error)
               })
}
const updateClient = ({commit, state}, post) => {
   return axios.post('/clients/update', post)
               .then((res) => {
                  var client = res.data.client;
                  state.clientUpdate = client
                  commit('UPDATE_CLIENTS',{ client });
                  return res.data;
               })
               .catch(error => {
                     console.log(error)
               })
}
export {
   getClients,
   createClient,
   getClientsDropdown,
   getClientsResouces,
   getClientsEvents,
   editProfile,
   updateClient
}