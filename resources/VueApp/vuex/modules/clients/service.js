import appCache from '../../../api/app.service.cache.js';
let clientService = 
{
   cacheRequestGet:function(path, params, cacheTime) 
   {
      return new Promise((resolve, reject) => {
         appCache.get(path, params, cacheTime).then(res => resolve(res)).catch(err => reject(err))
      })
   },
   getClientService:function(apiPath, params)
   {
      return new Promise(
         (resolve, reject) => {
            this.cacheRequestGet(apiPath, params, 0).then(
               (res) => {
                  resolve(res.data)
               }
            ).catch(error => reject(error))
         }
      );
   },
   getClientsDropdownService:function(apiPath, params){
      return new Promise(
         (resolve, reject) => {
            this.cacheRequestGet(apiPath, params, 0).then(
               (res) => {
                  resolve(res.data)
               }
            ).catch(error => reject(error))
      });
   }
}
export default clientService