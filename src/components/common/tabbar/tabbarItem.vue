<template>
	<div class="tab-bar-item" @click="itemClick">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tabbarItem',
		props: {
			path: String,
			activeColor:{
				default:'palevioletred'
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive ? {color:this.activeColor}:{}
			}
		},
		methods: {
			itemClick() {
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}

	.tab-bar-item>img {
		margin-top: 3px;
		height: 24px;
		width: 24px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
.active{
	color: palevioletred;
}

</style>
