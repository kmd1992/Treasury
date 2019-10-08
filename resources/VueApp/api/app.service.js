import appCache from './app.service.cache.js'
let laravelService = 
{
   cacheRequestGet:function(path, cacheTime) 
   {
      return new Promise((resolve, reject) => {
         appCache.get(path, cacheTime).then(res => resolve(res)).catch(err => reject(err))
      })
   },
   getUserService:function(apiPath) 
   {
      return new Promise(
         (resolve, reject) => {
            this.cacheRequestGet(apiPath, 0).then(
                  (response) => resolve(response.data)
            ).catch(error => reject(error))
         }
      );
   },
}

export default laravelService