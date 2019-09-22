import axios from 'axios'
import laravelService from '../../../api/app.service';

const getClients = ({state}) => 
{
   if (state.clients && state.clients.length > 0) {
      return
   }

   return new Promise(
      (resolve, reject) => {
         laravelService.getClientService()
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
         laravelService.getClientsDropdownService()
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

export {
   getClients,
   createClient,
   getClientsDropdown,
   getClientsResouces
}
