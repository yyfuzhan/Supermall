<template>
	<div class="CheckButton" :class="{check:isCheck}">
		<img src="../../../assets/img/cart/tick.svg" >
	</div>
</template>

<script>
	export default {
		name:'CheckButton',
    props:{
      isCheck:{
        type:Boolean,
        default:true
      }
    }
	}
</script>

<style scoped="scoped">
  .CheckButton{
    border-radius: 100%;
    background-color: white;
    border: solid 2px #aaa;
  }
  .check{
    border-color:  var(--color-tint);
    background-color:  var(--color-tint);
  }
</style>
