import {request} from './request.js'
export function getHomeMultidata() {
  return request({
    url: '/api/x6/home/multidata',

  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/api/x6/home/data',
    params:{
      type,
      page,
    }
  })
}
