<template>
	<div class="goodsListItem">

		<div @click="itemClick">
		  <img :src="showimg" alt="" @load="imgload">
      <div class="goods-info">
		  <p class="tile">{{goodslist.title}}</p>
		  <span class="price">{{goodslist.price}}</span>
		  <span class="collect">{{goodslist.cfav}}</span>
      </div>
		</div>

	</div>
</template>

<script>
	export default {
		name:'goodsListItem',
		props: {
		  goodslist: {
		    type: Object,
		    default () {
		      return {}
		    }
		  }
		},
    computed:{
      showimg(){
        return this.goodslist.image ||  this.goodslist.show.img
      }
    },
    methods:{
      imgload(){
        //发射一个事件 到事件总线
         this.$bus.$emit('imgloadfinish')
        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('imgloadfinish')
        // }else if(this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailimgloadfinish')
        // }
      },
      itemClick(){
        this.$router.push('/detail/' + this.goodslist.iid)
      }
    }
	}
</script>

<style scoped>
  .goodsListItem{
  width: 48%;
  padding-bottom: 40px;
  position: relative;
  }

  .goodsListItem img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>
