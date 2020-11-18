<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
       <tab-menu :categories="categories"></tab-menu>
    </div>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import {getCategory} from '../../network/category.js'
  import TabMenu from './childcpn/TabMenu.vue'
  export default {
    name: 'category',
    components: {
      NavBar,
      TabMenu
    },
    data(){
      return{
        categories:[]
      }
    },
    created(){
      this.getcategory()
    },
    methods:{
      getcategory(){
        getCategory().then(res=>{
          this.categories=res.data.data.category.list
        })
      }
    }
  }
</script>

<style scoped="scoped">
  #category {
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    display: flex;
  }
</style>
