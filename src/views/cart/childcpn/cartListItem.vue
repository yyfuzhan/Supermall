<template>
  <div id="shop-item">
   <div class="item-selector">
      <check-button :is-check="obj.checked"  @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="obj.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{obj.title}}</div>
      <div class="item-desc">商品描述: {{obj.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{obj.price}}</div>
        <div class="item-count right">x{{obj.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
	export default {
		name:'cartListItem',
    props:{
      obj:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      checkClick(){
        this.obj.checked=!this.obj.checked
      }
    }
	}
</script>

<style scoped="scoped">
 #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img >img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .left {
    color: orangered;
  }
</style>
