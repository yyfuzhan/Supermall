<template>
	<div class="cartButtomBar">
    <div class="checkall">
      <check-button :is-check="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total">总计：{{totalprice}}</div>
    <div class="calc" @click="tototal">去计算({{checklength}})</div>

	</div>
</template>

<script>
  import  CheckButton from '../../../components/content/checkButton/CheckButton.vue'
	export default {
		name:'cartButtomBar',
    components:{
     CheckButton
    },
    computed:{
      totalprice(){
      return '￥'+ this.$store.state.cartlist.filter(item=>{
           return item.checked
        }).reduce((pre,item)=>{
          return pre + item.count *item.price
        },0)
      },
      checklength(){
       return this.$store.state.cartlist.filter(item=>item.checked).length
      },
      isSelectAll(){
        if (this.$store.state.cartlist.length===0)return false
        return !this.$store.state.cartlist.filter(item=>!item.checked).length
       }
    },
    methods:{
      checkClick(){
        if (this.isSelectAll){//全部选中
          this.$store.state.cartlist.forEach(item=>item.checked=false)
        }else{//有部分不选中
          this.$store.state.cartlist.forEach(item=>item.checked=true)
        }
      },
      tototal(){
        this.$emit('tototal')
      }
    }
	}
</script>

<style scoped="scoped">
  .cartButtomBar{
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;

  }
  .checkall{
    display: flex;
    align-items: center;
    margin-left:10px ;
    width: 80px;

  }
  .check-button{
    height: 20px;
    width: 20px;
    line-height: 20px;
    margin-right:10px ;
  }
  .total{
    margin-left: 30px;
    flex: 1;
  }
  .calc{
    width: 90px;
    background-color: orange;
    color: white;
    text-align: center;
  }
</style>
