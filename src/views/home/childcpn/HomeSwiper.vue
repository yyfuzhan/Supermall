<template>
  <div>
    <Swiper>
      <SwiperItem v-for='item in banners'>
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import Swiper from '../../../components/common/swiper/Swiper.vue'
  import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>
</style>
