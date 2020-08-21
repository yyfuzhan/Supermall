<template>
	<div id="cart">
		<nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-buttom-bar></cart-buttom-bar>
	</div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'

  import cartList from './childcpn/cartList.vue'
  import cartButtomBar from './childcpn/cartButtomBar.vue'

  //将store中的getters映射到局部computed计算属性
  import {mapGetters} from 'vuex'
	export default {
		name:'cart',
    components:{
      NavBar,
      cartList,
      cartButtomBar
    },
    computed:{
      //这个流程相当于说 先从计算属性中去访问getters 再从getters中访问state
      // cartListLength(){
      //   return this.$store.getters.cartListLength
      // }

      //这个方法相当于直接从计算属性中拿到了getters中的cartListLength，省了指向getters的一行代码
      ...mapGetters(['cartListLength'])
    }
	}
</script>

<style scoped="scoped">
  #cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
