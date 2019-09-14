import laravelService from '../../../api/app.service';

const getClientList = ({state}) => 
{
   if (state.clients && state.clients.length > 0) {
      return
   }

   return new Promise( 
      (resolve, reject) => {
         laravelService.getClientService()
                       .then((resUsers) => {
                           const clients = resUsers.clients;
                           Promise.all(clients)
                                  .then(resolClients => {
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

export {
   getClientList
}
