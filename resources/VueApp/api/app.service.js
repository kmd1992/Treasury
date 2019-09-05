import Config from '../config/app.config.js';
import appCache from './app.service.cache.js'

let wordpressService = {
   cacheRequest (path, cacheTime) {
      return new Promise((resolve, reject) => {
        appCache.get(path, cacheTime)
          .then(response => { resolve(response) })
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
  }
}

export default wordpressService
