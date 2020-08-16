import {debounce} from './utils.js';
//导入debounce后 对imgLoadMixin做混入
export const imgLoadMixin = {
  mounted(){
      const refresh=debounce(this.$refs.scroll.refresh,50)
      this.imgloadlisten=()=>{
       refresh()
      }
      this.$bus.$on('imgloadfinish',this.imgloadlisten)
  }
}
