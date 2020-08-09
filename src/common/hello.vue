<template>
	<div>
		<button @click="dd">11</button>
		<h2>{{message}}</h2>
	</div>
</template>

<script>
	export default {
		name:'hello',
		data(){
			return{
				message:''
			}
		},
		methods:{
			dd(){
				this.message="你好"
			}
		}
	}
</script>

<style>
</style>
