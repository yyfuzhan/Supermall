import {debounce} from './utils.js';
 import backTop from '../components/content/backtop/backTop.vue'
//导入debounce后 对imgLoadMixin做混入
//因为home页和detail页都需要用到这部分图片加载后刷新的代码,而因为不能太频繁刷新 所以做debounce防抖
export const imgLoadMixin = {
  mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,50)
      this.imgloadlisten=()=>{
       refresh()
      }
      this.$bus.$on('imgloadfinish',this.imgloadlisten)
  }
}
export const backTopMixin={
  components:{
    backTop
  },
  data(){
    return{
       isBackTop:false
    }
  },
  methods:{
    backClick(){
       this.$refs.scroll.scrollTo(0,0)
    }
  }
}
