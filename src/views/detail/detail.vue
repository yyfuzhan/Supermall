<template>
	<div id="detail"><!-- 外层设置相对定位 -->
    <detail-navbar class="detail-nav"></detail-navbar>
    <scroll class="content" ref="scroll"> <!-- 一定要设置个高度（即”滚动区域“） -->
      <detail-swiper :topimages="topimage"></detail-swiper>
      <detail-base-info :goods="Goods"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-info :detailinfo="detailinfo" @imgload="imgload"></detail-info>
      <detail-paramsinfo :paramInfo="itemParams"></detail-paramsinfo>
      <detail-commentinfo :commentinfo="commentinfo"></detail-commentinfo>
      <goods-list :goods="recommend"></goods-list>
    </scroll>
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

  import scroll from '../../components/common/scroll/scroll.vue'
  import goodsList from '../../components/content/goods/goodsList.vue'

  import {getdetail,getrecommend,Goods,Shop,Param} from '../../network/detail.js'
  //导入封装好的混入文件
  import {imgLoadMixin} from '../../common/mixin.js'

	export default {
		name:'detail',
    components: {
      detailNavbar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      detailInfo,
      detailParamsinfo,
      detailCommentinfo,
      scroll,
      goodsList
    },
    //以数组形式存放
    mixins:[imgLoadMixin],
    data(){
      return{
        iid:null,
        topimage:[],
        Goods:{},
        shopInfo:{},
        detailinfo:{},
        itemParams:{},
        commentinfo:{},
        recommend:[],
        imgloadlisten:null
      }
    },
    created(){
      //保存传入的iid
      this.iid=this.$route.params.iid
      //用保存到iid作为参数 发送网络请求
      //请求详情数据
      getdetail(this.iid).then(res=>{
        const data=res.data.result
        this.topimage=data.itemInfo.topImages
        this.Goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo= new Shop(data.shopInfo)
        this.detailinfo=data.detailInfo
        this.itemParams=new Param(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate!==0){
          this.commentinfo=data.rate.list[0]
        }
      })
      //请求推荐数据
      getrecommend().then(res=>{
        this.recommend=res.data.data.list
        console.log(this.recommend)
      })

    },
    destroyed(){
      this.$bus.$off('imgloadfinish',this.imgloadlisten)
    },
    mounted(){
    //这里的东西因为和home页面重复 所以封装在了mixin中做了混入
    },

    methods:{

      imgload(){
        this.$refs.scroll.refresh()
      }
    }
	}
</script>

<style scoped="scoped">
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
  }
  .detail-nav{

  }
</style>
