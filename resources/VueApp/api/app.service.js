import Config from '../config/app.config.js';
import appCache from './app.service.cache.js'

let laravelService = {
   cacheRequest (path, cacheTime) 
   {
      return new Promise((resolve, reject) => {
         appCache.get(path, cacheTime)
                  .then(res => { resolve(res) })
                  .catch(err => { reject(err) })
      })
   },
   getUserService () 
   {
      return new Promise(
         (resolve, reject) => {
            let path = Config.appDomain + `users`;
            this.cacheRequest(path, 0)
               .then(
                   (response) => resolve(response.data)
               )
               .catch(error => reject(error))
         }
      );
   },
   getClientService:function() 
   {
      return new Promise(
         (resolve, reject) => {
            let apiPath = Config.appDomain + `clients`;
            this.cacheRequest(apiPath, 0).then(
                     (res) => {
                        resolve(res.data)
                     }
                  ).catch(error => reject(error))
         }
      );
   }
}

export default laravelService