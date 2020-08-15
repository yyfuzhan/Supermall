<template>
  <div class="goodsList">
    <goods-list-item v-for="item in goods" :goodslist="item">

    </goods-list-item>
  </div>
</template>

<script>
  import goodsListItem from './goodsListItem.vue'
  export default {
    name: 'goodsList',
    components: {
      goodsListItem
    },
    props: {
      goods: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
