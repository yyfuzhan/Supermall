import {request} from './request.js'
export function getCategory(){
  return request({
    url: '/api/x6/category'
  })
}
