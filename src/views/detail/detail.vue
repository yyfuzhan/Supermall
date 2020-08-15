<template>
	<div id="detail"><!-- 外层设置相对定位 -->
    <detailnavbar class="detail-nav"></detailnavbar>
    <scroll class="content" ref="scroll"> <!-- 一定要设置个高度（即”滚动区域“） -->
      <detailswiper :topimages="topimage"></detailswiper>
      <detail-base-info :goods="Goods"></detail-base-info>
      <shopinfo :shop="shopInfo"></shopinfo>
      <detailinfo :detailinfo="detailinfo" @imgload="imgload"></detailinfo>
      <detailparamsinfo :paramInfo="itemParams"></detailparamsinfo>
      <detailcommentinfo :commentinfo="commentinfo"></detailcommentinfo>
      <goods-list :goods="recommend"></goods-list>
    </scroll>
	</div>
</template>

<script>
  import detailnavbar from './childcpn/detailnavbar.vue'
  import {getdetail,getrecommend,Goods,Shop,Param} from '../../network/detail.js'
  import detailswiper from './childcpn/detailswiper.vue'
  import detailBaseInfo from './childcpn/detailBaseInfo.vue'
  import shopinfo from './childcpn/shopinfo.vue'
  import scroll from '../../components/common/scroll/scroll.vue'
  import detailinfo from './childcpn/detailinfo.vue'
  import detailparamsinfo from './childcpn/detailparamsinfo.vue'
  import detailcommentinfo from './childcpn/detailcommentinfo.vue'
  import goodsList from '../../components/content/goods/goodsList.vue'

	export default {
		name:'detail',
    components: {
      detailnavbar,
      detailswiper,
      detailBaseInfo,
      shopinfo,
      scroll,
      detailinfo,
      detailparamsinfo,
      detailcommentinfo,
      goodsList
    },
    data(){
      return{
        iid:null,
        topimage:[],
        Goods:{},
        shopInfo:{},
        detailinfo:{},
        itemParams:{},
        commentinfo:{},
        recommend:[]
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
