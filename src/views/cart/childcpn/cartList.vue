<template>
	<div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList " :key="index" :obj="item"></cart-list-item>
    </scroll>
	</div>
</template>

<script>
  import scroll from '../../../components/common/scroll/scroll.vue'
  import cartListItem from './cartListItem.vue'
  import {mapGetters} from 'vuex'
	export default {
		name:'cartList',
    components:{
      scroll,
      cartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
	}
</script>

<style scoped="scoped">
  .cart-list{
    height:calc(100vh - 133px);
    background-color: white;
  }
  .content{
    height: 100%;
    overflow: hidden;
    }
</style>
