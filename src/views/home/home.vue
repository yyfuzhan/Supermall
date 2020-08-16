<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center" >购物街</div></nav-bar>
    <tabcontrol :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabcontrol1" v-show="isFixed"></tabcontrol>
    <scroll class="wrapper" ref="scroll" :probetype="3" @scroll="contentscroll" :pull-up-load="true" @pullup="pullup">
      <home-swiper :banners='banners' @swiperimgload="swiperimgload"></home-swiper>
      <Recommend-view :recommend="recommends"></Recommend-view>
      <Feature-view></Feature-view>
      <tabcontrol :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabcontrol2"></tabcontrol>
      <goodsList :goods='goods[currenttype].list'></goodsList>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from './childcpn/HomeSwiper.vue'
  import RecommendView from './childcpn/RecommendView.vue'
  import FeatureView from './childcpn/FeatureView.vue'

  import NavBar from '../../components/common/navbar/NavBar.vue'
  import scroll from '../../components/common/scroll/scroll.vue'
  import tabcontrol from '../../components/content/tabcontrol/tabcontrol.vue'
  import goodsList from '../../components/content/goods/goodsList.vue'
  import backTop from '../../components/content/backtop/backTop.vue'

  import {getHomeMultidata, getHomeGoods} from '../../network/home.js'
  import {imgLoadMixin} from '../../common/mixin.js'

  export default {
    name: 'home',
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      scroll,
      tabcontrol,
      goodsList,
      backTop,
    },
    mixins:[imgLoadMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currenttype:'pop',
        isBackTop:false,
        offsetTop:0,
        isFixed:false,
        saveY:'',
        imgloadlisten:null
      }
    },

    created() {
      this.gethomemultidata()
      this.gethomegoods('pop')
      this.gethomegoods('new')
      this.gethomegoods('sell')
      //接收$bus传来的img加载事件。然后去scroll中做刷新
    },
    mounted(){
      //这里的东西因为和detail页面重复 所以封装在了mixin中做了混入
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,3000)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.scroll.scroll.y
      this.$bus.$off('imgloadfinish',this.imgloadlisten)
    },
    methods: {
			//tabControl点击事件
			tabClick(index){
				if(index==0){
          this.currenttype='pop'
        }else if(index==1){
           this.currenttype='new'
        }else{
           this.currenttype='sell'
        }
        this.$refs.tabcontrol1.currentIndex=index
        this.$refs.tabcontrol2.currentIndex=index
			},
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentscroll(position){
        this.isBackTop=-position.y>1000
        this.isFixed =-position.y>this.offsetTop

      },
      pullup(){
        this.gethomegoods(this.currenttype)
      },
      swiperimgload(){
        this.offsetTop=this.$refs.tabcontrol2.$el.offsetTop
      },

      //请求banner和recommend的数据
      gethomemultidata() {
        getHomeMultidata({}).then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      gethomegoods(type) {
        //请求流行、新款、精选
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page ++
          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
/*    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .wrapper{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
