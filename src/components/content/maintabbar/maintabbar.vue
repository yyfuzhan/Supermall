<template>
	<div id="app">

		<tabbar>
			<tabbarItem path="/home" >
				<img slot="item-icon" src="../../../assets/img/tabbar/home.png" alt="">
				<img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.png" alt="">
				<div slot="item-text">首页</div>
			</tabbarItem>
			<tabbarItem path="/category" >
				<img slot="item-icon" src="../../../assets/img/tabbar/category.png" alt="">
				<img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.png" alt="">
				<div slot="item-text">分类</div>
			</tabbarItem>
			<tabbarItem path="/cart" >
				<img slot="item-icon" src="../../../assets/img/tabbar/cart.png" alt="">
				<img slot="item-icon-active" src="../../../assets/img/tabbar/cart_active.png" alt="">
				<div slot="item-text">购物车</div>
			</tabbarItem>
			<tabbarItem path="/profile">
				<img slot="item-icon" src="../../../assets/img/tabbar/profile.png" alt="">
				<img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.png" alt="">
				<div slot="item-text">我的</div>
			</tabbarItem>
		</tabbar>
	</div>
</template>

<script>
	import tabbar from '../../common/tabbar/tabBar.vue'
	import tabbarItem from '../../common/tabbar/tabbarItem.vue'
	export default {
		name: 'App',
		components: {
			tabbar,
			tabbarItem,
		}
	}
</script>

<style scoped>
	@import url("../../../assets/css/base.css");
</style>
