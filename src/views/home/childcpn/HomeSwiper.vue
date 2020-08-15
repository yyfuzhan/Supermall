<template>
  <div>
    <Swiper>
      <SwiperItem v-for='item in banners'>
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgload">
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
    data(){
      return{
        isload:true
      }
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
		methods:{
			imgload(){
        if(this.isload){
				this.$emit('swiperimgload')
        this.isload=false
        }
			}
		}
  }
</script>

<style scoped>
</style>
