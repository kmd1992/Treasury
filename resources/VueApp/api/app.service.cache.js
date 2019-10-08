'use strict'

import Config from '../config/app.config';
import axios from 'axios'
import localforage from 'localforage'

axios.defaults.baseURL = Config.appDomain

const cacheService = {
    store: '',
    storeCacheTime: '',
    currentTime: '',
    isBrowser: false,
    networkRequest: (path, params, cacheTime, resolve, reject) => {
        cacheService.networkFirstStrategy(path, params,cacheTime).then(response => resolve(response)).catch(err => reject(err))
    },
    networkFirstStrategy: function(path, params, cacheTime) 
    {
        return new Promise(
            (resolve, reject) => {
                axios.get(path, params).then(response => {
                    // Response returned, cache it and return it
                    if (response.status === 200) 
                    {
                        if (!cacheService.isBrowser) {
                            resolve(response)
                            return
                        }
                        cacheService.storeCacheTime.setItem(
                            path,
                            cacheService.currentTime + cacheTime
                        )
                        cacheService.store.setItem(path, {
                            data: response.data,
                            headers: response.headers
                        }).then(response => resolve(response)).catch(err => reject(err))
                        return
                    }
                    if (!cacheService.isBrowser) {
                        reject(new Error('Cannot get ' + path))
                        return
                    }
                    cacheService.store.getItem(path).then(response => resolve(response)).catch(err => reject(err))
                }).catch(error => { console.log(error) })
            }
        )
    },
    offlineFirstStrategy: function(path, params, cacheTime) 
    {
        return new Promise(
            (resolve, reject) => {
                cacheService.storeCacheTime.getItem(path).then(function (timeLastCached) {
                    //Cache has expired
                if (timeLastCached < cacheService.currentTime) {
                    cacheService.networkRequest(path, params, cacheTime, resolve, reject)
                    return
                }
                cacheService.store.getItem(path).then(response => {
                    if (response) {
                        // Is in cache perfect!
                        resolve(response)
                    } else {
                        // Doesn't exist in cache try network
                        cacheService.networkRequest(path, params,cacheTime, resolve, reject)
                    }
                }).catch(error => {
                    console.log(error)
                    // Doesn't exist in cache try network
                    cacheService.networkRequest(path, params, cacheTime, resolve, reject)
                });
            }).catch(error => {
                    console.log(error)
                    // Doesn't exist in cache timeouts try network
                    cacheService.networkRequest(path, params, cacheTime, resolve, reject)
            })
            }
        )
    },
    get: function (path, params, cacheTime)
    {
        path = Config.appDomain + path
        return new Promise(
            (resolve, reject) => {
                cacheService.currentTime = Math.floor(Date.now() / 1000);
                cacheService.isBrowser = typeof window !== 'undefined';
                if (cacheService.isBrowser) {
                    cacheService.store = localforage.createInstance({name: Config.loadDbName})
                    cacheService.storeCacheTime = localforage.createInstance({name: Config.loadDbName + '_cacheTime'})
                }
                if (!cacheTime || cacheTime === 0) {
                    cacheService.networkFirstStrategy(path, params, 0).then(response => {
                        resolve(response || '')
                    }).catch(err => reject(err))
                }
                else 
                {
                    cacheService.offlineFirstStrategy(path, params, cacheTime).then(response => {
                        resolve(response || '')
                    }).catch(err => reject(err))
                }
            }
        )
    }
}

export default cacheService