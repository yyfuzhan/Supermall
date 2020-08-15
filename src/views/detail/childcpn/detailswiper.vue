<template>
  <div >
    <swiper class="detail-swiper">
      <SwiperItem v-for="item in topimages"  class="swiper-item">
        <img :src="item" alt="">
      </SwiperItem>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper/index.js'
  export default {
    name: 'detailswiper',
    components:{
      Swiper,
      SwiperItem
    },
    props: {
      topimages: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
  .swiper-item img{
    position: absolute;
  }
</style>
