<template>
	<div class="profile">
		<nav-bar class="navbar">
      <div slot="center">我的档案</div>
    </nav-bar>

     <logon></logon>

   <scroll class="wrapper">
     <div class="pay">
       <div class="Balance">
         <span class="Balance-money">0.00</span>元
         <div class="word">我的余额</div>
       </div>
       <div class="Balance">
         <span class="Balance-money">0</span>个
         <div class="word">我的优惠</div>
       </div>
       <div class="Balance">
         <span class="Balance-money">0</span>分
         <div class="word">我的积分</div>
       </div>
     </div>

     <list-view :listData="orderList" class="order-list"></list-view>
     <list-view :list-data="serviceList" class="service-list"></list-view>
   </scroll>
	</div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import logon from  './childcpn/logon.vue'
  import ListView from  './childcpn/ListView.vue'
  import scroll from '../../components/common/scroll/scroll.vue'

	export default {
		name:'profile',
    components:{
      NavBar,
      logon,
      ListView,
      scroll
    },
   data: function () {
		  return {
		    orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    },
    mounted: function () {
    }
	}
</script>

<style scoped="scoped">
  .wrapper{
    position: absolute;
    top: 138px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .profile{
    height: calc(100vh);
    background-color: #eee;
  }
  .navbar{
    background-color: var(--color-tint);
    color: white;
  }
  .pay{
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: white;
  }

    .Balance-money{
      font-size: 24px;
      font-weight: 700;
      color: var(--color-tint);

    }
    .Balance{
      text-align: center;
      flex: 1;
      padding: 18px;
    }
    .word{
      padding: 3px;
    }
  .order-list, .service-list {
    margin-top: 12px;
  }
</style>
