<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'tabBar'
	}
</script>

<style scoped>
	#tab-bar {
		display: flex;
		background-color: #f2f2f2;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		box-shadow: 0px -2px 10px rgba(100, 100, 100, .15);
	}

</style>
