<template>
  <div id="detail">
    <!-- 外层设置相对定位 -->
    <detail-navbar class="detail-nav" @navClick="navClick" ref="navbar"></detail-navbar>

    <scroll class="content" ref="scroll" @scroll="scroll" :probetype="3">
      <!-- 一定要设置个高度（即”滚动区域“） -->
      <detail-swiper :topimages="topimage"></detail-swiper>
      <detail-base-info :goods="Goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-info :detailinfo="detailinfo" @imgload="imgload"></detail-info>
      <detail-paramsinfo :paramInfo="itemParams" ref='paraminfo'></detail-paramsinfo>
      <detail-commentinfo :commentinfo="commentinfo" ref='commentinfo'></detail-commentinfo>
      <goods-list :goods="recommend" ref='goodslist'></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
  import detailNavbar from './childcpn/detailnavbar.vue'
  import detailSwiper from './childcpn/detailswiper.vue'
  import detailBaseInfo from './childcpn/detailBaseInfo.vue'
  import detailShopInfo from './childcpn/shopinfo.vue'
  import detailInfo from './childcpn/detailinfo.vue'
  import detailParamsinfo from './childcpn/detailparamsinfo.vue'
  import detailCommentinfo from './childcpn/detailcommentinfo.vue'
  import detailBottomBar from'./childcpn/detailBottomBar.vue'

  import scroll from '../../components/common/scroll/scroll.vue'
  import goodsList from '../../components/content/goods/goodsList.vue'

  import {
    getdetail,
    getrecommend,
    Goods,
    Shop,
    Param
  } from '../../network/detail.js'
  //导入封装好的混入文件
  import {
    imgLoadMixin,backTopMixin
  } from '../../common/mixin.js'

  export default {
    name: 'detail',
    components: {
      detailNavbar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      detailInfo,
      detailParamsinfo,
      detailCommentinfo,
      scroll,
      goodsList,
      detailBottomBar
    },
    //以数组形式存放
    mixins: [imgLoadMixin,backTopMixin],
    data() {
      return {
        iid: null,
        topimage: [],
        Goods: {},
        shopInfo: {},
        detailinfo: {},
        itemParams: {},
        commentinfo: {},
        recommend: [],
        imgloadlisten: null,
        detailoffsetTop:0,
        detailoffsetTop0:0,
        detailoffsetTop1:0,
        detailoffsetTop2:0,
        detailoffsetTop3:0,
      }
    },
    created() {
      //保存传入的iid
      this.iid = this.$route.params.iid
      //用保存到iid作为参数 发送网络请求
      //请求详情数据
      getdetail(this.iid).then(res => {
        const data = res.data.result
        this.topimage = data.itemInfo.topImages
        this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.Goods)
        this.shopInfo = new Shop(data.shopInfo)
        this.detailinfo = data.detailInfo
        this.itemParams = new Param(data.itemParams.info, data.itemParams.rule)
        if (data.rate.cRate !== 0) {
          this.commentinfo = data.rate.list[0]
        }
      })
      //请求推荐数据
      getrecommend().then(res => {
        this.recommend = res.data.data.list
                //作防抖 实现点击跳转到正确位置

      })
    },
    updated(){

    },
    destroyed() {
      this.$bus.$off('imgloadfinish', this.imgloadlisten)
    },
    mounted() {
      //这里的东西因为和home页面重复 所以封装在了mixin中做了混入

    },

    methods: {
      imgload() {
        this.$refs.scroll.refresh()
        //等图片加载完之后拿到各组件的offsetTop属性 并存储
        this.detailoffsetTop1=this.$refs.paraminfo.$el.offsetTop
        this.detailoffsetTop2=this.$refs.commentinfo.$el.offsetTop
        this.detailoffsetTop3=this.$refs.goodslist.$el.offsetTop
      },
      navClick(index) {
        //判断点击哪个item并滚动到对应位置
        if (index == 0) {
          this.detailoffsetTop=0
        } else if (index == 1) {
          this.detailoffsetTop=this.detailoffsetTop1
        } else if (index == 2) {
         this.detailoffsetTop=this.detailoffsetTop2
        } else {
         this.detailoffsetTop=this.detailoffsetTop3
        }
        this.$refs.scroll.scrollTo(0,-this.detailoffsetTop)
      },
      scroll(position){
        this.isBackTop=-position.y>1000
         //根据滚动到的位置设置对应的高亮navbar-item的currentindex属性
        if (-position.y<this.detailoffsetTop1){
          this.$refs.navbar.currentIndex=0
        }else if (-position.y>=this.detailoffsetTop1&&-position.y<this.detailoffsetTop2){
          this.$refs.navbar.currentIndex=1
        }else if (-position.y>=this.detailoffsetTop2&&-position.y<this.detailoffsetTop3){
          this.$refs.navbar.currentIndex=2
        }else if (-position.y>=this.detailoffsetTop3){
          this.$refs.navbar.currentIndex=3
        }
      },
      addCart(){
        //加入购物车
        let obj={}
        obj.image=this.topimage[0]
        obj.title=this.Goods.title
        obj.desc=this.Goods.desc
        obj.price=this.Goods.nowPrice
        obj.iid=this.iid
        this.$store.dispatch('addcart',obj)
      }
    }
  }
</script>

<style scoped="scoped">
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }

</style>
