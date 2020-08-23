<template>
	<div @click="itemClick">
    {{categorie.title}}
	</div>
</template>

<script>
	export default {
		name:'TabMenuList',
    props:{
      categorie:{
        type:Object,
        default (){
          return{}
        }
      }
    },
    methods:{
      itemClick(){
        console.log( this.categorie.title)
      }
    }
	}
</script>

<style scoped="scoped">

</style>
