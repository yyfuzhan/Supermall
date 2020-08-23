<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <tab-menu :categories="categories"></tab-menu>
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
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
  }
</style>
