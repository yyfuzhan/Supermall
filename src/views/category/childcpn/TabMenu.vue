<template>
	<div>
   <tab-menu-list v-for="item in categories"  :categorie="item"></tab-menu-list>
	</div>
</template>

<script>
  import TabMenuList from './TabMenuList.vue'
	export default {
		name:'TabMenu',
    props:{
      categories:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      TabMenuList
    }
	}
</script>

<style scoped="scoped">

</style>
