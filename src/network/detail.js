import {request} from './request.js'
export function getdetail(iid) {
  return request({
    url: '/api/h8/detail',
    params:{
      iid
    }
  })
}

export function getrecommend() {
  return request({
    url: '/api/h8/recommend'
  })
}

//构造函数:
//constructor(几个需要传入的参数名)
// 以形式this.name=name赋值
// 然后外面new Goods (传入真实的参数 比如"18","fz",此时Goods.name=fuzhan)
//这部分代码也可以放在组件的created()中

export class Goods{
  constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.nowPrice = itemInfo.highNowPrice;
  }
}



export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
export class Param{
	constructor(info,rule) {
      this.image = info.images ? info.images[0] : '';
	    this.info=info.set
			this.size=rule.tables
	}
}
