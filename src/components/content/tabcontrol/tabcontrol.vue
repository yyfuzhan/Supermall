<template>
	<div class="tabcontrol">
		<div v-for="(item,index) in titles" @click="itemClick(index)"
    class="tabcontrol-item" :class="{Acitve:index===currentIndex}">
      <span>{{item}}</span>
    </div>
	</div>
</template>

<script>
	export default {
		name:'tabcontrol',
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
        this.$emit('tabClick',index)
      }
    }
	}
</script>

<style>
  .tabcontrol{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    position: sticky;
    top: 44px;
    background-color: #fff;
		z-index: 3;
  }
  .tabcontrol-item{
    flex:1;

  }
  .Acitve{
    color: var(--color-high-text);

  }
  .Acitve span{
    border-bottom: 3px solid var(--color-high-text) ;
  }
   .tabcontrol-item span{
    padding: 5px;
   }
</style>
