import laravelService from '../../../api/app.service';

const getUserAction = ({state}) => 
{
   if (state.users && state.users.length > 0) {
      return
   }

   return new Promise( 
      (resolve, reject) => {
         laravelService.getUserService('users').then((responseUsers) => {
            const users = responseUsers.users
            Promise.all(users).then(resolveUsers => {
               state.users = resolveUsers
               resolve()
            })
         }).catch(error => {
            reject(error)
         })
      }
   )
}

export {
   getUserAction
}
