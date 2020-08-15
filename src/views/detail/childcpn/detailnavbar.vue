<template>
	<div>
		<nav-bar>
      <div slot="left" class="back"><img src="../../../assets/img/common/back.svg" @click="back"></div>
      <div slot="center" class="title">
       <!-- 动态绑定红色选中文字样式 ,默认选中0,拿去做对比是否等于下标,等于就为true -->
       <!-- 点击事件时把index值传过去,把现在的current改成index的值 -->
        <div class="title-item"
         v-for="(item,index) in titles"
         :class="{active:currentIndex==index}"
         @click="itemClick(index)">
         {{item}}</div>
      </div>
    </nav-bar>
	</div>
</template>

<script>
  import NavBar from'../../../components/common/navbar/NavBar.vue'
	export default {
		name:'detailnavbar',
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
      },
      back(){
        this.$router.back()
      }
    }
	}
</script>

<style scoped="scoped">
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    margin-top: 8px;
  }
</style>
